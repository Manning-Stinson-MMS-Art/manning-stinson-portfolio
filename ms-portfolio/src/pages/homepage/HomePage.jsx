import React from 'react';
import GlobalStyles from '../../components/global-styles/GlobalStyles'; // Global styles component
import DeviceStyles from '../../components/global-styles/DeviceStyles'; // Device styles component
import PageWrapper from '../../components/page-wrapper/PageWrapper'; // Page wrapper component
import HeaderWrapper from '../../components/header/header-wrapper/HeaderWrapper'; // Header wrapper
import LogoWrapper from '../../components/header/logo-wrapper/LogoWrapper'; // Logo wrapper
import MenuWrapper from '../../components/header/menu-wrapper/MenuWrapper'; // Menu wrapper
import HeroWrapper from './hero/HeroWrapper'; // Page-specific hero wrapper

const HomePage = () => {
  return (
    <>
      <GlobalStyles /> {/* Apply global styles */}
      <DeviceStyles /> {/* Apply device-specific styles */}
      <PageWrapper>
        <HeaderWrapper>
          <LogoWrapper />
          <MenuWrapper />
        </HeaderWrapper>
        <HeroWrapper />
        {/* Your homepage content */}
        <h1>Welcome to the Homepage</h1>
      </PageWrapper>
    </>
  );
};

export default HomePage;
