import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { StatusCodes } from 'http-status-codes';

export async function createNewProfile(req: Request, res: Response) {
    const userId: string = req.params.userId as string;
    const userService = new UserService();
    try {
        const result = await userService.createProfileService(userId);
        res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            'Error while creating profile'
        );
    }
}

export async function getProfile(req: Request, res: Response) {
    const userId: string = req.params.userId as string;
    const userService = new UserService();
    try {
        const result = await userService.getProfileService(userId);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            'Error while fetching profile'
        );
    }
}

export async function updateProfile(req: Request, res: Response) {
    const userId: string = req.params.userId as string;
    const data = req.body;
    const userService = new UserService();
    try {
        const result = await userService.updateProfileService(userId, data);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            'Error while updating profile'
        );
    }
}

export async function getConversations(req: Request, res: Response) {
    const userId: string = req.params.userId as string;
    const userService = new UserService();
    try {
        const result = await userService.getConversationsService(userId);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            'Error while fetching conversations'
        );
    }
}

export async function getUniqueConversation(req: Request, res: Response) {
    const userId: string = req.params.userId as string;
    const recipientId: string = req.params.recipientId as string;
    const userService = new UserService();
    try {
        const result = await userService.getUniqueConversationService(
            userId,
            recipientId
        );
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            'Error while fetching conversation'
        );
    }
}
