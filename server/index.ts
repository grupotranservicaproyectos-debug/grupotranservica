import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import fs from "fs";
import path from "path";
import sanitizeHtml from "sanitize-html";
import { init, parse } from "es-module-lexer";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { storage } from "./storage";

function parseImportBindings(content: string, ss: number, se: number) {
  const stmt = content.substring(ss, se);
  const match = stmt.match(/import\{([^}]+)\}/);
  if (!match) return [];
  return match[1].split(',').map(b => {
    const parts = b.trim().split(/\s+as\s+/);
    return { imported: parts[0].trim(), local: (parts[1] || parts[0]).trim() };
  });
}

function parseExportStatement(content: string) {
  const match = content.match(/export\{([^}]+)\}\s*;?\s*$/);
  if (!match) return { bindings: [] as {local: string, exported: string}[], fullMatch: '' };
  const bindings = match[1].split(',').map(b => {
    const parts = b.trim().split(/\s+as\s+/);
    return { local: parts[0].trim(), exported: (parts[1] || parts[0]).trim() };
  });
  return { bindings, fullMatch: match[0] };
}

const circularDepOverrides: Map<string, Buffer> = new Map();

async function fixCircularDeps() {
  const distAssetsDir = path.resolve(import.meta.dirname, "public", "assets");
  if (!fs.existsSync(distAssetsDir)) return;

  const jsFiles = fs.readdirSync(distAssetsDir).filter(f => f.endsWith('.js'));
  const vendorFile = jsFiles.find(f => f.startsWith('vendor-') && !f.startsWith('vendor-react') && !f.startsWith('vendor-icons'));
  const vendorReactFile = jsFiles.find(f => f.startsWith('vendor-react'));
  if (!vendorFile || !vendorReactFile) return;

  const vendorPath = path.join(distAssetsDir, vendorFile);
  const vendorReactPath = path.join(distAssetsDir, vendorReactFile);
  const vendorContent = fs.readFileSync(vendorPath, 'utf-8');

  if (vendorContent.length < 100) return;

  const vendorReactContent = fs.readFileSync(vendorReactPath, 'utf-8');
  const hasCircular = vendorContent.includes(`from"./${vendorReactFile}"`) &&
                      vendorReactContent.includes(`from"./${vendorFile}"`);
  if (!hasCircular) return;

  log("Circular dependency detected between vendor chunks. Fixing with IIFE merge...");

  await init;
  const [vImports] = parse(vendorContent);
  const [vrImports] = parse(vendorReactContent);

  const vReactImport = vImports.find(imp => vendorContent.substring(imp.s, imp.e) === `./${vendorReactFile}`);
  const vrVendorImport = vrImports.find(imp => vendorReactContent.substring(imp.s, imp.e) === `./${vendorFile}`);
  if (!vReactImport || !vrVendorImport) return;

  const vToVrBindings = parseImportBindings(vendorContent, vReactImport.ss, vReactImport.se);
  const vrToVBindings = parseImportBindings(vendorReactContent, vrVendorImport.ss, vrVendorImport.se);

  const vExport = parseExportStatement(vendorContent);
  const vrExport = parseExportStatement(vendorReactContent);

  if (vExport.bindings.length === 0 || vrExport.bindings.length === 0) {
    log("Warning: could not parse export statements from vendor chunks. Skipping fix.");
    return;
  }

  const vrToVMap = vrToVBindings.map(bind => {
    const vExp = vExport.bindings.find(e => e.exported === bind.imported);
    return { alias: bind.local, target: vExp ? vExp.local : bind.imported };
  });

  const vToVrMap = vToVrBindings.map(bind => {
    const vrExp = vrExport.bindings.find(e => e.exported === bind.imported);
    return { alias: bind.local, target: vrExp ? vrExp.local : bind.imported };
  });

  let vendorBody = vendorContent.substring(0, vReactImport.ss) + vendorContent.substring(vReactImport.se);
  if (vExport.fullMatch) vendorBody = vendorBody.replace(vExport.fullMatch, '');

  let vrBody = vendorReactContent.substring(0, vrVendorImport.ss) + vendorReactContent.substring(vrVendorImport.se);
  if (vrExport.fullMatch) vrBody = vrBody.replace(vrExport.fullMatch, '');

  const vExposeVars = vExport.bindings.map(e => `__v$${e.exported}`);
  const vrExposeVars = vrExport.bindings.map(e => `__vr$${e.exported}`);

  const vOuterDecls = vExposeVars.length > 0 ? `var ${vExposeVars.join(',')};` : '';
  const vrOuterDecls = vrExposeVars.length > 0 ? `var ${vrExposeVars.join(',')};` : '';
  const vToVrOuterDecls = vToVrBindings.length > 0 ? `var ${vToVrBindings.map(b => b.local).join(',')};` : '';

  const vExposeAssignments = vExport.bindings.map(e => `__v$${e.exported}=${e.local}`).join(';');
  const vrExposeAssignments = vrExport.bindings.map(e => `__vr$${e.exported}=${e.local}`).join(';');

  const vrAliases = vrToVMap.map(m => `var ${m.alias}=__v$${vrToVBindings.find(b => b.local === m.alias)!.imported};`).join('');
  const vAliases = vToVrMap.map(m => `${m.alias}=__vr$${vToVrBindings.find(b => b.local === m.alias)!.imported};`).join('');

  const allExports: string[] = [];
  for (const e of vrExport.bindings) {
    allExports.push(`__vr$${e.exported} as ${e.exported}`);
  }
  for (const e of vExport.bindings) {
    allExports.push(`__v$${e.exported} as __v_${e.exported}`);
  }
  const exportStatement = `export{${allExports.join(',')}}`;

  const vendorReExports = vExport.bindings.map(e => `__v_${e.exported} as ${e.exported}`).join(',');
  const vendorNewContent = `export{${vendorReExports}}from"./${vendorReactFile}"`;

  const merged = [
    vOuterDecls,
    vrOuterDecls,
    vToVrOuterDecls,
    `(function(){${vendorBody};${vExposeAssignments}})();`,
    vrAliases,
    `(function(){${vrBody};${vrExposeAssignments}})();`,
    vAliases,
    exportStatement
  ].join('');

  if (!merged.includes('export{')) {
    log("Warning: merged output missing export statement. Aborting fix to prevent corruption.");
    return;
  }

  circularDepOverrides.set(`/assets/${vendorReactFile}`, Buffer.from(merged));
  circularDepOverrides.set(`/assets/${vendorFile}`, Buffer.from(vendorNewContent));

  log(`Fixed circular dependency (in-memory): merged ${vendorFile} (${vendorContent.length}B) + ${vendorReactFile} (${vendorReactContent.length}B) = ${merged.length}B`);
  log(`  vendor-react imports from vendor: ${vrToVBindings.length} bindings`);
  log(`  vendor imports from vendor-react: ${vToVrBindings.length} bindings`);
}

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
      "script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com https://s.ytimg.com https://replit.com https://replit-cdn.com https://www.googletagmanager.com https://www.google-analytics.com; " +
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
    await fixCircularDeps();

    if (circularDepOverrides.size > 0) {
      app.use((req, res, next) => {
        const override = circularDepOverrides.get(req.path);
        if (override) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          return res.send(override);
        }
        next();
      });
      log(`Serving ${circularDepOverrides.size} patched vendor chunks from memory`);
    }

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
