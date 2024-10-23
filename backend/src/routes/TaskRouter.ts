import { Router } from "express";
import {
    createTask,
    deleteTask,
    fetchAllTasks,
    fetchById,
    updateTask
} from '../controllers/TaskController'

const TaskRouter = Router()

TaskRouter.get('/', fetchAllTasks);
TaskRouter.post('/', createTask);
TaskRouter.delete('/:id', deleteTask);
TaskRouter.get('/:id', fetchById)
TaskRouter.put('/:id', updateTask)


export default TaskRouter;