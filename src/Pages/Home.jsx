import React, { useState } from 'react';
import { Box, Grid, TextField, InputAdornment, Typography, Button, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../Components/Footer';
import TopColleges from '../Components/TopColleges';
import UPTopColleges from '../Components/UPTopColleges';
import GetInTouch from '../Components/GetInTouch';

function Home() {
  const [value, setValue] = useState("");
  const handleTextarea = () => {
    setValue("");
  };

  return (
    <section maxWidth="full">
      {/* Grid for Layout */}
      <Grid container spacing={4} direction="column" alignItems="center">
        {/* Image Carousel */}
        <Grid item xs={12} sx={{ width: '100%', position: 'relative' }}>
          {/* Carousel */}
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%',
              '& .carousel-root': {
                width: '100%',
              },
              '& .carousel .slide img': {
                height: '500px', // Set a fixed height
                objectFit: 'cover', // Ensure images are cropped to fit
              },
            }}
          >
            <Carousel
              autoPlay
              interval={2000}
              infiniteLoop
              showArrows={true}
              showThumbs={false}
              dynamicHeight={false}
              swipeable
              emulateTouch
            >
              <div>
                <img src="https://cdn.pixabay.com/photo/2017/12/20/03/46/city-3029160_1280.jpg" alt="Image 1" />
              </div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2019/03/03/21/59/landscape-4032951_1280.jpg" alt="Image 2" />
              </div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2018/02/14/18/42/sky-3153572_1280.jpg" alt="Image 3" />
              </div>
            </Carousel>

            {/* Centered Search Bar */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '80%', sm: '60%', md: '50%' }, // Adjust width based on screen size
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <TextField
                type="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
                placeholder="Find your college here...."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'black' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        size="large"
                        onClick={handleTextarea}
                        sx={{
                          backgroundColor: 'transparent',
                          border: '1px solid #000',
                          color: 'black',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            borderColor: '#000',
                          },
                        }}
                      >
                        Search
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Top Colleges */}
      <TopColleges />

      {/* UP Top Colleges */}
      <UPTopColleges />

      {/* Get In Touch*/}
      <GetInTouch />

      {/* Footer */}
      <Footer />
    </section>
  );
}

export default Home;
