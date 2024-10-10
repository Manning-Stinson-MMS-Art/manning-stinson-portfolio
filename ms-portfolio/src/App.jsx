import React from 'react';
import './App.css';         // Default Vite styles (if still needed)
import './styles/global.scss'; // Global styles
import './styles/main.scss';   // Main styles
import HomePage from './pages/homepage/HomePage'; // Import your HomePage component

function App() {
  return (
    <div className="App">
      <HomePage /> {/* Renders the HomePage component */}
    </div>
  );
}

export default App;
