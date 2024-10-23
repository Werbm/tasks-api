import { RequestHandler } from "express";
import User, { hashPassword } from "../db/models/UserModel";

export const createUser: RequestHandler = async (req, res, _next) => {
    const {user, password, email} = req.body;
    
    const existingUser = await User.findOne({where: {email}})

    if(existingUser) {
        res.json({error: "User already registered"})
    } 

    const hashedPassword = await hashPassword(password, 10);
    await User.create({user: user, email: email, password: hashedPassword});

    const {id} = user;
    res.status(201).json({message: "User Registered", user: {user, email}});
}
