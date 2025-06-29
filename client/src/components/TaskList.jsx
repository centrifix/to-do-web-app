import React, { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Fetching tasks failed:", err));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} {task.completed ? "✅" : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
