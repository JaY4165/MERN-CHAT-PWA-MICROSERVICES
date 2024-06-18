import { Router } from 'express';
import { createNewProfileController, getProfileController, updateProfileController } from '../controllers/user.controller';


const router: Router = Router();

router.post('/create-profile/:userId', createNewProfileController);

router.get('/read-profile/:userId', getProfileController)

router.put('/update-profile/:userId', updateProfileController);

router.get('/user-conversations/:userId')

router.get('user-conversation/:userId/:recipientId')

export default router;  
