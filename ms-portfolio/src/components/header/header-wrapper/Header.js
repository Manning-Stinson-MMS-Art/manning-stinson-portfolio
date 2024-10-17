import React from 'react';
import './Header.scss'; // Ensure this path is correct
import LogoWrapper from '../logo-wrapper/LogoWrapper'; // Import LogoWrapper
import MenuWrapper from '../menu-wrapper/MenuWrapper'; // Import MenuWrapper

const HeaderWrapper = () => {
  return (
    <header className="header-wrapper">
      <LogoWrapper /> {/* Logo on the left */}
      <MenuWrapper /> {/* Menu and social icons on the right */}
    </header>
  );
};

export default HeaderWrapper;
