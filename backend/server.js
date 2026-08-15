import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.router.js";
import connectDB from "./db/connect.js";
import messageRouter from "./routes/message.router.js";
import userRouter from "./routes/user.router.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening at http://localhost:${port}`);
});
