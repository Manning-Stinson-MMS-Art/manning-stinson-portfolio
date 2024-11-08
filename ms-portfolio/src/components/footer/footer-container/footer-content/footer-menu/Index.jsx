import React from 'react';
import './index.scss';  // Changed from FooterMenu.scss to match your tree structure

const FooterMenu = () => {
  return (
    <nav className="footer-menu">
      <a href="/about">about</a>
      <a href="/portfolio">portfolio</a>
      <a href="/blog">blog</a>
      <a href="/contact">contact</a>
    </nav>
  );
};

export default FooterMenu;