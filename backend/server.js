import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.router.js";
import connectDB from "./db/connect.js";
import messageRouter from "./routes/message.router.js";
import userRouter from "./routes/user.router.js";
import { app, server } from "./socket/socket.js";

const port = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port, () => {
  connectDB();
  console.log(`Server is listening at http://localhost:${port}`);
});
