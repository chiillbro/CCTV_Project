import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import deviceRoutes from "./routes/deviceRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173" }));
const PORT = process.env.PORT || 8000;

app.use("/api/users", userRoutes);
app.use("/api/devices", deviceRoutes)

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));