import express, { NextFunction, Request, Response, urlencoded } from 'express';
import TaskRouter from './routes/TaskRouter';
import config from './db/config/db';
import 'dotenv/config'
import UserRouter from './routes/UserRouter';
import { requireAuth } from './middleware/AuthMiddleware';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'
import path from 'path'
import cors from 'cors'
const {ENABLED_CORS} = process.env


const app = express();
const swagger = YAML.load(path.join(__dirname, './api/swagger.yaml'))

app.use(express.json());
app.use(cors({
    origin: `${ENABLED_CORS}`
}))

app.use(urlencoded({ extended:true }))

app.use('/task', requireAuth, TaskRouter)
app.use('/auth', UserRouter)
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swagger))


app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({ message: err })
})

config.sync().then(() => {
    console.log('database running')
}).catch((e) => {
    console.log("error: ", e)
})

export default app;