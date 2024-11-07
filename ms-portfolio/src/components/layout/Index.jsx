// src/components/layout/index.jsx
import React from 'react';
import Header from '../header';           // Updated to relative path
import Footer from '../footer';           // Updated to relative path
import PageWrapper from './page-wrapper'; // Updated to relative path
import PageTitle from './page-title';     // Updated to relative path (and removed /Index)

const Layout = ({ 
  children, 
  showPageTitle = true, 
  pageTitle = "", 
  pageDescription = "",
  titleAlignment = "text-center"
}) => {
  return (
    <PageWrapper>
      <Header />
      {showPageTitle && (
        <PageTitle 
          title={pageTitle} 
          description={pageDescription} 
          alignment={titleAlignment}
        />
      )}
      {children}
      <Footer />
    </PageWrapper>
  );
};

export default Layout;