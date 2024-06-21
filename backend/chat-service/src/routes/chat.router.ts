import { Router } from 'express';
import * as chatController from '../controllers/chat.controller';

const router: Router = Router();

router.post(
    '/create-conversation/:userId/:recipientId',
    chatController.createConversation
);

router.get('/read-conversation');

router.delete('/delete-conversation');

router.post('/send-message');

router.get('/read-message');

router.delete('/delete-message');

export default router;
