const express = require("express"); // import express lib
const router = express.Router(); // create router module

let tasks = [
  { id: 1, title: "Finish building the API", completed: true },
  { id: 2, title: "Wire up the frontend", completed: true },
  { id: 3, title: "Add task creation form", completed: true },
]; // create tasks array - hard coded for now

// set get for /tasks and responds with tasks in json format
router.get("/", (req, res) => {
  res.json(tasks);
});

// set post to create new tasks
router.post("/", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);
  res.status(204).end();
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id == id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (req.body.completed !== undefined) {
    task.completed = req.body.completed;
  }

  res.json(task);
});

module.exports = router;