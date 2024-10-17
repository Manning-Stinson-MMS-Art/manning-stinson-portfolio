import React from 'react';
import GlobalStyles from '../../components/global-styles/GlobalStyles'; 
import DeviceStyles from '../../components/device-styles/DeviceStyles'; 
import PageWrapper from '../../components/page-wrapper/PageWrapper'; 
import HeaderWrapper from '../../components/header/header-wrapper/HeaderWrapper'; 
import HeroWrapper from './hero/HeroWrapper'; 
import './HomePage.scss'; 

const HomePage = () => {
  return (
    <>
      <GlobalStyles /> 
      <DeviceStyles /> 
      <PageWrapper>
        <HeaderWrapper /> {/* Header that uses Logo and Menu */}
        <HeroWrapper /> {/* Your hero section */}
        <h1>Hi. Welcome!</h1>
      </PageWrapper>
    </>
  );
};

export default HomePage;
