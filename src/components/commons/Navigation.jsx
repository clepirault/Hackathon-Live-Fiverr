import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li className="navbarLink">
          <Link to="/home">Back home</Link>
        </li>
        <li className="navbarLink">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="navbarLink">
          <Link to="/chat">Chat</Link>
        </li>
        <li className="navbarLink">
          <Link to="/mentoring">Mentoring</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
