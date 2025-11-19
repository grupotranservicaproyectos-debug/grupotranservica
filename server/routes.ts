import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertContactoRecibidoSchema, insertBlogSchema } from "@shared/schema";
import { z } from "zod";
import { sendNotificationEmails, sendConfirmationEmail } from "./email";
import { generateBlog, generate5Blogs } from "./lib/blogGenerator";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // In a real application, you would send an email notification here
      console.log("New contact request:", contactRequest);
      
      res.json({ 
        success: true, 
        message: "Solicitud de cotización enviada exitosamente. Nos pondremos en contacto contigo pronto." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Datos inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  // Get all contact requests (for admin purposes)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener solicitudes" 
      });
    }
  });

  // New contact endpoint with email notifications
  app.post("/api/contacto", async (req, res) => {
    try {
      // Validate input data
      const validatedData = insertContactoRecibidoSchema.parse(req.body);
      
      // Send notification emails in parallel
      const emailResults = await sendNotificationEmails({
        nombre: validatedData.nombre,
        correo: validatedData.correoContacto,
        telefono: validatedData.telefono,
        asunto: validatedData.asunto,
        mensaje: validatedData.mensaje,
      });

      // Send confirmation email to user (don't wait for it)
      sendConfirmationEmail(validatedData.correoContacto, validatedData.nombre).catch(error => {
        console.error('Error sending confirmation email:', error);
      });

      // Store in database with list of successfully notified emails
      const contacto = await storage.createContactoRecibido({
        ...validatedData,
        correosNotificados: emailResults,
      });

      res.json({
        success: true,
        message: "Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.",
        data: {
          id: contacto.id,
          notificacionesEnviadas: emailResults.length,
        },
      });
    } catch (error) {
      console.error('Error in /api/contacto:', error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Datos inválidos en el formulario",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Error al procesar tu solicitud. Por favor intenta nuevamente.",
        });
      }
    }
  });

  // Get all contactos (for admin purposes)
  app.get("/api/contactos", async (req, res) => {
    try {
      const contactos = await storage.getContactosRecibidos();
      res.json(contactos);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error al obtener contactos",
      });
    }
  });

  // Blog routes
  app.get("/api/blogs", async (req, res) => {
    try {
      const { city, sector, published } = req.query;
      const filters: any = {};
      if (city) filters.city = city as string;
      if (sector) filters.sector = sector as string;
      if (published !== undefined) filters.published = published as string;
      
      const blogs = await storage.getBlogs(filters);
      res.json(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({
        success: false,
        message: "Error al obtener blogs",
      });
    }
  });

  app.get("/api/blogs/stats", async (req, res) => {
    try {
      const stats = await storage.getBlogStats();
      res.json(stats);
    } catch (error) {
      console.error('Error fetching blog stats:', error);
      res.status(500).json({
        success: false,
        message: "Error al obtener estadísticas",
      });
    }
  });

  app.get("/api/blogs/:slug", async (req, res) => {
    try {
      const blog = await storage.getBlogBySlug(req.params.slug);
      if (!blog) {
        return res.status(404).json({
          success: false,
          message: "Blog no encontrado",
        });
      }
      
      await storage.updateBlogViews(blog.id);
      res.json(blog);
    } catch (error) {
      console.error('Error fetching blog:', error);
      res.status(500).json({
        success: false,
        message: "Error al obtener blog",
      });
    }
  });

  app.post("/api/blogs/generate", async (req, res) => {
    try {
      const blog = await generateBlog();
      const createdBlog = await storage.createBlog(blog);
      res.json({
        success: true,
        message: "Blog generado exitosamente",
        data: createdBlog,
      });
    } catch (error) {
      console.error('Error generating blog:', error);
      res.status(500).json({
        success: false,
        message: "Error al generar blog",
      });
    }
  });

  app.post("/api/blogs/generate-batch", async (req, res) => {
    try {
      const blogs = await generate5Blogs();
      const createdBlogs = [];
      
      for (const blog of blogs) {
        const created = await storage.createBlog(blog);
        createdBlogs.push(created);
      }
      
      res.json({
        success: true,
        message: `${createdBlogs.length} blogs generados exitosamente`,
        data: createdBlogs,
      });
    } catch (error) {
      console.error('Error generating blogs:', error);
      res.status(500).json({
        success: false,
        message: "Error al generar blogs",
      });
    }
  });

  app.get("/api/sitemap.xml", async (req, res) => {
    try {
      const blogs = await storage.getBlogs({ published: 'true' });
      const baseUrl = process.env.SITE_URL || 'https://grupotranservica.com';
      
      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
      
      const mainPages = [
        { loc: '/', changefreq: 'weekly', priority: 1.0 },
        { loc: '/blog', changefreq: 'daily', priority: 0.9 },
      ];
      
      mainPages.forEach((page) => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}${page.loc}</loc>\n`;
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
        xml += `    <priority>${page.priority}</priority>\n`;
        xml += '  </url>\n';
      });
      
      blogs.forEach((blog) => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}/blog/${blog.slug}</loc>\n`;
        xml += `    <lastmod>${blog.publishedAt?.toISOString()}</lastmod>\n`;
        xml += '    <changefreq>monthly</changefreq>\n';
        xml += '    <priority>0.8</priority>\n';
        xml += '  </url>\n';
      });
      
      xml += '</urlset>';
      
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
