import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersController } from "../controller/user.controller.js";
const userRouter = express.Router();

userRouter.get("/", protectRoute, getUsersController);

export default userRouter;
