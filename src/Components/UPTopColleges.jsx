import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Grid, CardMedia, Box } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const colleges = [
  { name: 'College 1', description: 'Description for College 1' },
  { name: 'College 2', description: 'Description for College 2' },
  { name: 'College 3', description: 'Description for College 3' },
  { name: 'College 4', description: 'Description for College 4' },
  { name: 'College 5', description: 'Description for College 5' },
];

const ArrowButton = ({ onClick, direction }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '50px', // Arrow size
        backgroundColor: 'white', // Button background color
        color: '#333', // Arrow color (dark for better contrast)
        padding: '12px', // Padding for larger clickable area
        borderRadius: '50%', // Circular button shape
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
        [direction]: '20px', // Spacing from the edge (left or right)
        '&:hover': {
          backgroundColor: '#f0f0f0', // Light gray hover effect
        },
      }}
    >
      {direction === 'left' ? <ArrowBack /> : <ArrowForward />}
    </IconButton>
  );
};

function UPTopColleges() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colleges.length);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + colleges.length) % colleges.length
    );
  };

  return (
    <Box sx={{ padding: '20px', position: 'relative' }}>
      {/* Heading */}
      <h1> Top Colleges - Uttar Pradesh</h1>

      {/* Left Arrow */}
      <ArrowButton onClick={goPrev} direction="left" />

      {/* Center Cards */}
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {colleges.slice(currentIndex, currentIndex + 3).map((college, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                width: '350px', // Card width
                height: '450px', // Card height
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Card shadow
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Dummy Image */}
              <CardMedia
                component="img"
                height="250"
                image="https://via.placeholder.com/350x250"
                alt="College Image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {college.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {college.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Right Arrow */}
      <ArrowButton onClick={goNext} direction="right" />
    </Box>
  );
}

export default UPTopColleges;
