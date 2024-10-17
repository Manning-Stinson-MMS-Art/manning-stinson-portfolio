import React from 'react';
import GlobalStyles from '../../components/global-styles/GlobalStyles'; 
import ResponsiveStyles from '../../components/responsive-styles/ResponsiveStyles'; // Updated import
import PageWrapper from '../../components/page-wrapper/PageWrapper'; 
import HeaderWrapper from '../../components/header/header-wrapper/HeaderWrapper'; 
import HeroWrapper from './hero/HeroWrapper'; 
import './HomePage.scss'; 

const HomePage = () => {
  return (
    <>
      <GlobalStyles />   {/* Apply global styles */}
      <ResponsiveStyles /> {/* Apply responsive styles */}
      <PageWrapper>
        <HeaderWrapper />  {/* Header with logo and menu */}
        <HeroWrapper />    {/* Hero section */}
        <h1>Hi. Welcome!</h1>
      </PageWrapper>
    </>
  );
};

export default HomePage;
