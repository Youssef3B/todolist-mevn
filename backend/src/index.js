import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = 4500;

const startServer = async () => {
  try {
    await connectDb(); // Ensure DB connection before listening ...
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Server startup failed:", error);
    process.exit(1);
  }
};
startServer();
