import React from 'react';
import './App.css';
import Login from './components/Login';  // Import the Login component

const App = () => {
  return (
    <div className="App">
      <h1>Login Page</h1>
      <Login />  {/* Render Login component */}
    </div>
  );
};

export default App;
 