import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import Brightness2Icon from '@mui/icons-material/Brightness2'; // Moon icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Sun icon
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
      <AppBar position="fixed">
        <Toolbar>
          {/* Menu icon for mobile screens */}
          <Box display={{ xs: 'flex', md: 'none' }} marginRight={1}>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Application Name */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CollegeLink
          </Typography>
          {/* Navigation items for larger screens */}
          <Box display={{ xs: 'none', md: 'flex' }} gap={3}>
            <Button
              component={Link}
              to="/"
              variant={activeItem === 'Home' ? 'contained' : 'text'}
              color="inherit"
              onClick={() => handleItemClick('Home')}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/courses"
              variant={activeItem === 'Courses' ? 'contained' : 'text'}
              color="inherit"
              onClick={() => handleItemClick('Courses')}
            >
              Courses
            </Button>
            <Button
              component={Link}
              to="/about"
              variant={activeItem === 'About' ? 'contained' : 'text'}
              color="inherit"
              onClick={() => handleItemClick('About')}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant={activeItem === 'Contact' ? 'contained' : 'text'}
              color="inherit"
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
