// src/header/header-wrapper/HeaderWrapper.jsx
import React from 'react';
import { LogoWrapper, MenuWrapper, SocialIcons } from '.'; // Ensure these components are defined and imported correctly

const HeaderContainer = () => {
  return (
    <header className="header"> {/* Apply the .header class here */}
      <LogoWrapper /> {/* Logo component */}
      <MenuWrapper /> {/* Menu component */}
      <SocialIcons /> {/* Social icons component */}
    </header>
  );
};

export default HeaderContainer;
