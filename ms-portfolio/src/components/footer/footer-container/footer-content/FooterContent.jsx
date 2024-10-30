import React from 'react';
import './FooterContent.scss';
import FooterMenu from './footer-menu/FooterMenu';
import FooterCopyright from './footer-copyright/FooterCopyright';

const FooterContent = () => {
  return (
    <div className="footer-content">
      
      <FooterCopyright />
      <FooterMenu />
      
    </div>
  );
};

export default FooterContent;
