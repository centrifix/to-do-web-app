import React, { useEffect, useState } from "react";
import NewTaskForm from "./NewTaskForm";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((err) => console.error("Fetching tasks failed:", err));
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks((prev) => [...prev, newTask]);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
            setTasks((prev) => prev.filter((task) => task.id !== id));
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    const handleComplete = async (id) => {
        try {
            await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "PATCH", // or PUT if you prefer
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ completed: true }), // or toggle it dynamically
            });

            setTasks((prev) =>
                prev.map((task) =>
                    task.id === id ? { ...task, completed: true } : task
                )
            );
        } catch (err) {
            console.error("Error marking task complete:", err);
        }
    };

    return (
        <div>
            <h2>Tasks</h2>
            <NewTaskForm onTaskAdded={handleTaskAdded} />

            {tasks.length === 0 ? (
                <p>No tasks yet.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.title} {task.completed ? "✅" : ""}
                            <button onClick={() => handleComplete(task.id)}>Complete</button>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;
