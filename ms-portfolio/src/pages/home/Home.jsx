// src/pages/home/Home.jsx
import React from 'react';
import GlobalStyles from '@components/global-styles/GlobalStyles';
import ResponsiveStyles from '@components/responsive-styles/Responsive-Styles';
import PageWrapper from '@components/page-wrapper/PageWrapper';
import Header from '@components/header/Header'; // Import the Header component


const HomePage = () => {
    console.log("HomePage component rendered.");

    return (
        <>
            <GlobalStyles />
            <ResponsiveStyles />
            <PageWrapper>
                <Header /> {/* Use the Header component here */}
                <HomePageHeroWrapper />
                <HeroHeaderImage /> {/* Render the new HeroHeaderImage component */}
                <h1>Hi. Welcome!</h1>
            </PageWrapper>
        </>
    );
};

export default HomePage;
