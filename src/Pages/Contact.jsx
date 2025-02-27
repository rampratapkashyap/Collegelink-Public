import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  useTheme,
} from "@mui/material";

function Contact() {
  const theme = useTheme(); // Access theme for dark/light mode

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 5 }}> 
      <Paper
        elevation={6}
        sx={{
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: theme.palette.mode === "dark" ? "#1c1c1c" : "#f9f9f9",
          color: theme.palette.mode === "dark" ? "#ffffff" : "#333",
          transition: "0.3s ease-in-out",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          textAlign="center"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" textAlign="center" color="textSecondary">
          We'd love to hear from you! Fill out the form below and our team will
          respond as soon as possible.
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              padding: "12px",
              fontSize: "16px",
              backgroundColor: theme.palette.mode === "dark" ? "#1976d2" : "#1565c0",
              color: "#fff",
              "&:hover": {
                backgroundColor: theme.palette.mode === "dark" ? "#1565c0" : "#0d47a1",
              },
              transition: "0.3s",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0px 4px 10px rgba(25, 118, 210, 0.5)"
                  : "0px 4px 10px rgba(21, 101, 192, 0.2)",
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;
