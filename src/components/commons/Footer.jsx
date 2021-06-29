import React from 'react';
import logo from '../images/logo.png';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import pinterest from '../images/pinterest.svg';
import instagram from '../images/instagram.svg';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div className="credits">
          <img src={logo} alt="logo" className="logo" />
          <p className="copyright">Copyright WCS NTS 2021</p>
        </div>
        <img src={twitter} alt="logo" className="logoNetwork" />
        <img src={facebook} alt="logo" className="logoNetwork" />
        <img src={linkedin} alt="logo" className="logoNetwork" />
        <img src={pinterest} alt="logo" className="logoNetwork" />
        <img src={instagram} alt="logo" className="logoNetwork" />

        <div />
      </footer>
    </div>
  );
}

export default Footer;
