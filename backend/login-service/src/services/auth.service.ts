/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthRepository from "../repositories/auth.repository";
import { SignupResponse, User } from "../types/authTypes";

class AuthService {
    repository: AuthRepository;
    constructor() {
        this.repository = new AuthRepository()
    }

    async signUp(data: User): Promise<SignupResponse> {
        try {
            return await this.repository.registerUser(data);
        } catch (error: unknown) {
            throw new Error("Error while registering user");
        }
    }

    async login(data: User): Promise<string> {
        try {
            return await this.repository.loginUser(data);
        } catch (error) {
            throw new Error("Error while Logging In");
        }    }
}


export default AuthService;