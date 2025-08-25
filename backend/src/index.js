import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

const PORT = 4500;

app.listen(() => console.log(`Server is running on port ${PORT}`));
