// src/pages/home/index.jsx
import React from 'react';
import Layout from '@components/layout/Index';  // Relative path to Layout
import './index.scss';

const Home = () => {
  return (
    <Layout showPageTitle={false}>
      <main className="home-container">
        {/* Homepage content */}
      </main>
    </Layout>
  );
};

export default Home;