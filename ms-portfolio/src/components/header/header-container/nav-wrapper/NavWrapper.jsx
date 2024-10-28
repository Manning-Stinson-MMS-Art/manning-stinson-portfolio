// src/header/header-wrapper/menu-wrapper/MenuWrapper.jsx
import React from 'react';
import './NavWrapper.scss';
const NavWrapper = () => {
  return (
    <nav className="nav-wrapper">
      {/* Menu items go here */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavWrapper;
