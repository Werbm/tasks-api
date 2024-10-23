import { RequestHandler } from "express";
import Task from "../db/models/TaskModel";

export const createTask: RequestHandler = async (req, res, _next) => {
    const task = await Task.create({...req.body});
    res.status(200).json({message: 'Success', data: task })
    
};

export const deleteTask: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deleted: Task|null = await Task.findByPk(id);

    if (!deleted) {
        res.status(404).json({ message: 'Not found'})
    }

    await Task.destroy({where:{id}});

    res.status(204).send()
}

export const fetchAllTasks: RequestHandler = async (req, res, _next) => {
    const fetched: Task[] = await Task.findAll();

    res.status(200).json({message: 'Fetched', data:fetched})
}

export const fetchById: RequestHandler = async(req, res, _next) => {
    const { id } = req.params;
    const task: Task|null = await Task.findByPk(id)

    res.status(200).json({message: 'Fetched', data:task})   
}

export const updateTask: RequestHandler = async (req, res, _next) => {
    const {id} = req.params;
    await Task.update({...req.body}, {where:{id}});
    const updated: Task | null = await Task.findByPk(id)
    res.status(200).json({message: 'Updated', data: updated})
}
