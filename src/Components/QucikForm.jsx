import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { School as MortarboardIcon } from '@mui/icons-material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerAPI } from '../Redux/Features/RegisterSlice';

const QuickForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    interestedCourse: '',
  });
  const dispatch = useDispatch()

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  const theme = useTheme(); // Access the current theme (light or dark)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ open: false, message: '', severity: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Form Data:', formData);
    dispatch(registerAPI(formData)); // Pass formData directly
    console.log("call")
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        width: '100%',
        margin: 'auto',
        padding: 4,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper, // Adjust background based on theme
        color: theme.palette.text.primary, // Adjust text color based on theme
      }}
    >
      <Typography variant="h5" gutterBottom color="primary">
        Register Now To Apply
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <TextField
            label="Full Name"
            name="fullName"
            variant="outlined"
            fullWidth
            required
            value={formData.fullName}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: theme.palette.background.default, // Adjust input field background
            }}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: theme.palette.background.default, // Adjust input field background
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <TextField
            label="Mobile Number"
            name="mobile"
            variant="outlined"
            fullWidth
            required
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: theme.palette.background.default, // Adjust input field background
            }}
          />
          <TextField
            label="City You Live In"
            name="city"
            variant="outlined"
            fullWidth
            required
            value={formData.city}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCityIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: theme.palette.background.default, // Adjust input field background
            }}
          />
        </Box>

        <FormControl fullWidth sx={{ marginBottom: 3 }}>
          <InputLabel>Course Interested In</InputLabel>
          <Select
            name="interestedCourse"
            value={formData.interestedCourse}
            onChange={handleChange}
            required
            label="Course Interested In"
            startAdornment={
              <InputAdornment position="start">
                <MortarboardIcon />
              </InputAdornment>
            }
          >
            <MenuItem value="BE/B.Tech - Bachelors (Technology)">
              BE/B.Tech - Bachelors (Technology)
            </MenuItem>
            <MenuItem value="BBA - Bachelors (Business Administration)">
              BBA - Bachelors (Business Administration)
            </MenuItem>
            <MenuItem value="MBA - Masters (Business Administration)">
              MBA - Masters (Business Administration)
            </MenuItem>
          </Select>
        </FormControl>

        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          By submitting this form, you accept and agree to our{' '}
          <Typography component="span" color="primary">
            Terms of Use.
          </Typography>
        </Typography>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          SUBMIT
        </Button>
      </form>

      {/* Snackbar for displaying feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>

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

    </Box>
  );
};

export default QuickForm;
