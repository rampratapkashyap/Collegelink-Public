import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

function About() {
  return (
    <Container style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to [Your Company Name]! We are dedicated to providing top-notch
          services and solutions tailored to meet your needs. With a focus on
          innovation and excellence, our team strives to exceed your expectations.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our mission is to empower businesses and individuals with the tools and
          support they need to succeed. Explore our offerings and discover how we
          can help you achieve your goals.
        </Typography>
        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2">
              Our Vision
            </Typography>
            <Typography variant="body2">
              To be a global leader in delivering innovative solutions that drive
              progress and success.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2">
              Our Values
            </Typography>
            <Typography variant="body2">
              Integrity, innovation, and customer-centricity are the pillars of our
              organization.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2">
              Our Team
            </Typography>
            <Typography variant="body2">
              A diverse group of talented professionals dedicated to achieving
              excellence.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default About;
