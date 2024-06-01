/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Response } from 'express';
import prisma from '../config/db.config';
import { LoginResponse, SignupResponse, User } from '../types/authTypes';
import {
    comparePassword,
    generateAccessToken,
    generateRefreshToken,
    hashPassword,
    verifyRefreshToken,
} from '../utils/authTools';

/* eslint-disable @typescript-eslint/no-explicit-any */

type PayloadType = LoginResponse;
class AuthRepository {
    async registerUser(data: User): Promise<SignupResponse> {
        try {
            const userExists = await prisma.user.findUnique({
                where: {
                    email: data.email,
                },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (userExists) {
                throw new Error('User with this email already exists');
            }

            const hashedPassword = await hashPassword(data.password);

            const result: SignupResponse = await prisma.user.create({
                data: {
                    email: data.email,
                    password: hashedPassword,
                },
                select: {
                    id: true,
                    email: true,
                },
            });
            console.log(result);
            return result;
        } catch (error: unknown) {
            console.log(error);
            throw new Error('Error while signing up user');
        }
    }

    async loginUser(
        data: User
    ): Promise<{ accessToken: string; refreshToken: string }> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: data.email,
                },
                select: {
                    id: true,
                    email: true,
                    password: true,
                },
            });

            if (!user) {
                throw new Error('User not found');
            }

            const isPasswordValid = await comparePassword(
                data.password,
                user.password
            );

            if (!isPasswordValid) {
                throw new Error('Invalid Password');
            }

            const userData = {
                id: user.id,
                email: user.email,
            };

            const accessToken = await generateAccessToken({
                id: userData.id,
                email: userData.email,
            });

            const refreshToken = await generateRefreshToken({
                id: userData.id,
                email: userData.email,
            });

            return { accessToken, refreshToken } as {
                accessToken: string;
                refreshToken: string;
            };
        } catch (error: unknown) {
            throw new Error('Error while logging in user');
        }
    }

    async generateNewAccessToken(
        refreshToken: string,
        res: Response,
        next: NextFunction
    ): Promise<string> {
        try {
            const payload: any = await verifyRefreshToken(
                refreshToken,
                res,
                next
            );
            console.log(payload);

            const actInput: LoginResponse = {
                id: typeof payload === 'string' ? undefined : payload?.id,
                email: typeof payload === 'string' ? undefined : payload?.email,
            };

            console.log(actInput);

            const user = await prisma.user.findUnique({
                where: {
                    id: actInput.id,
                },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!user) {
                throw new Error('Unauthorized');
            }

            const accessToken = await generateAccessToken(
                user as LoginResponse
            );

            return accessToken;
        } catch (error: unknown) {
            throw new Error('Error while generating new access token');
        }
    }
}

export default AuthRepository;
