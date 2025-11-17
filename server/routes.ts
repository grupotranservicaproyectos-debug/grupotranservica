import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertContactoRecibidoSchema } from "@shared/schema";
import { z } from "zod";
import { sendNotificationEmails, sendConfirmationEmail } from "./email";

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

  const httpServer = createServer(app);
  return httpServer;
}
