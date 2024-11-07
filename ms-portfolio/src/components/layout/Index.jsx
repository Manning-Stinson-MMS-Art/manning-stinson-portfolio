import React from 'react';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import PageWrapper from 'src/components/layout/page-wrapper';
import PageTitle from "./page-title/Index"

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