import React from 'react';
import './MenuWrapper.scss'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const MenuWrapper = () => {
  return (
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
  );
};

export default MenuWrapper;
