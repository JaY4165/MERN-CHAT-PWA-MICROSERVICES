import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { verifyUser } from '../middleware/authMiddleware';
import { validateRequest } from '../validations/requestValidation';
import { UserSchema } from '../types/authTypes';

const router: Router = Router();

router.post('/signup', validateRequest(UserSchema), authController.signUp);

router.post('/login', validateRequest(UserSchema), authController.login);

router.get('/refresh', authController.refreshToken);

router.get('/user', verifyUser, authController.getUser);

export default router;
