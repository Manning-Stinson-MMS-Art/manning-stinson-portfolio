import React from 'react';
import { Link } from 'react-router-dom';
import './FooterMenu.scss';

const FooterMenu = () => {
  return (
   <footer class="footer-container">
    <div class="footer-content">
        <nav class="footer-menu">
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