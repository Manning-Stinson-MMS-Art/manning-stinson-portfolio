import React from 'react';
import './header-wrapper/Header.scss'; // Use SCSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="logo-wrapper">
        <h1>Logo</h1> {/* Replace with your actual logo */}
      </div>
      
      <nav className="menu-wrapper">
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        
        <div className="social-media-icons">
          <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
