"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.fetchById = exports.fetchAllTasks = exports.deleteTask = exports.createTask = void 0;
const TaskModel_1 = __importDefault(require("../db/models/TaskModel"));
const createTask = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield TaskModel_1.default.create(Object.assign({}, req.body));
    res.status(200).json({ message: 'Success', data: task });
});
exports.createTask = createTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield TaskModel_1.default.findByPk(id);
    if (!deleted) {
        res.status(404).json({ message: 'Not found' });
    }
    yield TaskModel_1.default.destroy({ where: { id } });
    res.status(204).send();
});
exports.deleteTask = deleteTask;
const fetchAllTasks = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const fetched = yield TaskModel_1.default.findAll();
    res.status(200).json({ message: 'Fetched', data: fetched });
});
exports.fetchAllTasks = fetchAllTasks;
const fetchById = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield TaskModel_1.default.findByPk(id);
    res.status(200).json({ message: 'Fetched', data: task });
});
exports.fetchById = fetchById;
const updateTask = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield TaskModel_1.default.update(Object.assign({}, req.body), { where: { id } });
    const updated = yield TaskModel_1.default.findByPk(id);
    res.status(200).json({ message: 'Updated', data: updated });
});
exports.updateTask = updateTask;
