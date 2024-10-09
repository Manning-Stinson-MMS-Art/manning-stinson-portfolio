// pages/Homepage/Homepage.jsx
import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import HeaderWrapper from '../../components/HeaderWrapper';
import LogoWrapper from '../../components/LogoWrapper';
import MenuWrapper from '../../components/MenuWrapper';
import HeroWrapper from './HeroWrapper'; // Import the page-specific component

const Homepage = () => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <LogoWrapper>
          <img src="/path-to-logo.png" alt="Logo" />
        </LogoWrapper>
        <MenuWrapper>
          <nav>/* Menu content here */</nav>
        </MenuWrapper>
      </HeaderWrapper>
      
      <HeroWrapper>
        {/* Hero Image or content here */}
      </HeroWrapper>
      
      {/* Other content can go here */}
    </PageWrapper>
  );
};

export default Homepage;
