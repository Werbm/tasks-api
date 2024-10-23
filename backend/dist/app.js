"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const TaskRouter_1 = __importDefault(require("./routes/TaskRouter"));
const db_1 = __importDefault(require("./db/config/db"));
require("dotenv/config");
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const AuthMiddleware_1 = require("./middleware/AuthMiddleware");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const swagger = yamljs_1.default.load(path_1.default.join(__dirname, './api/swagger.yaml'));
app.use(express_1.default.json());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use('/task', AuthMiddleware_1.requireAuth, TaskRouter_1.default);
app.use('/auth', UserRouter_1.default);
app.use('/api-doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger));
app.use((err, _req, res, _next) => {
    res.status(500).json({ message: err });
});
db_1.default.sync().then(() => {
    console.log('database running');
}).catch((e) => {
    console.log("error: ", e);
});
exports.default = app;
