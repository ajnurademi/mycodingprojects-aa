import React, { useState } from 'react';
import './login.scss'; 
import login_pic from '../../assets/img/Authentication-rafiki.png';

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/auth/login', { // API endpoint aktualisiert
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to log in');
            }

            const data = await response.json();
            alert('Login successful');

            // Rufe die Erfolgsfunktion auf, um die Komponente zu wechseln
            onLoginSuccess();
        } catch (error) {
            console.error('Error:', error.message);
            alert('Failed to log in');
        }
    };

    return (
        <div className="container">
            <section className="loginwindow">
                <div className="left-side">
                    <img src={login_pic} alt="login_pic" />
                </div>
                <div className="right-side">
                    <div className="userinput">
                        <div className="title">
                            <p id="welcome">Welcome back! 👋</p>
                            <p id="loginacc">Login to your account</p>
                        </div>
                        <div className="email-password">
                            <p>Email</p>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p>Password</p>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="btn-login">
                            <button onClick={handleLogin}>Login</button>
                        </div>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                        <a href="#" className="create-account">Don't have an Account?</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
