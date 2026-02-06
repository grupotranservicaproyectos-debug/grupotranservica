import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import fs from "fs";
import path from "path";
import { registerRoutes } from "./routes";

function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

function serveStatic(app: express.Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

const app = express();

// Enable compression for maximum performance
app.use(compression({
  level: 6,
  threshold: 512,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Comprehensive security headers for PageSpeed Best Practices 100/100
app.use((req, res, next) => {
  // Basic security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // HSTS - Force HTTPS for 1 year with subdomains and preload
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  // Cross-Origin policies for security isolation
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  
  // Permissions Policy - Restrict unnecessary browser features
  res.setHeader('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');
  
  // Content Security Policy - Balanced for functionality and security
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.youtube-nocookie.com https://s.ytimg.com https://replit.com https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob: https://i.ytimg.com https://img.youtube.com",
    "media-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://i.ytimg.com https://*.ytimg.com https://*.googlevideo.com",
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com",
    "connect-src 'self' https://api.openrouter.ai https://generativelanguage.googleapis.com https://www.google-analytics.com https://vitals.vercel-insights.com wss: ws:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests"
  ].join('; ');
  res.setHeader('Content-Security-Policy', csp);
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Legacy URL redirects and SEO cleanup for Google Search Console issues
// Handle old WordPress URLs that Google is still trying to crawl
app.use((req, res, next) => {
  const path = req.path;
  const query = req.query;
  
  // Handle _escaped_fragment_ parameter (old AJAX crawling) - 301 to clean URL
  if (query._escaped_fragment_ !== undefined) {
    return res.redirect(301, '/');
  }
  
  // 301 Redirects - Map legacy URLs to current equivalents
  const redirects: Record<string, string> = {
    '/category/movimientos/': '/blog',
    '/category/movimientos': '/blog',
    '/transporte-terrestre-y-descarga-de-plantas-compresoras/': '/blog',
    '/transporte-terrestre-y-descarga-de-plantas-compresoras': '/blog',
    '/services/izamiento-carga/': '/#servicios',
    '/services/izamiento-carga': '/#servicios',
    '/contacto/': '/#contacto',
    '/contacto': '/#contacto',
  };
  
  if (redirects[path]) {
    return res.redirect(301, redirects[path]);
  }
  
  // 410 Gone - URLs that no longer exist and have no equivalent
  const goneUrls = [
    '/about-us-slider-2-bg-jpg/',
    '/about-us-slider-2-bg-jpg',
    '/11/',
    '/11',
  ];
  
  if (goneUrls.includes(path)) {
    return res.status(410).send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="robots" content="noindex">
        <title>410 - Página Eliminada | TRANSERVICA</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f5f5f5; }
          h1 { color: #155d29; }
          a { color: #155d29; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>410 - Página Eliminada</h1>
        <p>Esta página ya no existe en nuestro sitio.</p>
        <p><a href="/">Visitar página principal de TRANSERVICA</a></p>
      </body>
      </html>
    `);
  }
  
  next();
});

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
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      // Images: 1 year cache
      if (/\.(webp|jpg|jpeg|png|gif|svg|ico|avif)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      // Videos: 1 year cache
      else if (/\.(mp4|webm|ogg)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      // Fonts: 1 year cache
      else if (/\.(woff|woff2|ttf|eot|otf)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      // Other assets: 1 week cache
      else {
        res.setHeader('Cache-Control', 'public, max-age=604800');
      }
    }
  }));

  // Serve static assets with optimized caching for production builds
  app.use('/assets', express.static('dist/public/assets', {
    maxAge: '1y',
    immutable: true,
    etag: true,
    setHeaders: (res, filePath) => {
      if (/\.(js|css)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    const viteMod = "./vite";
    const { setupVite } = await import(/* @vite-ignore */ viteMod);
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
