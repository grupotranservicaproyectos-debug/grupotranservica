import { type User, type InsertUser, type ContactRequest, type InsertContactRequest, type ContactoRecibido, type InsertContactoRecibido } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  createContactoRecibido(contacto: InsertContactoRecibido): Promise<ContactoRecibido>;
  getContactosRecibidos(): Promise<ContactoRecibido[]>;
  updateContactoEstado(id: string, estado: string): Promise<ContactoRecibido | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;
  private contactosRecibidos: Map<string, ContactoRecibido>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.contactosRecibidos = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const contactRequest: ContactRequest = { 
      ...insertRequest,
      company: insertRequest.company ?? null,
      cargoType: insertRequest.cargoType ?? null,
      estimatedWeight: insertRequest.estimatedWeight ?? null,
      origin: insertRequest.origin ?? null,
      destination: insertRequest.destination ?? null,
      id,
      createdAt: new Date()
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createContactoRecibido(insertContacto: InsertContactoRecibido): Promise<ContactoRecibido> {
    const id = randomUUID();
    const contacto: ContactoRecibido = {
      ...insertContacto,
      canal: insertContacto.canal ?? "web",
      estado: insertContacto.estado ?? "pendiente",
      correosNotificados: insertContacto.correosNotificados ?? [],
      id,
      fechaRecibido: new Date()
    };
    this.contactosRecibidos.set(id, contacto);
    return contacto;
  }

  async getContactosRecibidos(): Promise<ContactoRecibido[]> {
    return Array.from(this.contactosRecibidos.values()).sort(
      (a, b) => (b.fechaRecibido?.getTime() || 0) - (a.fechaRecibido?.getTime() || 0)
    );
  }

  async updateContactoEstado(id: string, estado: string): Promise<ContactoRecibido | undefined> {
    const contacto = this.contactosRecibidos.get(id);
    if (!contacto) return undefined;
    const updated = { ...contacto, estado };
    this.contactosRecibidos.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
