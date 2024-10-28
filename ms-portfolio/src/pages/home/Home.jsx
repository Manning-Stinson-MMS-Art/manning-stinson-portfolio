// src/pages/home/Home.jsx
import React from 'react';
import PageWrapper from '@components/page-wrapper/PageWrapper';
import Header from '@components/header/Header';

const Home = () => {
  console.log("Home component rendered.");
  return (
    <>
      <PageWrapper>
        <Header />
        <h1>Hi. Welcome!</h1>
      </PageWrapper>
    </>
  );
};

export default Home;