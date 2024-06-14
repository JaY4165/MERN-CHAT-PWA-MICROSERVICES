import { Request, Response } from "express";
import UserService from "../services/user.service";
import { StatusCodes } from 'http-status-codes';


export async function createNewProfileController(req: Request, res: Response) {
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


export async function getProfileController(req: Request, res: Response) {
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


export async function updateProfileController(req: Request, res: Response) {
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


