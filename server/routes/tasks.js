const express = require("express"); // import express lib
const router = express.Router(); // create router module
const db = require('../db/db');

/* let tasks = [
  { id: 1, title: "Finish building the API", completed: true },
  { id: 2, title: "Wire up the frontend", completed: true },
  { id: 3, title: "Add task creation form", completed: true },
]; // create tasks array - hard coded for now */


// set get for /tasks and responds with tasks in json format
router.get("/", (req, res) => {
  const tasks = db.prepare("SELECT * FROM tasks").all();
  res.json(tasks);
});

// set post to create new tasks
router.post("/", (req, res) => {
  const {title} = req.body;
  const result = db.prepare("INSERT INTO tasks (title) VALUES (?)").run(title);
  const newTask = db.prepare("SELECT * FROM tasks WHERE id = ?").get(result.lastInsertRowid);
  res.status(201).json(newTask);
  });

router.delete("/:id", (req, res) => {
  db.prepare("DELETE FROM tasks WHERE id = ?").run(req.params.id);
  res.sendStatus(204);
});

router.patch("/:id", (req, res) => {
  const {id} = req.params;
  const {completed} = req.body;
  db.prepare("UPDATE tasks SET completed = ? WHERE id = ?").run(completed ? 1 : 0, id);
  const updatedTask = db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
  res.json(updatedTask);
});

module.exports = router;