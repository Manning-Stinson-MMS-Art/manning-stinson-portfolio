// src/components/GlobalStyles.jsx
import React from 'react';

// Import all the necessary styles
import '../../styles/global.scss';            // Global styles
import '../../styles/main.scss';              // Main styles


const GlobalStyles = ({ children }) => {
  return (
    <>
      {children} {/* Render the children components */}
    </>
  );
};

export default GlobalStyles;
