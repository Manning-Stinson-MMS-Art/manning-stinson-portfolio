// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Make sure this alias works correctly
import Header from '@components/header/Header';
// Correct usage of alias 
import Home from '@pages/home/Home';
// Check this alias 
import Contact from '@pages/contact/Contact'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
