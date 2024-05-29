import { NextFunction, Request, RequestHandler, Response } from "express";
import { z, ZodError } from "zod";
import { StatusCodes } from "http-status-codes"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateRequest(schema: z.AnyZodObject): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: "Validation failed",
                    errors: error.errors,
                });
            }
            next(error);
        }
    };
}