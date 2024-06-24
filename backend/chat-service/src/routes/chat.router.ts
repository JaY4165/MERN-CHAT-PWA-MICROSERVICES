import { Router } from 'express';
import * as chatController from '../controllers/chat.controller';


const router: Router = Router();

router.post(
    '/create-conversation/:userId/:recipientId',
    chatController.createConversationController
);

// router.get('/read-conversation', chatController.readConversation);

// router.delete('/delete-conversation/:userId/:recipientId', chatController.deleteConversation);

// router.post('/send-message');

// router.delete('/delete-message');

export default router;
