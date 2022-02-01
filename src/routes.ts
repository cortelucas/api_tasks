import { Router, Request, Response } from "express";
import {
  finishedTask,
  getTask,
  getTasks,
  removeTask,
  saveTask,
  updateTask,
} from "./controller/TasksControllers";

export const routes = Router();

routes
  .get("/", (request: Request, response: Response) => {
    return response.json({ message: "Hello World!" });
  })
  .get("/tasks", getTasks)
  .get("/tasks/:id", getTask)
  .post("/tasks", saveTask)
  .put("/tasks/:id", updateTask)
  .patch("/tasks/:id", finishedTask)
  .delete("/tasks/:id", removeTask);
