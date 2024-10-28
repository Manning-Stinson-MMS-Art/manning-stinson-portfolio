import React, { useState, useEffect } from 'react';
import LogoWrapper from './logo-wrapper/LogoWrapper';
import MenuWrapper from './menu-wrapper/MenuWrapper';
import NavWrapper from './nav-wrapper/NavWrapper';
import SocialIcons from './social-icons-wrapper/SocialIcons';
import './HeaderContainer.scss';

const HeaderContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="header-container">
      <LogoWrapper />
      <div className="desktop-nav">
        <NavWrapper />
        <SocialIcons />
      </div>
      <MenuWrapper 
        isOpen={isMenuOpen} 
        onToggle={() => setIsMenuOpen(!isMenuOpen)} 
      />
    </header>
  );
};

export default HeaderContainer;