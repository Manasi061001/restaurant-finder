import React, {useState}from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../styles/NavStyle.css';

// Define the Navigation component.
const Navigation = () => {

// Define state to manage the mobile drawer's open/close state.
  const [mobileOpen, setMobileOpen] = useState(false)
  
// Function to handle the toggle of the mobile drawer.
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  
// JSX for the contents of the mobile drawer.
  const drawer = (
    <Box onClick = {handleDrawerToggle} sx={{textAlign: 'center'}}>
      <Typography 
          color={'goldenrod'} 
          variant="h6" 
          component="div"
          sx={{flexGrow: 1, my: 3}}>
          <FastfoodIcon />
           Dining Delight
          </Typography>
          <Divider />
            <ul className='mobile-nav'>
              <li>
                <Link to={'/'}>Home Page</Link>
              </li>
              <li>
                <Link to={'/Restaurants'}>Restaurants</Link>
              </li>
              <li>
                <Link to={'/Cuisines'}>Cuisines</Link>
              </li>
              <li>
                <Link to={'/Contact'}>Contact</Link>
              </li>
            </ul>
          </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor: "black"}}>
          <Toolbar>
            <IconButton 
            color='inherit' 
            aria-label='open drawer' 
            edge="start" 
            sx={{
              mr: 2, 
              display: {sm: "none"},
              }}
              onClick = {handleDrawerToggle}
              >
            <MenuIcon />
            </IconButton>
          <Typography 
          color={'goldenrod'} 
          variant="h6" 
          component="div"
          sx={{flexGrow: 1}}>
          <FastfoodIcon />
            Dining Delight
          </Typography>
          <Box sx={{display:{xs: 'none', sm: 'block'}}}>
            <ul className='nav-menu'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/Restaurants'}>Restaurants</Link>
              </li>
              <li>
                <Link to={'/Cuisine'}>Cuisines</Link>
              </li>
              <li>
                <Link to={'/Contact'}>Contact</Link>
              </li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" 
          open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{display: {xs:'block', sm: 'none'}, 
          "& .MuiDrawer-paper":{
            boxSizing: 'border-box',
            width: "240px",
          }}}  >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Navigation;