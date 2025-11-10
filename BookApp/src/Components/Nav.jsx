import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">📚 BookApp</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
         <li><Link to="#">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
