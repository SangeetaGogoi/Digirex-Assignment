import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar/index';
import Dashboard from './Components/Dashboard/index';
import Signup from './Components/Signup/index';
import Login from './Components/Login/index';
import Logout from './Components/Logout/index';
import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path='/signup'
            element={<Signup />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/logout'
            element={<Logout />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
