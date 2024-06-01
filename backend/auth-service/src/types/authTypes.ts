import z from 'zod';

export const UserSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .trim()
        .min(8, { message: 'Password must contain at least 8 characters.' })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
                message:
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
            }
        ),
});

export type User = z.infer<typeof UserSchema>;

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
