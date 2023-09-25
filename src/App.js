import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Cuisine from './pages/Cuisine';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      {/* Initialize the Router */}
      <Router>
        {/* Define routes using the Routes component */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the Contact page */}
          <Route path="/Contact" element={<Contact />} />
          
          {/* Route for the Restaurant page */}
          <Route path="/restaurants" element={<Restaurant />} />
          
          {/* Route for the Cuisine page */}
          <Route path="/cuisine" element={<Cuisine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
