import express, { NextFunction, Request, Response, urlencoded } from 'express';
import TaskRouter from './routes/TaskRouter';
import config from './db/config/db';
import 'dotenv/config'
import UserRouter from './routes/UserRouter';
import { requireAuth } from './middleware/AuthMiddleware';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended:true }))
app.use('/task', requireAuth, TaskRouter)
app.use('/auth', UserRouter)
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({ message: err })
})

config.sync().then(() => {
    console.log('database running')
}).catch((e) => {
    console.log("error: ", e)
})

export default app;