// src/header/Header.jsx
import React from 'react';
import HeaderWrapper from './header-wrapper/HeaderWrapper'; // Import only HeaderWrapper

const Header = () => {
  return (
    <HeaderWrapper>
      {/* Now the individual components are rendered inside HeaderWrapper */}
      {/* HeaderWrapper should already include these components */}
    </HeaderWrapper>
  );
};

export default Header;
