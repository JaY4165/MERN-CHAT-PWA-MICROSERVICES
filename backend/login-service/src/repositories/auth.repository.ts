/* eslint-disable @typescript-eslint/no-unused-vars */

import prisma from "../config/db.config";
import { SignupResponse, User } from "../types/authTypes";
import { comparePassword, generateAccessToken, hashPassword, verifyToken } from "../utils/authTools";


/* eslint-disable @typescript-eslint/no-explicit-any */
class AuthRepository {

    async registerUser(data: User): Promise<SignupResponse> {
        try {
            const userExists = await prisma.user.findUnique({
                where: {
                    email: data.email
                },
                select: {
                    id: true,
                    email: true,
                }
            });

            if (userExists) {
                throw new Error("User with this email already exists");
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
                }
            });
            console.log(result);
            return result;
        } catch (error: unknown) {
            console.log(error)
            throw new Error("Error while signing up user");
        }
    }

    async loginUser(data: User): Promise<string> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: data.email
                },
                select: {
                    id: true,
                    email: true,
                    password: true
                }
            });

            if (!user) {
                throw new Error("User not found");
            }

            const isPasswordValid = await comparePassword(data.password, user.password);

            if (!isPasswordValid) {
                throw new Error("Invalid Password");
            }

            const userData = {
                id: user.id,
                email: user.email
            }


            const accessToken = await generateAccessToken({
                id: userData.id,
                email: userData.email,
            });

            return accessToken;
        } catch (error: unknown) {
            throw new Error("Error while logging in user");
        }
    }
}

export default AuthRepository;