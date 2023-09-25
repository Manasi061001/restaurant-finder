import React from 'react';
import Layout from '../components/Layout/Layout';
import Banner from '../Images/banner.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    // Render the Home component within the Layout component
    <Layout>
      {/* Home page content */}
      <div className='home' 
      style={{backgroundImage: `url(${Banner})`}}>
        <div className='header'>
          {/* Main title */}
          <h1>Welcome to </h1>
          <h1>Dining Delight !</h1>
          {/* Subtitle */}
          <p>Enjoy your Dining :)</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
