import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { LoginResponse } from "../types/authTypes";



export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}


export async function generateAccessToken(payload: LoginResponse): Promise<string> {

    const secret = process.env.JWT_SECRET_KEY as Secret;

    return await jwt.sign(payload, secret, {
        expiresIn: "1d",
    });
};


export async function verifyToken(token: string): Promise<string | JwtPayload> {
    try {
        return await jwt.verify(token, process.env.JWT_SECRET_KEY as Secret);
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            console.error('Token has expired.');
        } else if (error instanceof jwt.JsonWebTokenError) {
            console.error('Invalid token.');
        } else {
            console.error('Token verification error:', error);
        }
        throw error;
    }
}


export async function createRefreshToken() {
    return await jwt.sign({}, process.env.JWT_REFRESH_SECRET_KEY as Secret, {
        expiresIn: "1d",
    });
}