// src/components/header/header-container/HeaderContainer.jsx
import React from 'react';
import LogoWrapper from './logo-wrapper/LogoWrapper';  // Remove curly braces
import NavWrapper from './nav-wrapper/NavWrapper';     // Remove curly braces
import MenuWrapper from './menu-wrapper/MenuWrapper';  // Remove curly braces
import SocialIcons from './social-icons-wrapper/SocialIcons';  // Remove curly braces
import './HeaderContainer.scss';

const HeaderContainer = () => {
  return (
    <header className="header">
      <LogoWrapper />
      <NavWrapper />
      <MenuWrapper />
      <SocialIcons />
    </header>
  );
};

export default HeaderContainer;