import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  deleteUserById,
  getUsersController,
} from "../controller/user.controller.js";
const userRouter = express.Router();

userRouter.get("/", protectRoute, getUsersController);
userRouter.delete("/:id", protectRoute, deleteUserById);

export default userRouter;
