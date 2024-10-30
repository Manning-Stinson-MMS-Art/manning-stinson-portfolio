// Home.jsx
import React from 'react';
import Layout from '@components/layout/Layout';
import './Home.scss';  // Import the styles

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