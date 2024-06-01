import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const globalErrorHandler = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack);

    if (!res.headersSent) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something broke!');
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    next();
};
