import React from 'react';
import { Box, Typography } from '@mui/material';

// Defining a functional component for the footer.

const Footer = () => {
  return (
    <>

{/* Footer Box containing styling for the footer */}

    <Box
    sx= {{
        textAlign: 'center', 
        bgcolor: '#1A1A19',
        color: 'goldenrod',
        p: 2 
    }} >

 {/* Adding the Typography component for the footer text */}
 
        <Typography variant='h5' sx={{"@media (max-width:600px)":
    {fontSize:'1rem'}}}>
            Manasi S J &copy;  2023
        </Typography>
    </Box>
    </>
  );
};

export default Footer;