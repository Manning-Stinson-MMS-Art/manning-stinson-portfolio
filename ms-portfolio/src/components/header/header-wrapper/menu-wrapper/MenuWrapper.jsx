// src/header/header-wrapper/menu-wrapper/MenuWrapper.jsx
import React from 'react';
import './MenuWrapper.scss'; // Styles for MenuWrapper

const MenuWrapper = () => {
  return (
    <nav className="menu-wrapper">
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

export default MenuWrapper;
