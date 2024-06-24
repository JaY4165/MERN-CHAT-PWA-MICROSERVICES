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

export async function readConversation(req: Request, res: Response) {
    const chatService = new ChatService();
    try {
        const { userId, recipientId }: { userId: string; recipientId: string } =
            req.body;
        const result: Record<string, string> =
            await chatService.readConversation(userId, recipientId);
        res.status(StatusCodes.OK).json(result);
    } catch (error: unknown) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            'Error while fetching conversations'
        );
    }
}

export async function deleteConversation(req: Request, res: Response) {
    const chatService = new ChatService();
    try {
        const { userId, recipientId }: { userId: string; recipientId: string } =
            req.body;
        const result: Record<string, string> =
            await chatService.deleteConversation(userId, recipientId);
        res.status(StatusCodes.OK).json(result);
    } catch (error: unknown) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            'Error while deleting conversation'
        );
    }
}

export async function sendMessage(req: Request, res: Response) {
    const chatService = new ChatService();
    try {
        const { message, userId, recipientId }: { message: string; userId: string; recipientId: string } = req.body;
        const result = await chatService.sendMessage(message, userId, recipientId)
        res.status(StatusCodes.OK).json(result);
    } catch (error: unknown) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error while sending message');
    }
}

export async function deleteMessage(req: Request, res: Response) {
    const chatService = new ChatService();
    try {
        const { messageId, userId, recipientId }: { messageId: string; userId: string; recipientId: string } = req.body;
        const result = await chatService.deleteMessage(messageId, userId, recipientId)
        res.status(StatusCodes.OK).json(result);
    } catch (error: unknown) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error while deleting message');
    }
}


