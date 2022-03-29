import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response, NextFunction } from 'express';
import connect from './utils/connect-db';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  return res.send('<h1>Main page</h1>');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`)
  connect();
});
