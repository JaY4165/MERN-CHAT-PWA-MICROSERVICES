import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ChatService from '../services/chat.service';

export async function createConversation(req: Request, res: Response) {
    const chatService = new ChatService();
    try {
        const { userId, recipientId }: { userId: string; recipientId: string } =
            req.body;
        const result: Record<string, string> =
            await chatService.createNewConversation(userId, recipientId);
        res.status(StatusCodes.CREATED).json(result);
    } catch (error: unknown) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            'Error while creating new conversation'
        );
    }
}
