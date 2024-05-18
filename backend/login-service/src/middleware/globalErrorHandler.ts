import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    if (!res.headersSent) {
        res.status(500).send('Something broke!');
    }
    res.status(500).json({ message: 'Internal Server Error' })
    next()
};