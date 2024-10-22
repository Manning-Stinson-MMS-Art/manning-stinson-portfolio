// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/header/Header'; // Make sure this alias works correctly
import Home from '@pages/home/Home'; // Correct usage of alias
import Contact from '@pages/contact/Contact'; // Check this alias

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
