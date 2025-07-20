import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static assets from attached_assets directory
  app.use("/attached_assets", express.static(path.join(process.cwd(), "attached_assets")));

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
      // Redirect to Google Drive direct download link
      const driveDownloadUrl = "https://drive.google.com/uc?export=download&id=1uBZR-KalYksjivZSsXDW1kyvJgVBj2Zn";
      res.redirect(driveDownloadUrl);
    } catch (error) {
      res.status(500).json({ message: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
