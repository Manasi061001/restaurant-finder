import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { RestList } from '../Data/Data';
import { useLocation } from 'react-router-dom'; // Import useLocation

const Restaurant = () => {
  // Use useLocation hook to get location object
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCuisine = queryParams.get('cuisine');
  
  // Filter the restaurants based on the selected cuisine
  const filteredRestaurants = selectedCuisine
    ? RestList.filter((restaurant) => restaurant.Cuisine.includes(selectedCuisine))
    : RestList;
    
  return (
    // Render the Restaurant component within the Layout component
    <Layout>
      {/* Container for displaying restaurant cards */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'wheat' }}>
        {/* Map through and display filtered restaurants */}
        {filteredRestaurants.map((Restaurant) => (
          <Card sx={{ maxWidth: '290px', display: 'flex', m: 3 }}>
            <CardActionArea>
              {/* Restaurant image */}
              <CardMedia
                sx={{ minHeight: '290' }}
                component={'img'}
                src={Restaurant.image}
                alt={Restaurant.Name}
              />
              <CardContent>
                {/* Restaurant name */}
                <Typography
                  variant='h5'
                  gutterBottom
                  component={'div'}
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {Restaurant.Name}
                </Typography>
                {/* Restaurant cuisine */}
                <Typography
                  variant='body 2'
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {Restaurant.Cuisine}
                </Typography>
                <br />
                {/* Restaurant rating */}
                <Typography
                  variant='body 2'
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {Restaurant.Rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Restaurant;
