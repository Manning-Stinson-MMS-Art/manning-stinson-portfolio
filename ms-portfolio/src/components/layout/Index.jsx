// src/components/layout/index.jsx
import Header from "../header";
import Footer from "../footer";
import PageWrapper from "./page-wrapper/Index"; // Updated path
import PageTitle from "./page-title/Index";     // You might need to update this one too

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