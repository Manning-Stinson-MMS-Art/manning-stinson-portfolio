// src/components/global-styles/GlobalStyles.jsx
import React from 'react';

// Import all the necessary styles using the @styles alias
import '@styles/main.scss';   // Main styles
import '@styles/typography.scss';   // Typography styles
import '@styles/utilities.scss';   // Utility styles
import '@styles/variables.scss';   // Variable styles
import '@styles/animations.scss';   // Animation styles
import '@styles/base.scss';   // Global styles
import '@styles/reset.scss';   // Reset styles
import '@styles/mixins.scss';   // Responsive styles



const GlobalStyles = ({ children }) => {
  return (
    <>
      {children} {/* Render the children components */}
    </>
  );
};

export default GlobalStyles;
