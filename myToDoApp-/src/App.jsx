import React, { useState } from 'react';
import './App.scss';
import Login from './pages/login/login.jsx';
import Main from './pages/main/main.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? <Main /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </>
  );
}

export default App;
