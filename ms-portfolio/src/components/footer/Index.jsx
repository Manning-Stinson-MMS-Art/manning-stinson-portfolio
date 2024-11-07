import React from 'react';
import './index.scss';  // Changed from Footer.scss to match the pattern
import FooterContainer from './footer-container';  // Simplified import
import FooterContent from './footer-container/footer-content';  // Simplified import

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterContent />
      </FooterContainer>
    </footer>
  );
};

export default Footer;