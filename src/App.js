import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import "./styles.css";
import { FaPlus } from "react-icons/fa"; // Importing icon

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
        setNewTask(""); // Clear input field
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="task-manager">
            <h1>Task Manager</h1>
            <div className="task-input">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add-task-btn" onClick={addTask}>
                    <FaPlus /> Add
                </button>
            </div>
            <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
    );
};

export default App;
