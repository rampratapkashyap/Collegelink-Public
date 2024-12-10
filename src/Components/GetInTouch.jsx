import React from "react";
import {
    Box,
    TextField,
    Button,
    MenuItem,
    Typography,
    Grid,
    InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import SendIcon from "@mui/icons-material/Send";

const GetInTouch = () => {
    const courses = ["None", "Engineering", "Medical", "Arts", "Commerce"];

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
                    {/* Email Field */}
                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Enter your email id"
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
                            defaultValue=""
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
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default GetInTouch;
