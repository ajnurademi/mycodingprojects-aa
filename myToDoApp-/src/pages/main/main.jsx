import React, { useState } from 'react';
import Todolist from './todolist/todolist.jsx'; // Adjust import path as per your project structure
import './main.scss';

function Main() {
    const initialNotes = [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: false },
        { id: 3, text: 'Task 3', completed: false },
    ];

    const [notes, setNotes] = useState(initialNotes);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container ${darkMode ? 'dark' : ''}`}>
            <div className={`header ${darkMode ? 'dark' : ''}`}>
                <p>TODO LIST</p>
            </div>
            <div className="button-group">
                <button className="darkmode" onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <div className={`notes ${darkMode ? 'dark' : ''}`}>
                <Todolist />
            </div>
        </div>
    );
}

export default Main;
