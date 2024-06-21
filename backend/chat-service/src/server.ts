import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { limiter } from './utils/rate-limiter';
import cookieParser from 'cookie-parser';
import * as authRouter from "./routes/chat.router"
import { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8082;

app.use(
    express.json({
        limit: '1mb',
    })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
);
app.use(limiter);

app.use("/api/chat", authRouter.default);

app.use("*"
    , (req: Request, res: Response) => {
        res.status(404).json({ message: "Route not found" });
    });


app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
).on('error', (err) => {
    console.error('Error starting server :', err);
    process.exit(1);
});
