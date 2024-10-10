import React from 'react';
import '../../../styles/logo.scss';  // Adjusted path for logo-wrapper location
const LogoWrapper = ({ children }) => {
  return <div className="logo-wrapper">{children}</div>;
};

export default LogoWrapper;
