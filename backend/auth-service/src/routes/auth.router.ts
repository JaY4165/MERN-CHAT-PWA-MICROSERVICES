import { Router } from 'express';
import {
    signUp,
    login,
    getUser,
    refreshToken,
} from '../controllers/auth.controller';
import { verifyUser } from '../middleware/authMiddleware';
import { validateRequest } from '../validations/requestValidation';
import { UserSchema } from '../types/authTypes';

const router: Router = Router();

router.post('/signup', validateRequest(UserSchema), signUp);

router.post('/login', validateRequest(UserSchema), login);

router.get('/refresh', refreshToken);

router.get('/user', verifyUser, getUser);

export default router;
