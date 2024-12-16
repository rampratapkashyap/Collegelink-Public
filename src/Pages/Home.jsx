import React, { useState, useEffect } from 'react';
import { Box, Grid, TextField, InputAdornment, Button, IconButton, useTheme } from '@mui/material'; // Add useTheme for theme detection
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../Components/Footer';
import TopColleges from '../Components/TopColleges';
import UPTopColleges from '../Components/UPTopColleges';
import GetInTouch from '../Components/GetInTouch';
import QuickForm from '../Components/QucikForm';
import { useDispatch } from 'react-redux';
import { fetchAllRegisters } from '../Redux/Features/RegisterSlice';

function Home() {
  const [value, setValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  let inactivityTimer;
  const dispatch = useDispatch()

  const theme = useTheme(); // Detect current theme (light or dark)

  // Function to handle user activity
  const resetTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      setShowPopup(true); // Show popup after 10 seconds of inactivity
    }, 10000); // 10 seconds
  };

  useEffect(() => {
    dispatch(fetchAllRegisters())
    // Set up event listeners for user activity
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);

    // Start the timer on initial load
    resetTimer();

    return () => {
      // Clean up event listeners and timer on unmount
      clearTimeout(inactivityTimer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
    };
  }, [dispatch  ]);

  const handleTextarea = () => {
    setValue("");
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
    resetTimer(); // Restart the inactivity timer
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
              '& .carousel-root': { width: '100%' },
              '& .carousel .slide img': {
                height: '500px',
                objectFit: 'cover',
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
                <img src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg" alt="Image 1" />
              </div>
              <div>
                <img src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg" alt="Image 2" />
              </div>
              <div>
                <img src="https://images.pexels.com/photos/7713548/pexels-photo-7713548.jpeg" alt="Image 3" />
              </div>
            </Carousel>

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
                          '&:hover': { backgroundColor: 'transparent', borderColor: '#000' },
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

      {/* Quick Form Popup */}
      {showPopup && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper, // Dynamically adjust based on theme
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
              width: '100%', // You can increase this width value if needed
              maxWidth: '900px', // Increase this maxWidth for larger form size
              position: 'relative',
            }}
          >
            {/* Cross Icon for Closing */}
            <IconButton
              onClick={closePopup}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
              }}
            >
              <CloseIcon />
            </IconButton>

            <QuickForm />
          </Box>
        </Box>
      )}
    </section>
  );
}

export default Home;
