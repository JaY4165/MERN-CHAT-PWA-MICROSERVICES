import { Router } from "express";
import { createConversationController } from "../controllers/chat.controller";

const router: Router = Router();

router.post('/create-conversation/:userId/:recipientId', createConversationController);

router.get('/read-conversation');

router.delete('/delete-conversation');

router.post('/send-message');

router.get('/read-message');

router.delete('/delete-message');



export default router;
