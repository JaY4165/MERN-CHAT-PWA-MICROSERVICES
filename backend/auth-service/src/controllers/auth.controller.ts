import AuthService from "../services/auth.service";
import { NextFunction, Request, Response } from "express";
import { SignupResponse, User } from "../types/authTypes";
import { StatusCodes } from "http-status-codes";


export async function signUp(req: Request, res: Response) {
    const authService = new AuthService();
    try {
        const data: User = req.body;
        const result: SignupResponse = await authService.signUp(data);
        res.status(StatusCodes.CREATED).json(result);
    } catch (error: unknown) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error while registering user");
    }
}

export async function login(req: Request, res: Response) {
    const authService = new AuthService();
    try {
        const data: User = req.body;
        const { accessToken, refreshToken }: { accessToken: string; refreshToken: string; } = await authService.login(data);

        // res.cookie("accessToken", accessToken, {
        //     httpOnly: false,
        //     secure: false,
        //     sameSite: "none",
        //     maxAge: 3 * 60 * 1000

        // })

        // res.cookie("refreshToken", refreshToken, {
        //     httpOnly: false,
        //     secure: false,
        //     sameSite: "none",
        //     maxAge: 5 * 60 * 1000

        // })
        res.status(StatusCodes.OK).json({ success: true, accessToken: accessToken, refreshToken: refreshToken });
    } catch (error: unknown) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error while logging in user");
    }
}

export async function refreshToken(req: Request, res: Response, next: NextFunction) {
    const authService = new AuthService()
    try {
        const refreshTokenCookie: string = req.cookies.refreshToken as string;

        if (!refreshTokenCookie) {
            return res.status(401).json({ message: "No refresh token found" });
        }

        const refreshToken: string = refreshTokenCookie;

        const accessToken: string = await authService.generateNewAccessToken(refreshToken, res, next)

        res.cookie("accessToken", accessToken, {
            httpOnly: false,
            secure: false,
            sameSite: "none",
            maxAge: 45 * 1000
        })

        res.status(StatusCodes.OK).json({ success: true });
    } catch (error: unknown) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error while refreshing token");
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        res.status(StatusCodes.OK).json({ "user": "Hello world" });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error })
    }
}
