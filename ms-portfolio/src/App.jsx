// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import Contact from '@pages/contact/Contact';
import Portfolio from '@pages/portfolio/Portfolio';
import Blog from '@pages/blog/Blog';
import About from '@pages/about/About';

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