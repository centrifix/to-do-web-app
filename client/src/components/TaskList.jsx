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

    const handleComplete = async (id, currentStatus) => {
        try {
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "PATCH", // or PUT if you prefer
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ completed: !currentStatus }), // or toggle it dynamically
            });

            const updatedTask = await res.json();

            setTasks((prev) =>
                prev.map((task) =>
                    task.id === id ? { ...task, completed: updatedTask.completed } : task
                )
            );
        } catch (err) {
            console.error("Error toggling task copmlete:", err);
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
                        <li className="task-item" key={task.id}>
                            <span className={task.completed ? "task-title completed" : "task-title"}>
                                {task.title} {task.completed ? "✅" : ""}
                            </span>
                            
                            <div className = "task-actions">
                            <button className="button button-complete" onClick={() => handleComplete(task.id, task.completed)}>
                                {task.completed ? "Undo" : "Complete"}</button>
                            <button className="button button-delete" onClick={() => handleDelete(task.id)}>X</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;
