import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router: Router = Router();

router.post('/create-profile/:userId', userController.createNewProfile);

router.get('/read-profile/:userId', userController.getProfile);

router.put('/update-profile/:userId', userController.updateProfile);

router.get('/user-conversations/:userId', userController.getConversations);

router.get(
    'user-conversation/:userId/:recipientId',
    userController.getUniqueConversation
);

export default router;
