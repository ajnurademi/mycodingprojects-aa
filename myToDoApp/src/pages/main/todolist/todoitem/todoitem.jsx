import React from 'react';
import './todoitem.scss';

function TodoItem({ task, deleteTask, toggleCompleted }) {
    const handleChange = () => {
        toggleCompleted(task.id);
    };

    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                />
                <span className="checkmark"></span>
            </label>
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
    );
}

export default TodoItem;
