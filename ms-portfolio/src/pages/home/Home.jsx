// src/pages/home/Home.jsx
import React from 'react';
import GlobalStyles from '@components/global-styles/GlobalStyles';
import ResponsiveStyles from '@components/responsive-styles/Responsive-Styles';
import PageWrapper from '@components/page-wrapper/PageWrapper';
import HomePageHeroWrapper from './HomePageHeroWrapper'; // Ensure this is defined
import HeroHeaderImage from './HeroHeaderImage'; // Ensure this is defined

const Home = () => { // Renamed from HomePage to Home
    console.log("Home component rendered.");

    return (
        <>
            <GlobalStyles />
            <ResponsiveStyles />
            <PageWrapper>
                <HomePageHeroWrapper />
                <HeroHeaderImage />
                <h1>Hi. Welcome!</h1>
            </PageWrapper>
        </>
    );
};

export default Home; // Ensure the export matches
