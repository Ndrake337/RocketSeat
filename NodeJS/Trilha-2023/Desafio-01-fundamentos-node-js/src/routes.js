import { randomUUID } from "node:crypto"; // UUID => Unique Universal ID
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;
      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: null,
      };

      database.insert("tasks", task);
      return res.writeHead(201).end();
    },
  },
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.query;
      if (title || description) {
        const tasks = database.select("tasks", {
          title,
          description,
        });
        return res.end(JSON.stringify(tasks));
      }
      const tasks = database.select("tasks", null);
      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;
      if(database.findById(id) = -1){
        return res.writeHead(404).end()
      }
      database.update("tasks", id, {
        title,
        description,
      });

      return res.writeHead(204).end();
    },
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const {id} = req.params
      if(database.findById(id) = -1){
        return res.writeHead(404).end()
      }
      database.delete('tasks', id)

      return res.writeHead(204).end()
    },
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const {id} = req.params
      if(database.findById(id) = -1){
        return res.writeHead(404).end()
      }
      database.delete('tasks', id)

      return res.writeHead(204).end()
    },
  },
];
