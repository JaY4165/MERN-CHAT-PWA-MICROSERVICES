import { Router } from "express";
import { signUp, login, getUser, refreshToken } from "../controllers/auth.controller";
import { verifyUser } from "../middleware/authMiddleware";

const router: Router = Router();

router.post('/signup', signUp);

router.post('/login', login);

router.get('/refresh', refreshToken)

router.get("/user", verifyUser, getUser)

export default router;