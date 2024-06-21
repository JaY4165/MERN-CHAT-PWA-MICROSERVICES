import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { limiter } from './utils/rate-limiter';
import cookieParser from 'cookie-parser';
import * as userRouter from './routes/user.router';
import { Request, Response } from 'express';
import morgan from 'morgan';
import logger from './utils/logger';

const app = express();
const port = process.env.PORT || 8081;

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

const morganFormat = ':method :url :status :response-time ms';

app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                const logObject = {
                    method: message.split(' ')[0],
                    url: message.split(' ')[1],
                    status: message.split(' ')[2],
                    responseTime: message.split(' ')[3],
                };
                logger.info(JSON.stringify(logObject));
            },
        },
    })
);

app.use('/api/user', userRouter.default);

app.use('*', (req: Request, res: Response) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
).on('error', (err) => {
    console.error('Error starting server:', err);
    process.exit(1);
});
