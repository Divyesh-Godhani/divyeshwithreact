import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Registration</h1>
      <RegistrationForm />

      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default App;
