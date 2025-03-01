import React from "react";
import { FaTimes } from "react-icons/fa"; // Import delete icon

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.name}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                <FaTimes />
            </button>
        </li>
    );
};

export default TaskItem;
