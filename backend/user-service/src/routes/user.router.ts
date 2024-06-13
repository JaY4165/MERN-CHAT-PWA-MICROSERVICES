import { Router } from 'express';
import { createNewProfile } from '../controllers/user.controller';


const router: Router = Router();

router.post('/create-profile', createNewProfile);

router.post('/update-profile');

router.get('/:userId');

export default router;
