import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // No extra options needed
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};
