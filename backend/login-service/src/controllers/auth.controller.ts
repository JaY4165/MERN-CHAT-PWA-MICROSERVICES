import AuthService from "../services/auth.service";
import { Request, Response } from "express";
import { SignupResponse, User } from "../types/authTypes";


export async function signUp(req: Request, res: Response) {
    const authService = new AuthService();
    try {
        const data: User = req.body;
        const result: SignupResponse = await authService.signUp(data);
        res.status(201).json(result);
    } catch (error: unknown) {
        res.status(500).send("Error while registering user");
    }
}

export async function login(req: Request, res: Response) {
    const authService = new AuthService();
    try {
        const data: User = req.body;
        const accessToken: string = await authService.login(data);
        res.status(200).json({ accessToken });
    } catch (error: unknown) {
        console.log(error)
        res.status(500).send("Error while logging in user");
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        res.status(200).json({ "user": "Hello world" });
    } catch (error) {
        console.log(error)
    }
}




