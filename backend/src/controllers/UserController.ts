import { RequestHandler } from "express";
import User, { hashPassword } from "../db/models/UserModel";

export const createUser: RequestHandler = async (req, res, _next) => {
    const {user, password, email} = req.body;
    
    const existingUser = await User.findOne({where: {email}})

    if(existingUser) {
        res.status(400).json({error: "User already registered"})
        return
    } 

    const hashedPassword = await hashPassword(password, 10);
    await User.create({user: user, email: email, password: hashedPassword});

    res.status(201).json({message: "User Registered", user: {user, email}});
}
