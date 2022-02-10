import React from 'react';

const ToDo = ({ todo, handleToggle, handleFilter }) => {
    return (
        <div className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    )
}

export default ToDo;