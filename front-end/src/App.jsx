import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Index';
import Portfolio from '@pages/portfolio/Index';
import Contact from '@pages/contact/Index';
import Blog from '@pages/blog/Index';
import About from '@pages/about/Index';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;