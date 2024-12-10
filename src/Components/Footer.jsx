import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '40px 0',
        marginTop: 'auto',
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Your Company
            </Typography>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
            </Typography>
          </Grid>

          {/* Middle Column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" component="div">
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            </Typography>
            <Typography variant="body2" component="div">
              <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
            </Typography>
            <Typography variant="body2" component="div">
              <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
            </Typography>
          </Grid>

          {/* Right Column (Social Media Icons) */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="primary" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="primary" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
              <IconButton color="primary" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton color="primary" href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
