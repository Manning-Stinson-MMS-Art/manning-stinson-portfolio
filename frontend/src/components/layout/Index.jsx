// src/components/layout/Index.jsx
import React from 'react';
import Header from "../header";
import Footer from "../footer";
import PageWrapper from "./page-wrapper/Index";
import PageTitle from "./page-title/Index";
import Container from "./container/Index";
import './index.scss';

const Layout = ({
  children,
  showPageTitle = true,
  pageTitle = "",
  pageDescription = "",
  titleAlignment = "text-center"
}) => {
  return (
    <PageWrapper>
      <div className="header-section">
          <Header />
      </div>
      
      {showPageTitle && (
        <div className="page-title-section">
         
            <PageTitle
              title={pageTitle}
              description={pageDescription}
              alignment={titleAlignment}
            />
          
        </div>
      )}

      <Container>
        {children}
      </Container>

      <div className="footer-section">
      
          <Footer />
    
      </div>
    </PageWrapper>
  );
};

export default Layout;