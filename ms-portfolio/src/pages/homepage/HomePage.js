import React from 'react';
import GlobalStyles from '../../components/global-styles/GlobalStyles'; // Global styles component
import DeviceStyles from '../../components/device-styles/DeviceStyles'; // Device styles component
import PageWrapper from '../../components/page-wrapper/PageWrapper'; // Page wrapper component
import Header from '../../components/header/header-wrapper/Header'; // Header component
import HeroWrapper from './hero/HeroWrapper'; // Page-specific hero wrapper
import './HomePage.scss'; // Use SCSS file for homepage styles if needed

const HomePage = () => {
  return (
    <>
      <GlobalStyles /> 
      <DeviceStyles /> 
      <PageWrapper>
        <Header /> {/* This will render the header */}
        <h1>Hi. Welcome!</h1>
        <HeroWrapper /> {/* Ensure this component is implemented */}
      </PageWrapper>
    </>
  );
};

export default HomePage;
