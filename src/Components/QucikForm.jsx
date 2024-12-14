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
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const QuickForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: '',
    course: 'BE/B.Tech - Bachelors (Technology)',
  });

  const theme = useTheme(); // Access the current theme (light or dark)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        width: '100%',
        margin: 'auto',
        padding: 4,
        boxShadow: 2,
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
            name="mobileNumber"
            variant="outlined"
            fullWidth
            required
            type="tel"
            value={formData.mobileNumber}
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
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            label="Course Interested In"
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
    </Box>
  );
};

export default QuickForm;
