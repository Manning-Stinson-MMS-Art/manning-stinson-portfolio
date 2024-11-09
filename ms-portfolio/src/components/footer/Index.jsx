// src/components/footer/Index.jsx
import React from 'react';
import './index.scss';
import FooterContainer from './footer-container/Index';
import FooterContent from './footer-container/footer-content/Index';

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