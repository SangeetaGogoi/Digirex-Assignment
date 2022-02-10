import React from 'react';
import './logout.css';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = (checkValue) => {
    if (checkValue === true) {
      localStorage.clear();
      window.location.href = '/login';
      // navigate('/');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <main className='logout-page'>
      <h2>Do you want to logout ?</h2>
      <div className='logout-btns'>
        <button
          className='yes-btn'
          onClick={() => handleLogout(true)}
        >
          Yes
        </button>
        <button
          className='no-btn'
          onClick={() => handleLogout(false)}
        >
          No
        </button>
      </div>
    </main>
  );
}
