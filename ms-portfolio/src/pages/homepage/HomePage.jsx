import React from 'react';
import GlobalStyles from '../../components/global-styles/GlobalStyles'; // Adjusted import for GlobalStyles
import PageWrapper from '../../components/page-wrapper/PageWrapper'; // Page wrapper component
import HeaderWrapper from '../../components/header/header-wrapper/HeaderWrapper'; // Header wrapper
import LogoWrapper from '../../components/header/logo-wrapper/LogoWrapper'; // Logo wrapper
import MenuWrapper from '../../components/header/menu-wrapper/MenuWrapper'; // Menu wrapper
import HeroWrapper from './hero/HeroWrapper'; // Page-specific hero wrapper

const HomePage = () => {
  return (
    <GlobalStyles> {/* Wrap all components with GlobalStyles */}
      <PageWrapper>
        <HeaderWrapper>
          <LogoWrapper />
          <MenuWrapper />
        </HeaderWrapper>
        <HeroWrapper />
        {/* Your homepage content */}
        <h1>Welcome to the Homepage</h1>
      </PageWrapper>
    </GlobalStyles>
  );
};

export default HomePage;
