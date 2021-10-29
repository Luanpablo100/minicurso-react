import React from "react";
import "./Task.css"

const Task = ({task, handleTaskClick}) => {
    return (
        <div className="task-container" onClick={handleTaskClick} style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            {task.title}
        </div>
        // <div className="task-container">
        //     {task.title}
        // </div>
    )
}

export default Task