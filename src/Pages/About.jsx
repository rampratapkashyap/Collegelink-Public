import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School"; // Degree Cap Icon 🎓

function About() {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 5 }}>
      {/* Main About Section */}
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom display="flex" alignItems="center" justifyContent="center">
          <SchoolIcon sx={{ fontSize: 50, color: "black", marginRight: 1 }} />
          <span style={{ color: "orange" }}>College</span>
          <span style={{ color: "blue" }}>Link.in</span>
        </Typography>

        <Typography variant="body1" color="textSecondary" paragraph>
          CollegeLink.in is your gateway to top educational institutions, courses, and career opportunities.
          We strive to connect students with the best colleges, empowering them to make informed decisions about their future.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Our mission is to simplify the college selection process by providing reliable and up-to-date information, ensuring
          students find the right course and institution tailored to their goals.
        </Typography>

        {/* Image Section */}
        <Box
          component="img"
          src="https://source.unsplash.com/800x400/?university,college"
          alt="College Campus"
          sx={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 2, marginY: 3 }}
        />
      </Paper>

      {/* Grid Sections for Vision, Values, and Team */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {[
          { icon: <VisibilityIcon />, title: "Our Vision", text: "To revolutionize the education sector by bridging the gap between students and top-tier colleges." },
          { icon: <BusinessIcon />, title: "Our Values", text: "Integrity, transparency, and student success drive everything we do at CollegeLink.in." },
          { icon: <PeopleIcon />, title: "Our Team", text: "A passionate team of educators, technologists, and counselors committed to shaping brighter futures." }
        ].map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: "center", borderRadius: 2, minHeight: 200 }}>
              {React.cloneElement(item.icon, { sx: { fontSize: 50, color: index === 0 ? "primary.main" : index === 1 ? "secondary.main" : "success.main" } })}
              <Typography variant="h5" fontWeight="bold" sx={{ marginTop: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About;