// src/components/App.jsx
import React from 'react';
import HomePage from './HomePage';
import Favicon from './favicon/Favicon'; // Adjusted import statement

const App = () => {
  return (
    <div>
      <Favicon icon="/favicon.svg" /> {/* Path to your SVG favicon */}
      <HomePage />
    </div>
  );
};

export default App;
