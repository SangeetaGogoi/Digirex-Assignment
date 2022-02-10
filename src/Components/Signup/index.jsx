import './signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    const userData = {
      Name: name,
      Username: username,
      Email: email,
      Password: password,
    };

    if (
      userData.Name.length &&
      userData.Username.length &&
      userData.Email.length &&
      userData.Password.length
    ) {
      navigate('/login');
    } else {
      alert('Please fill up all the details');
    }
    // will send this data in api call to backend
  };

  return (
    <main className='signup-page'>
      <form className='for-inputs'>
        <input
          type='text'
          className='name'
          placeholder='Your Name'
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />
        <input
          type='text'
          className='username'
          placeholder='Username'
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />
        <input
          type='email'
          className='email'
          placeholder='Your Email'
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />
        <input
          type='password'
          className='password'
          placeholder='Password'
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />
        <button
          className='signup-button'
          onClick={(event) => handleSignup(event)}
        >
          Signup
        </button>
      </form>
    </main>
  );
}
