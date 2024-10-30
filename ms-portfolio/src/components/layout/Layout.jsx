// Layout.jsx
import React from 'react';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import PageWrapper from '@components/page-wrapper/PageWrapper';
import PageTitle from './page-title/PageTitle';

const Layout = ({ children, showPageTitle = true, pageTitle = "", pageDescription = "" }) => {
  return (
    <PageWrapper>
      <Header />
      {showPageTitle && <PageTitle title={pageTitle} description={pageDescription} />}
      {children}
      <Footer />
    </PageWrapper>
  );
};


export default Layout;