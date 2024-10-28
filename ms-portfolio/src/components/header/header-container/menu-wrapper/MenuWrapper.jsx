import React from 'react';
import './MenuWrapper.scss';

const MenuWrapper = ({ isOpen, onToggle }) => {
  return (
    <div className="menu-wrapper">
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="/about">about</a>
          <a href="/book">book</a>
          <a href="/portfolio">portfolio</a>
          <a href="/blog">blog</a>
          <a href="/contact">contact</a>
        </nav>
        <div className="mobile-social">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">twitter</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">facebook</a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">instagram</a>
        </div>
      </div>
    </div>
  );
};

export default MenuWrapper;