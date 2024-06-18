import { Router } from "express";

const router: Router = Router();

router.post('/create-conversation');

router.get('/read-conversation');

router.delete('/delete-conversation');

router.post('/send-message');

router.get('/read-message');

router.delete('/delete-message');



export default router;
