import { RequestHandler } from "express";
import User, { comparePassword, createToken} from "../db/models/UserModel";

export const login: RequestHandler = async (req, res, _next) => {
    const {email, password} = req.body;

    const user = await User.findOne({where: {email}})

    if(!user) {
        res.json({error: "User not registered"})
    } 

    const isPassValidate = await comparePassword(password, user!.password)

    if (!isPassValidate) {
        res.json({error: "Password is incorrect"})
    }

    const token = createToken(user!.password)

    const id = user;
    res.status(200).json({message: "Token Generated", user: {id, email}, token})


}