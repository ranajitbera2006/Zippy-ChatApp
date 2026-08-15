import express from "express";
import { getMessageController, sendMessageController } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRouter = express.Router();

messageRouter.post("/send/:id", protectRoute, sendMessageController);
messageRouter.get("/:id", protectRoute, getMessageController);

export default messageRouter;