import React from 'react';
import GlobalStyles from '../components/global-styles/GlobalStyles';
import ResponsiveStyles from '../components/global-styles/ResponsiveStyles';
import PageWrapper from '../components/page-wrapper/PageWrapper';
import { HeaderWrapper, LogoWrapper, MenuWrapper } from '../components/header';
import HeroWrapper from '../components/homepage-hero/homepage-hero-wrapper/HomePageHeroWrapper';

const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <ResponsiveStyles />
      <PageWrapper>
        <HeaderWrapper>
          <LogoWrapper />
          <MenuWrapper />
        </HeaderWrapper>
        <HeroWrapper />
        <h1>Hi. Welcome!</h1>
      </PageWrapper>
    </>
  );
};

export default HomePage;
