import './login.css';
import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitButton = (event) => {
    event.preventDefault();
    if (username.length && password.length) {
      localStorage.setItem('Username', username);
      window.location.href = '/dashboard';
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <main className='login-page'>
      <form className='login-form'>
        <input
          type='text'
          value={username}
          className='username'
          placeholder='Username'
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />
        <input
          type='password'
          className='password'
          value={password}
          placeholder='Password'
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />
        <button
          className='login-button'
          onClick={(event) => submitButton(event)}
        >
          Login
        </button>
      </form>
    </main>
  );
}
