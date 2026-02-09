import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import fs from "fs";
import path from "path";
import sanitizeHtml from "sanitize-html";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { storage } from "./storage";

const app = express();

// Enable GZIP compression for all responses
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');

  const isHTML = req.accepts('html') && !req.path.match(/\.(js|css|png|jpg|jpeg|webp|svg|ico|woff|woff2|ttf|eot|map|json|xml|txt|webmanifest)$/);
  if (isHTML) {
    res.setHeader('Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.youtube-nocookie.com https://s.ytimg.com https://replit.com https://replit-cdn.com https://www.googletagmanager.com https://www.google-analytics.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com data:; " +
      "img-src 'self' data: https: blob: https://i.ytimg.com https://img.youtube.com https://images.pexels.com; " +
      "media-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://i.ytimg.com https://*.ytimg.com https://*.googlevideo.com; " +
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com; " +
      "connect-src 'self' https://api.openrouter.ai https://generativelanguage.googleapis.com https://www.google-analytics.com https://vitals.vercel-insights.com wss: ws:; " +
      "object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests"
    );
    res.setHeader('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Serve attached_assets directory for static files (images, etc.) with aggressive caching
  app.use('/attached_assets', express.static('attached_assets', {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, path) => {
      if (path.endsWith('.webp') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.png')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));

  // Server-side prerendering for SEO-critical pages
  // Injects meta tags and sanitized content into HTML so Googlebot sees real content
  let cachedTemplate: string | null = null;

  function getBaseUrl(req: Request): string {
    const protocol = req.get("x-forwarded-proto") || req.protocol || "https";
    const host = req.get("host") || "grupotranservica.com";
    return `${protocol}://${host}`;
  }

  function getHtmlTemplate(): string | null {
    if (app.get("env") === "development") return null;
    if (cachedTemplate) return cachedTemplate;
    const distPath = path.resolve(import.meta.dirname, "public");
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      cachedTemplate = fs.readFileSync(indexPath, "utf-8");
      return cachedTemplate;
    }
    return null;
  }

  function injectMetaTags(html: string, meta: {
    title: string;
    description: string;
    canonical: string;
    ogType?: string;
    ogImage?: string;
    content?: string;
  }): string {
    const escapedTitle = meta.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const escapedDesc = meta.description.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    const ogType = meta.ogType || 'website';
    
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapedTitle}</title>`);
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapedDesc}" />`);
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${meta.canonical}" />`);
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapedTitle}" />`);
    html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapedDesc}" />`);
    html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${meta.canonical}" />`);
    html = html.replace(/<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:type" content="${ogType}" />`);
    if (meta.ogImage) {
      html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${meta.ogImage}" />`);
    }

    if (meta.content) {
      const sanitized = sanitizeHtml(meta.content, {
        allowedTags: ['h1', 'h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'article', 'section', 'div', 'span', 'img'],
        allowedAttributes: {
          'a': ['href', 'title'],
          'img': ['src', 'alt', 'width', 'height'],
        },
        allowedSchemes: ['https', 'http', 'tel', 'mailto'],
      });
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root"></div><div id="ssr-content" style="display:none">${sanitized}</div>`
      );
    }

    return html;
  }

  // Prerender SEO blog article pages
  app.get("/seo-blog/:slug", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const template = getHtmlTemplate();
      if (!template) return next();

      const blog = await storage.getBlogBySlug(req.params.slug);
      if (!blog) return next();

      const baseUrl = getBaseUrl(req);
      const html = injectMetaTags(template, {
        title: `${blog.metaTitle || blog.title} | TRANSERVICA`,
        description: blog.metaDescription || blog.excerpt || '',
        canonical: `${baseUrl}/seo-blog/${blog.slug}`,
        ogType: 'article',
        ogImage: blog.coverImage || undefined,
        content: `<article><h1>${blog.title}</h1>${blog.content || ''}</article>`,
      });

      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (error) {
      console.error("SSR error for /seo-blog/:slug:", error);
      next();
    }
  });

  // Prerender legal pages
  const legalPages: Record<string, { title: string; description: string }> = {
    "/terms": {
      title: "Términos y Condiciones | TRANSERVICA C.A.",
      description: "Términos y condiciones de servicio de TRANSERVICA C.A. - Transporte de cargas excepcionales en Venezuela.",
    },
    "/privacy": {
      title: "Política de Privacidad | TRANSERVICA C.A.",
      description: "Política de privacidad y protección de datos de TRANSERVICA C.A. - Transporte especializado en Venezuela.",
    },
    "/security": {
      title: "Política de Seguridad | TRANSERVICA C.A.",
      description: "Política de seguridad industrial y transporte de TRANSERVICA C.A. - Normas y certificaciones para cargas excepcionales.",
    },
    "/cookies": {
      title: "Política de Cookies | TRANSERVICA C.A.",
      description: "Política de cookies del sitio web de TRANSERVICA C.A. - Información sobre el uso de cookies.",
    },
  };

  for (const [route, meta] of Object.entries(legalPages)) {
    app.get(route, (req: Request, res: Response, next: NextFunction) => {
      try {
        const template = getHtmlTemplate();
        if (!template) return next();

        const baseUrl = getBaseUrl(req);
        const html = injectMetaTags(template, {
          title: meta.title,
          description: meta.description,
          canonical: `${baseUrl}${route}`,
        });

        res.status(200).set({ "Content-Type": "text/html" }).send(html);
      } catch (error) {
        console.error(`SSR error for ${route}:`, error);
        next();
      }
    });
  }

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
