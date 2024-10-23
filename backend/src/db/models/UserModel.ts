import { DataTypes, Model } from "sequelize";
import config from "../config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"

const {JWT_SECRET} = process.env

class User extends Model {
  declare username: string;
  declare password: string;
}

const expireTime: number = 2*24*60*60


export const hashPassword = async (
  password: string,
  salt: number = 10
): Promise<string> => {
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword!);
};

export const createToken = (password: string) => {
    return jwt.sign({password}, `${JWT_SECRET}`, {
        expiresIn: expireTime
    })
}




User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: config,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

export default User;
