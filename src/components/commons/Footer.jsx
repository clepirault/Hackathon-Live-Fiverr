import React from 'react';
import logo from '../images/logo.png';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <img src={logo} alt="logo" className="logo" />
        <p>Copyright WCS NTS 2021</p>
        <div />
      </footer>
    </div>
  );
}

export default Footer;
