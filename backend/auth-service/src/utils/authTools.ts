import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { LoginResponse } from "../types/authTypes";
import { NextFunction, Response } from "express";



export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}


export async function generateAccessToken(payload: LoginResponse): Promise<string> {
    const secret = process.env.JWT_SECRET_KEY_ACCESS_TOKEN as Secret;
    return await jwt.sign(payload, secret, {
        expiresIn: "45s",
    });
};


export async function generateRefreshToken(payload: LoginResponse): Promise<string> {
    const secret = process.env.JWT_SECRET_KEY_REFRESH_TOKEN as Secret;
    return await jwt.sign(payload, secret, {
        expiresIn: "1m",
    });
};



export async function verifyAccessToken(token: string, res: Response, next: NextFunction): Promise<string | JwtPayload | undefined> {
    try {
        return await jwt.verify(token, process.env.JWT_SECRET_KEY_ACCESS_TOKEN as Secret);
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(400).json({ message: 'Acess Token has expired' });
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(400).json({ message: 'Invalid Acess Token' });
        } else {
            console.log('Access Token verification error :', error)
            next(error)
        }
    }

}


export async function verifyRefreshToken(token: string, res: Response, next: NextFunction): Promise<string | JwtPayload | undefined> {
    try {
        return await jwt.verify(token, process.env.JWT_SECRET_KEY_REFRESH_TOKEN as Secret);
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(400).json({ message: 'Refresh Token has expired' });
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(400).json({ message: 'Invalid Refresh Token' });
        } else {
            console.error('Refresh Token verification error :', error);
            next(error)
        }
    }
}



