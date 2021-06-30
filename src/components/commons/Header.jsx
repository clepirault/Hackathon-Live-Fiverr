import React from 'react';
import Navigation from './Navigation';
import logo from '../images/logo.png';
import './Header.css';

function Header() {
  return (
    <div>
      <header>
        <h1>
          <img src={logo} alt="logo" className="logoHeader" />
        </h1>
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
