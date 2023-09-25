// Import the necessary modules and components from React and your project.
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

// Define a functional component called "Layout" which accepts a "children" prop.// Define a functional component called "Layout" which accepts a "children" prop.
const Layout = ({children}) => {
  return (
    <>
     <Navigation />
     <div>
        {children}
     </div>
     <Footer />
    
    </>
  );
};

export default Layout;