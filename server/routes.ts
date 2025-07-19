import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ 
        message: "Thank you for your message! I will get back to you soon.",
        contact: { id: contact.id }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    try {
      // In a real application, you would serve the actual resume file
      res.json({ 
        message: "Resume download initiated",
        downloadUrl: "/assets/rikhia-chakraborty-resume.pdf"
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
