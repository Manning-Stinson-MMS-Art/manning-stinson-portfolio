// src/components/header/header-wrapper/HeaderWrapper.jsx
import React from 'react';
import { LogoWrapper, MenuWrapper, SocialIcons } from './'; // Assuming you're in the same directory
import './HeaderWrapper.scss';

const HeaderWrapper = () => {
  return (
    <header>
      <LogoWrapper />
      <MenuWrapper />
      <SocialIcons />
    </header>
  );
};

export default HeaderWrapper;
