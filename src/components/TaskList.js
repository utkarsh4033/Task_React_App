import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </ul>
    );
};

export default TaskList;
