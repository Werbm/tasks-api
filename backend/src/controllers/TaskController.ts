import { RequestHandler } from "express";
import Task from "../db/models/TaskModel";

export const createTask: RequestHandler = async (req, res, _next) => {
  const task = await Task.create({ ...req.body });
  res.status(201).json({ message: "Success creating task", data: task });
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deleted: Task | null = await Task.findByPk(id);

  if (!deleted) {
    res.status(404).json({ message: "Not found" });
  }

  await Task.destroy({ where: { id } });

  res.status(204).send();
};

export const fetchAllTasks: RequestHandler = async (req, res, _next) => {
  const fetched: Task[] = await Task.findAll();

  if (fetched.length === 0) {
    res.status(204).json({message: 'No Content'})
  }

  res.status(200).json({ message: "Fetched", data: fetched });
};

export const fetchById: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  const task: Task | null = await Task.findByPk(id);

  if (!task) {
    res.status(404).json({ message: "Not found" });
  }

  res.status(200).json({ message: "Fetched", data: task });
};

export const updateTask: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  await Task.update({ ...req.body }, { where: { id } });
  const updated: Task | null = await Task.findByPk(id);

  if (!updated) {
    res.status(404).json({ message: "Not found" });
  }

  res.status(200).json({ message: "Updated", data: updated });
};
