// src/pages/home/Home.jsx
import React from 'react';

import GlobalStyles from '@components/global-styles/GlobalStyles';
import ResponsiveStyles from '@components/responsive-styles/Responsive-Styles';
import PageWrapper from '@components/page-wrapper/PageWrapper';
import Header from '@components/header/Header'; // Import the Header component


const Home = () => { // Renamed from HomePage to Home
    console.log("Home component rendered.");

    return (
        <>
            <GlobalStyles />
            <ResponsiveStyles />
            <PageWrapper>
                <Header /> {/* Render the Header component here */}
                <HeroHeaderImage /> {/* Ensure this component is defined */}
                <h1>Hi. Welcome!</h1>
            </PageWrapper>
        </>
    );
};

export default Home; // Ensure the export matches
