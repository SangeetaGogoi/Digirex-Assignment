import React, { useEffect } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('Username')) {
      navigate('/dashboard');
      return;
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <main className='home-page'>
      <div className='home-container'>
        <h1>Welcome home</h1>
      </div>
    </main>
  );
}
