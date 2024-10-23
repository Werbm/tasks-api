import { RequestHandler } from "express";
import Task from "../db/models/TaskModel";

export const createTask: RequestHandler = async (req, res, _next) => {
  const task = await Task.create({ ...req.body });
  res.status(201).json({ message: "Success creating task", data: task });
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTask: Task | null = await Task.findByPk(id);

  if (!deletedTask) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  await Task.destroy({ where: { id } });

  res.status(204).json({message: "Deleted Successfully"});
};

export const fetchAllTasks: RequestHandler = async (req, res, _next) => {
  const fetchedTask: Task[] = await Task.findAll();

  if (fetchedTask.length === 0) {
    res.status(204).json({message: 'No Content'})
    return;
  }

  res.status(200).json({ message: "Fetched", data: fetchedTask });
};

export const fetchById: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  const task: Task | null = await Task.findByPk(id);

  if (!task) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json({ message: "Fetched", data: task });
};

export const updateTask: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  await Task.update({ ...req.body }, { where: { id } });
  const updatedTask: Task | null = await Task.findByPk(id);

  if (!updatedTask) {
    res.status(404).json({ message: "Not found" })
    return;
  }

  res.status(200).json({ message: "Updated", data: updatedTask });
};
