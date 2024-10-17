import React from 'react';
import './PageWrapper.scss'; // Ensure this path is correct

const PageWrapper = ({ children }) => {
  return <div className="page-wrapper">{children}</div>;
};

export default PageWrapper;
