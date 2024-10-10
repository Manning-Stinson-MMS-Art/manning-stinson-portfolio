// pages/homepage/HomePage.jsx
import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import HeaderWrapper from '../../components/header/header-wrapper/HeaderWrapper';
import LogoWrapper from '../../components/header/logo-wrapper/LogoWrapper';
import MenuWrapper from '../../components/header/menu-wrapper/MenuWrapper';
import HeroWrapper from './hero/HeroWrapper'; // Page-specific wrapper
import '../../styles/global.scss';  // For global styles
import '../../styles/main.scss';    // For main styles



const HomePage = () => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <LogoWrapper>
          <img src="/path-to-logo.png" alt="Logo" />
        </LogoWrapper>
        <MenuWrapper>
          <nav>
            {/* Menu items go here */}
          </nav>
        </MenuWrapper>
      </HeaderWrapper>

      <HeroWrapper>
        <div>
          {/* Hero content goes here */}
          <h1>Welcome to My Portfolio</h1>
          <p>This is the hero section.</p>
        </div>
      </HeroWrapper>
      
      {/* Other sections of the homepage go here */}
    </PageWrapper>
  );
};

export default HomePage;
