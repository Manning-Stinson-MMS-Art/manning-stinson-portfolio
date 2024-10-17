import React from 'react';
import LogoWrapper from '../logo-wrapper/LogoWrapper';
import MenuWrapper from '../menu-wrapper/MenuWrapper';
import './Header.scss'; // Importing Header styles

const HeaderWrapper = () => {
  return (
    <header className="header-wrapper">
      <LogoWrapper /> {/* Left-side logo */}
      <MenuWrapper /> {/* Right-side menu and social icons */}
    </header>
  );
};

export default HeaderWrapper;
