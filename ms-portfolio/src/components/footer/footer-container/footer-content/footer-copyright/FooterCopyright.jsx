import React from 'react';
import './FooterCopyright.scss';

const FooterCopyright = () => {
  return (
    <div className="footer-copyright">
      <p>&copy; {new Date().getFullYear()} Adham Dannaway</p>
    </div>
  );
};

export default FooterCopyright;