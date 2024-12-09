import React from 'react'
import { Container, Typography, Button, Box, Grid } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css" // Import carousel styles

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Grid for Layout */}
      <Grid container spacing={4} direction="column" alignItems="center">
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" sx={{ textAlign: 'center' }}>
            Welcome to the Home Page!
          </Typography>
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary" paragraph sx={{ textAlign: 'center' }}>
            This is a basic home page built with Material UI and an image carousel. It is fully responsive.
          </Typography>
        </Grid>

        {/* Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Grid>

        {/* Image Carousel */}
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Box sx={{
            width: '100%',
            // Ensure the carousel adjusts its width based on the screen size
            maxWidth: '100%', // Ensures it never exceeds 100% width
            '& .carousel-root': {
              width: '100%', // Ensures the carousel itself takes full width
            }
          }}>
            <Carousel
              autoPlay
              interval={3000}
              infiniteLoop
              showArrows={false}
              dynamicHeight
              swipeable
              emulateTouch
            >
              <div>
                <img src="https://via.placeholder.com/600x400?text=Image+1" alt="Image 1" />
              </div>
              <div>
                <img src="https://via.placeholder.com/600x400?text=Image+2" alt="Image 2" />
              </div>
              <div>
                <img src="https://via.placeholder.com/600x400?text=Image+3" alt="Image 3" />
              </div>
            </Carousel>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
