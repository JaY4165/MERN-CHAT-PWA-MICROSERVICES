import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/authTools";

export async function verifyUser(req: Request, res: Response, next: NextFunction) {

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Token not found"
        });
    }

    try {
        const payload = verifyAccessToken(token, res, next)
        req.body.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({
            message: error
        });
    }

}