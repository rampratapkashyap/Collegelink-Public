import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Grid,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { registerAPI } from "../Redux/Features/RegisterSlice";

const GetInTouch = () => {
  const courses = ["None", "Engineering", "Medical", "Arts", "Commerce"];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    interestedCourse: "",
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Validate form data
    const { fullName, email, mobile, interestedCourse } = formData;
    if (!fullName || !email || !mobile || !interestedCourse) {
      setSnackbar({ open: true, message: "Please fill in all fields", severity: "error" });
      return;
    }

    // Dispatch API action
    dispatch(registerAPI(formData))
      .then(() => {
        setSnackbar({ open: true, message: "Form submitted successfully!", severity: "success" });
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          interestedCourse: "",
        });
      })
      .catch(() => {
        setSnackbar({ open: true, message: "Submission failed. Try again.", severity: "error" });
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <section>
      <Box
        maxWidth="70%"
        margin="auto"
        sx={{
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Get In Touch
        </Typography>

        {/* Main Form Grid */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {/* Full Name Field */}
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter your full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter your email id"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Mobile Number Field */}
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter your mobile no"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Dropdown Field */}
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              select
              variant="outlined"
              label="Choose your course"
              name="interestedCourse"
              value={formData.interestedCourse}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            >
              {courses.map((course, index) => (
                <MenuItem key={index} value={course}>
                  {course}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              size="small"
              sx={{ height: "55px" }}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Top-right position
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default GetInTouch;
