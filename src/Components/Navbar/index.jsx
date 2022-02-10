import React, {
  useEffect,
  useState,
} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('Username')) {
      setLoggedIn(true);
      return;
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div className='nav'>
      <Link to='/' className='leftbar'>
        digirex
      </Link>
      <div className='rightbar'>
        {loggedIn && (
          <Link
            to='/dashboard'
            className='dashboard'
          >
            Dashboard
          </Link>
        )}

        {!loggedIn && (
          <Link to='/signup' className='signup'>
            Signup
          </Link>
        )}
        {!loggedIn && (
          <Link to='/login' className='login'>
            Login
          </Link>
        )}

        {loggedIn && (
          <Link to='/logout' className='logout'>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
