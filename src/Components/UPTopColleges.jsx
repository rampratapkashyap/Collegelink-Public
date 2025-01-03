import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Grid, CardMedia, Box, useMediaQuery } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const colleges = [
  {
    name: 'Maharishi University of Information Technology (MUIT)',
    description: 'Known for its undergraduate and postgraduate programs in engineering and technology, established in 2014 and recognized by UGC.',
  },
  {
    name: 'Shri Ram Murti Smarak College of Engineering and Technology (SRMSCET)',
    description: 'Affiliated with Dr. A.P.J. Abdul Kalam Technical University, offering B.Tech programs in various engineering disciplines.',
    imageUrl: 'https://example.com/srmscet.jpg'
  },
  {
    name: 'Babu Banarasi Das University (BBDU)',
    description: 'Offers a range of engineering courses with state-of-the-art infrastructure and experienced faculty.',
    imageUrl: 'https://example.com/bbdu.jpg'
  },
  {
    name: 'Amity University, Lucknow Campus',
    description: 'Provides diverse engineering programs with a strong focus on research and innovation.',
    imageUrl: 'https://example.com/amity-lucknow.jpg'
  },
  {
    name: 'Integral University',
    description: 'Offers holistic education with various engineering programs emphasizing practical learning.',
    imageUrl: 'https://example.com/integral.jpg'
  },
  {
    name: 'Azad Institute of Engineering and Technology',
    description: 'Focuses on practical learning through undergraduate and postgraduate engineering programs.',
    imageUrl: 'https://example.com/aiet.jpg'
  }
];


const ArrowButton = ({ onClick, direction, label }) => (
  <IconButton
    onClick={onClick}
    aria-label={label}
    sx={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#fff',
      color: '#555',
      padding: '10px',
      borderRadius: '50%',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      [direction]: '20px',
      zIndex: 10,
      '&:hover': {
        backgroundColor: '#f0f0f0',
      },
    }}
  >
    {direction === 'left' ? <ArrowBack /> : <ArrowForward />}
  </IconButton>
);

function UPTopColleges() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive card display logic
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const cardsToShow = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colleges.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + colleges.length) % colleges.length);
  };

  return (
    <Box sx={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
      <Typography variant="h6" gutterBottom>
        Top Colleges - Uttar Pradesh
      </Typography>

      {/* Left Arrow */}
      <ArrowButton onClick={goPrev} direction="left" label="Previous" />

      {/* College Cards */}
      <Grid container justifyContent="center" spacing={4}>
        {colleges
          .slice(currentIndex, currentIndex + cardsToShow)
          .concat(
            colleges.slice(
              0,
              Math.max(0, cardsToShow - (colleges.length - currentIndex))
            )
          )
          .map((college, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={college.imageUrl}
                  alt="College Image"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
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
      <ArrowButton onClick={goNext} direction="right" label="Next" />
    </Box>
  );
}

export default UPTopColleges;
