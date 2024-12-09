import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import Brightness2Icon from '@mui/icons-material/Brightness2'; // Moon icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Sun icon
import { useTheme } from './ThemeContext';
import { Link } from 'react-router-dom';

const Topnav = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeItem, setActiveItem] = useState('Home'); // State for active item

  // Handle button click to set active item
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>

        {/* Top Nav Items with spacing */}
        <Box display="flex" gap={3}>
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
          {theme === "light" ? <Brightness2Icon /> : <WbSunnyIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Topnav;
