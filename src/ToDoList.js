import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList }) => {
    return (
        <div>
            {toDoList.map(toDo => {
                return (
                    <ToDo todo={toDo} />
                )
            })}
        </div>
    )
};

export default ToDoList;