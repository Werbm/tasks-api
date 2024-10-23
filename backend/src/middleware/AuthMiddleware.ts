import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import "dotenv/config";

interface IDecode {
  address: string;
  role: string;
  iat: number;
  exp: number;
}

interface RequestWithUserRole extends Request {
  user?: IDecode;
}

const { JWT_SECRET } = process.env;

export const requireAuth = async (
  req: RequestWithUserRole,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    const token = authorization!.split(" ")[1];
    if (!token) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }
    const decodedData = <IDecode>jwt.verify(token, `${JWT_SECRET}`);
    req.user = decodedData;
    next();
  } catch (e) {
    res.status(500).json({ message: "Unauthorized" });
    return;
  }
};
