import { Router } from 'express';
import { createNewProfileController, getConversationsController, getProfileController, getUniqueConversationController, updateProfileController } from '../controllers/user.controller';


const router: Router = Router();

router.post('/create-profile/:userId', createNewProfileController);

router.get('/read-profile/:userId', getProfileController)

router.put('/update-profile/:userId', updateProfileController);

router.get('/user-conversations/:userId', getConversationsController)

router.get('/user-conversation/:userId/:recipientId', getUniqueConversationController)

export default router;  
