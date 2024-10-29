import React from 'react';
import PageWrapper from '@components/page-wrapper/PageWrapper';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';

const Home = () => {
  console.log("Home component rendered.");
  return (
    <>
      <PageWrapper>
        <Header />
        <main>
          {/* Add your main content here */}
        </main>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Home;