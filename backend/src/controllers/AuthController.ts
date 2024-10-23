import { RequestHandler } from "express";
import User, { comparePassword, createToken} from "../db/models/UserModel";

export const login: RequestHandler = async (req, res, _next) => {
    const {email, password} = req.body;

    const user = await User.findOne({where: {email}})

    if(!user) {
        res.status(404).json({error: "User not registered"})
        return;
    } 

    const isPassValidate = await comparePassword(password, user!.password)

    if (!isPassValidate) {
        res.status(406).json({error: "Password is incorrect"})
        return;
    }

    const token = createToken(user!.password)

    const id = user;
    res.status(201).json({message: "Token Generated", user: {email}, token})


}