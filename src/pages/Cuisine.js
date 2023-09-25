import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Link } from '@mui/material';
import { CusList } from '../Data/Data1';
import { Link as RouterLink } from 'react-router-dom';

const Cuisine = () => {
  return (
    <Layout>
      {/* Container for displaying cuisine cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: 'wheat',
        }}
      >
        {/* Mapping through the list of cuisines */}
        {CusList.map((Cuisine) => (
          <Card sx={{ maxWidth: '290px', display: "flex", m: 3 }}>
            <CardActionArea>
              {/* Container for displaying cuisine image */}
              <div style={{ width: "100%", height: "290px", overflow: "hidden" }}>
                {/* Cuisine image */}
                <CardMedia
                  component={'img'}
                  src={Cuisine.image}
                  alt={Cuisine.Cuisine}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <CardContent>
                {/* Cuisine name with a link to the restaurant list */}
                <Typography variant='h5' gutterBottom component={'div'} style={{ textAlign: 'center' }}>
                  <Link
                    component={RouterLink}
                    to={`/restaurants?cuisine=${Cuisine.Cuisine}`} // Add the cuisine as a query parameter
                  >
                    {Cuisine.Cuisine}
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Cuisine;
