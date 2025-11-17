import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company"),
  cargoType: text("cargo_type"),
  estimatedWeight: integer("estimated_weight"),
  origin: text("origin"),
  destination: text("destination"),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactosRecibidos = pgTable("contactos_recibidos", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fechaRecibido: timestamp("fecha_recibido").defaultNow().notNull(),
  nombre: text("nombre").notNull(),
  correoContacto: text("correo_contacto").notNull(),
  telefono: text("telefono").notNull(),
  asunto: text("asunto").notNull(),
  mensaje: text("mensaje").notNull(),
  canal: text("canal").notNull().default("web"),
  estado: text("estado").notNull().default("pendiente"),
  correosNotificados: text("correos_notificados").array().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
});

export const insertContactoRecibidoSchema = createInsertSchema(contactosRecibidos).omit({
  id: true,
  fechaRecibido: true,
  correosNotificados: true,
}).extend({
  correosNotificados: z.array(z.string()).optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactoRecibido = z.infer<typeof insertContactoRecibidoSchema>;
export type ContactoRecibido = typeof contactosRecibidos.$inferSelect;
