const express = require("express"); // import express lib
const router = express.Router(); // create router module

let tasks = [
  { id: 1, title: "Finish building the API", completed: true },
  { id: 2, title: "Wire up the frontend", completed: true },
  { id: 3, title: "Add task creation form", completed: false },
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

module.exports = router;