export interface User {
    email: string;
    password: string;
}

export interface SignupResponse {
    id: string;
    email: string;
}


export interface LoginResponse {
    id: string;
    email: string;
}

export interface TokenVerificationType {
    id: string;
    email: string;
    iat: number;
    exp: number;
}