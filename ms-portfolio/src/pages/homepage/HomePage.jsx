import React from 'react';
import GlobalStyles from "../../components/global-styles/GlobalStyles";
import ResponsiveStyles from '../../components/responsive-styles/ResponsiveStyles';
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import HeaderWrapper from "../../components/header/header-wrapper/HeaderWrapper";
import LogoWrapper from "../../components/header/header-wrapper/logo-wrapper/LogoWrapper";
import MenuWrapper from "../../components/header/header-wrapper/menu-wrapper/MenuWrapper";
import HeroWrapper from "../../components/hero-wrapper/HeroWrapper";
import "../../styles/device-styles/index.scss";  // Single import for all device styles
import "./HomePage.scss";

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