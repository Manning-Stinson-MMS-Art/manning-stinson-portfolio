import React from 'react';

// Import all the necessary responsive styles for different device sizes
import '../../styles/device-styles/x-small.scss';    // Extra-small-specific styles
import '../../styles/device-styles/small.scss';      // Small-specific styles
import '../../styles/device-styles/medium.scss';     // Medium-specific styles
import '../../styles/device-styles/large.scss';      // Large-specific styles
import '../../styles/device-styles/x-large.scss';    // Extra-large-specific styles
import '../../styles/device-styles/ultra-wide.scss'; // Ultra-wide-specific styles

const ResponsiveStyles = ({ children }) => {
  return (
    <>
      {children} {/* Render the children components */}
    </>
  );
};

export default ResponsiveStyles;
