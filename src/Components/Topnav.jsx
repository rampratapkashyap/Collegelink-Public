import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import Brightness2Icon from '@mui/icons-material/Brightness2'; // Moon icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Sun icon
import SchoolIcon from '@mui/icons-material/School'; // Graduation cap icon
import { useTheme } from './ThemeContext';
import { Link } from 'react-router-dom';

const Topnav = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeItem, setActiveItem] = useState('Home'); // State for active item
  const [drawerOpen, setDrawerOpen] = useState(false); // State for mobile drawer

  // Handle button click to set active item
  const handleItemClick = (item) => {
    setActiveItem(item);
    setDrawerOpen(false); // Close drawer after selection
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme === 'light' ? 'white' : 'inherit',
          color: theme === 'light' ? 'black' : 'inherit',
        }}
      >
        <Toolbar>
          {/* Menu icon for mobile screens */}
          <Box display={{ xs: 'flex', md: 'none' }} marginRight={1}>
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Application Name with Styling */}
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <SchoolIcon
              sx={{
                marginRight: 1,
                fontSize: 40,
                color: theme === 'light' ? 'black' : 'white',
              }}
            />
            <span style={{ color: '#FFD700' }}>College</span>
            <span style={{ color: '#1E90FF' }}>Link</span>.in
          </Typography>

          {/* Navigation items for larger screens */}
          <Box display={{ xs: 'none', md: 'flex' }} gap={3}>
            <Button
              component={Link}
              to="/"
              variant={activeItem === 'Home' ? 'contained' : 'text'}
              sx={{
                backgroundColor: activeItem === 'Home' ? (theme === 'light' ? 'black' : 'white') : 'transparent',
                color: activeItem === 'Home' ? (theme === 'light' ? 'white' : 'black') : 'inherit',
              }}
              onClick={() => handleItemClick('Home')}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/courses"
              variant={activeItem === 'Courses' ? 'contained' : 'text'}
              sx={{
                backgroundColor: activeItem === 'Courses' ? (theme === 'light' ? 'black' : 'white') : 'transparent',
                color: activeItem === 'Courses' ? (theme === 'light' ? 'white' : 'black') : 'inherit',
              }}
              onClick={() => handleItemClick('Courses')}
            >
              Courses
            </Button>
            <Button
              component={Link}
              to="/about"
              variant={activeItem === 'About' ? 'contained' : 'text'}
              sx={{
                backgroundColor: activeItem === 'About' ? (theme === 'light' ? 'black' : 'white') : 'transparent',
                color: activeItem === 'About' ? (theme === 'light' ? 'white' : 'black') : 'inherit',
              }}
              onClick={() => handleItemClick('About')}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant={activeItem === 'Contact' ? 'contained' : 'text'}
              sx={{
                backgroundColor: activeItem === 'Contact' ? (theme === 'light' ? 'black' : 'white') : 'transparent',
                color: activeItem === 'Contact' ? (theme === 'light' ? 'white' : 'black') : 'inherit',
              }}
              onClick={() => handleItemClick('Contact')}
            >
              Contact
            </Button>
          </Box>

          {/* Theme Toggle Button */}
          <IconButton onClick={toggleTheme} color="inherit">
            {theme === 'light' ? <Brightness2Icon /> : <WbSunnyIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box width={250}>
          <List>
            <ListItem button onClick={() => handleItemClick('Home')} component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick('Courses')} component={Link} to="/courses">
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick('About')} component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick('Contact')} component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Topnav;
