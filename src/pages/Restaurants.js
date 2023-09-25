import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { RestList } from '../Data/Data';

const Restaurants = () => {
  const [selectedRating, setSelectedRating] = useState(''); // State for selected rating
  const [selectedCuisine, setSelectedCuisine] = useState(''); // State for selected cuisine
  const [selectedSort, setSelectedSort] = useState(''); // State for selected sort order

  // Filter restaurants based on selected rating, cuisine, and sort order
  const filteredRestaurants = RestList.filter((restaurant) => {
    // Check if the selectedRating is empty or matches the restaurant's Rating
    const ratingFilter = !selectedRating || restaurant.Rating.includes(selectedRating);

    // Check if the selectedCuisine is empty or matches the restaurant's Cuisine
    const cuisineFilter = !selectedCuisine || restaurant.Cuisine.includes(selectedCuisine);

    return ratingFilter && cuisineFilter;
  }).sort((a, b) => {
    // Sort based on selectedSort (A-Z or Z-A) by restaurant name
    if (selectedSort === 'A-Z') {
      return a.Name.localeCompare(b.Name);
    } else if (selectedSort === 'Z-A') {
      return b.Name.localeCompare(a.Name);
    }
    return 0; // No sorting
  });

  return (
    <Layout>
      <div className="sort-selection">
        <select
          className="sort-rating" // Add your CSS class for styling here
          onChange={(e) => setSelectedRating(e.target.value)}
          value={selectedRating}
          name="rating"
        >
          <option value="">Rating (All)</option>
          <option value="1star">1star</option>
          <option value="2star">2star</option>
          <option value="3star">3star</option>
          <option value="4star">4star</option>
          <option value="5star">5star</option>
        </select>
        <select
          className="sort-cuisine" // Add your CSS class for styling here
          onChange={(e) => setSelectedCuisine(e.target.value)}
          value={selectedCuisine}
          name="cuisine"
        >
          <option value="">Cuisine (All)</option>
          <option value="French">French</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
        </select>
        <select
          className="sort-selection" // Add your CSS class for styling here
          onChange={(e) => setSelectedSort(e.target.value)}
          value={selectedSort}
          name="sort"
        >
          <option value="">Sort By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'wheat' }}>
        {filteredRestaurants.map((restaurant) => (
          <Card sx={{ maxWidth: '290px', display: 'flex', m: 3 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '290' }}
                component={'img'}
                src={restaurant.image}
                alt={restaurant.Name}
              />
              <CardContent>
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
                  {restaurant.Name}
                </Typography>
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
                  {restaurant.Cuisine}
                </Typography>
                <br />
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
                  {restaurant.Rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Restaurants;
