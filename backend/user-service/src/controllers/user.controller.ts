import { Request, Response } from "express";


export async function createNewProfile(req: Request, res: Response) {
    res.send('Create new profile');
}