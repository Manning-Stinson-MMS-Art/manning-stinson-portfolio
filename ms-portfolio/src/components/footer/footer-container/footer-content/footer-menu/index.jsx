import React from 'react';
import './FooterMenu.scss';

const FooterMenu = () => {
  return (
   <footer className="footer-container">
    <div className="footer-content">
        <nav className="footer-menu">
            <a href="/about">about</a>
            <a href="/portfolio">portfolio</a>
            <a href="/blog">blog</a>
            <a href="/contact">contact</a>
        </nav>
    </div>
</footer>
  );
};

export default FooterMenu;