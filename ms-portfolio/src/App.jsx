// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/home';          // changed from '/Home'
import Contact from '@pages/contact';    // changed from '/Contact'
import Portfolio from '@pages/portfolio'; // changed from '/Portfolio'
import Blog from '@pages/blog';          // changed from '/Blog'
import About from '@pages/about';        // changed from '/About'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;