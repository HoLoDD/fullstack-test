import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import router from './routes/index';

const PORT = process.env.PORT || 4000;

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`App is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
