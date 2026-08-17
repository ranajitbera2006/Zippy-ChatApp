import express from "express";
import {
  deleteMessageController,
  getMessageController,
  sendMessageController,
} from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRouter = express.Router();

messageRouter.post("/send/:id", protectRoute, sendMessageController);
messageRouter.get("/:id", protectRoute, getMessageController);
messageRouter.delete("/deleteMessage/:id", protectRoute, deleteMessageController);

export default messageRouter;
