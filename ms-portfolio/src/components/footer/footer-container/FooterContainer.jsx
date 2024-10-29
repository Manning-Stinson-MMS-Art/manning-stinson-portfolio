
import React from 'react';
import FooterCopyright from './footer-copyright/FooterCopyright';
import FooterMenu from './footer-menu/FooterMenu';
import './FooterContainer.scss';

const FooterContainer = () => {
  return (
    <footer className="footer-container">
      <FooterCopyright />
      <FooterMenu />
    </footer>
  );
};

export default FooterContainer;