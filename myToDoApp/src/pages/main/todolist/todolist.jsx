import React, { useState } from 'react';
import TodoItem from './todoitem/todoitem.jsx'; 
import './todolist.scss';

function Todolist() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);

    const [text, setText] = useState('');

    const addTask = () => {
        if (text.trim() !== '') {
            const newTask = {
                id: Date.now(),
                text: text,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setText('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className="todo-list">
            <div className="add-task">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyPress={handleKeyPress} 
                    placeholder="Enter a task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
        </div>
    );
}

export default Todolist;
