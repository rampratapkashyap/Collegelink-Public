import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import arrow icon

const coursesData = [
  { category: "Engineering", name: "B.Tech (CS)", duration: "4 Years", eligibility: "10+2 with PCM", topColleges: ["IIT Delhi", "IIT Bombay"], description: "B.Tech in CS focuses on software and AI." },
  { category: "Medical", name: "MBBS", duration: "5.5 Years", eligibility: "10+2 with PCB", topColleges: ["AIIMS", "CMC Vellore"], description: "MBBS is a professional medical degree." },
  { category: "Law", name: "LLB", duration: "3 Years", eligibility: "Graduation", topColleges: ["NLU Delhi", "Symbiosis Law"], description: "LLB is a law degree for legal careers." },
  { category: "Commerce", name: "B.Com", duration: "3 Years", eligibility: "10+2", topColleges: ["Shri Ram College", "St. Xavier's"], description: "B.Com covers finance and business." },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedCourse(null);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleApplyClick = (event, course) => {
    event.stopPropagation();
    setSelectedCourse(course);
    setApplyModalOpen(true);
  };

  const handleCloseModal = () => {
    setApplyModalOpen(false);
  };

  const filteredCourses = selectedCategory
    ? coursesData.filter((course) => course.category === selectedCategory)
    : coursesData;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Explore Courses
      </Typography>

      {/* Category Filter Dropdown */}
      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <InputLabel>Select Category</InputLabel>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Engineering">Engineering</MenuItem>
          <MenuItem value="Medical">Medical</MenuItem>
          <MenuItem value="Law">Law</MenuItem>
          <MenuItem value="Commerce">Commerce</MenuItem>
        </Select>
      </FormControl>

      {/* Course Details Page */}
      {selectedCourse ? (
        <Box sx={{ padding: 3, border: "1px solid #ddd", borderRadius: 2 }}>
          <Typography variant="h5" color="primary">{selectedCourse.name}</Typography>
          <Typography><strong>Duration:</strong> {selectedCourse.duration}</Typography>
          <Typography><strong>Eligibility:</strong> {selectedCourse.eligibility}</Typography>
          <Typography><strong>Top Colleges:</strong> {selectedCourse.topColleges.join(", ")}</Typography>
          <Typography><strong>Description:</strong> {selectedCourse.description}</Typography>
          <Button
            sx={{ marginTop: 2, backgroundColor: "orange", color: "white", borderRadius: "8px" }}
            onClick={(e) => handleApplyClick(e, selectedCourse)}
          >
            Apply Now <ArrowForwardIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Box>
      ) : (
        /* Courses Grid */
        <Grid container spacing={3}>
          {filteredCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  minHeight: 200,
                  transition: "0.3s",
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "10px",
                  "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
                }}
                onClick={() => handleCourseClick(course)}
              >
                {/* Apply Button - Top Right */}
                <Button
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "orange",
                    color: "white",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#ff9800" },
                  }}
                  onClick={(e) => handleApplyClick(e, course)}
                >
                  Apply <ArrowForwardIcon sx={{ marginLeft: 0.5 }} />
                </Button>

                <CardContent>
                  <Typography variant="h6" color="primary">{course.name}</Typography>
                  <Typography variant="body2" color="textSecondary"><strong>Duration:</strong> {course.duration}</Typography>
                  <Typography variant="body2" color="textSecondary"><strong>Eligibility:</strong> {course.eligibility}</Typography>
                  <Typography variant="body2" color="textSecondary"><strong>Top Colleges:</strong> {course.topColleges.join(", ")}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Apply Modal */}
      <Modal open={applyModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>Apply for {selectedCourse?.name}</Typography>
          <TextField label="Full Name" fullWidth sx={{ marginBottom: 2 }} />
          <TextField label="Email" fullWidth sx={{ marginBottom: 2 }} />
          <TextField label="Phone Number" fullWidth sx={{ marginBottom: 2 }} />
          <Button variant="contained" color="primary" fullWidth onClick={handleCloseModal}>
            Submit Application
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Courses;