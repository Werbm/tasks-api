"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const AuthController_1 = require("../controllers/AuthController");
const UserRouter = (0, express_1.Router)();
UserRouter.post('/register', UserController_1.createUser);
UserRouter.post('/login', AuthController_1.login);
exports.default = UserRouter;
