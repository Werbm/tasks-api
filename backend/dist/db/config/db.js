"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sequelize_1 = require("sequelize");
const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;
const config = new sequelize_1.Sequelize({
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "postgres"
});
exports.default = config;
