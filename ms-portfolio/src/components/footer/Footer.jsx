import React from 'react';
import './Footer.scss';
import FooterContainer from './footer-container/FooterContainer';
import FooterContent from './footer-container/footer-content/FooterContent';

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
