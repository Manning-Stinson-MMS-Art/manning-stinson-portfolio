import React from 'react';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import PageWrapper from '@components/page-wrapper/PageWrapper';
import PageTitle from './page-title/PageTitle';

const Layout = ({ 
  children, 
  showPageTitle = true, 
  pageTitle = "", 
  pageDescription = "",
  titleAlignment = "text-center" // Add default alignment
}) => {
  return (
    <PageWrapper>
      <Header />
      {showPageTitle && (
        <PageTitle 
          title={pageTitle} 
          description={pageDescription} 
          alignment={titleAlignment}  // Pass alignment to PageTitle
        />
      )}
      {children}
      <Footer />
    </PageWrapper>
  );
};

export default Layout;