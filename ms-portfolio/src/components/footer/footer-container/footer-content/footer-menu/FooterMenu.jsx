import React from 'react';
import { Link } from 'react-router-dom';
import './FooterMenu.scss';

const FooterMenu = () => {
  return (
    <nav className="footer-menu">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default FooterMenu;