import React from 'react';
import './index.scss';  // Changed from FooterContent.scss to match your tree structure
import FooterMenu from './footer-menu';  // Simplified import path
import FooterCopyright from './footer-copyright';  // Simplified import path

const FooterContent = () => {
  return (
    <div className="footer-content">
      <FooterCopyright />
      <FooterMenu />
    </div>
  );
};

export default FooterContent;