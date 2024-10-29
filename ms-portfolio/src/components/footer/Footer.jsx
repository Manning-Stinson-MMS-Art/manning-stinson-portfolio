// src/components/footer/Footer.jsx
import React from 'react';
import FooterContainer from './footer-container/FooterContainer';
import './Footer.scss';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCopyright />
      <FooterMenu />
    </FooterContainer>
  );
};

export default Footer;