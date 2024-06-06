import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { limiter } from './utils/rate-limiter';
import * as authRouter from './routes/auth.router';
import cookieParser from 'cookie-parser';
import { globalErrorHandler } from './middleware/globalErrorHandler';

const app = express();
const port = process.env.PORT || 8080;

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

app.use('/api/auth', authRouter.default);

app.use(globalErrorHandler);

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
).on('error', (err) => {
    console.error('Error starting server:', err);
    process.exit(1);
});
