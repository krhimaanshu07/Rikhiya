import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();

(async () => {
  await registerRoutes(app);
})();

export default app; 