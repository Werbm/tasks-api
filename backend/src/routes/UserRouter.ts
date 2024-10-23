import { Router } from "express";
import { createUser} from "../controllers/UserController";
import { login } from "../controllers/AuthController";

const UserRouter = Router()

UserRouter.post('/register', createUser)
UserRouter.post('/login', login)

export default UserRouter;