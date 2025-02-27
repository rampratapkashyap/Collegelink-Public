import React, { useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  School,
  LocalHospital,
  Gavel,
  Business,
  Science,
  Palette,
  AttachMoney,
  Computer
} from "@mui/icons-material";

const studyGoals = [
  { title: "Engineering", icon: <School sx={{ color: "#007bff" }} />, color: "#E3F2FD", courses: ["Civil", "Mechanical", "Electrical", "Computer Science"] },
  { title: "Medical", icon: <LocalHospital sx={{ color: "#28a745" }} />, color: "#E8F5E9", courses: ["MBBS", "BDS", "BAMS", "BHMS", "Nursing"] },
  { title: "Law", icon: <Gavel sx={{ color: "#6c757d" }} />, color: "#ECEFF1", courses: ["LLB", "LLM", "Corporate Law", "Criminal Law"] },
  { title: "Management", icon: <Business sx={{ color: "#ff5722" }} />, color: "#FBE9E7", courses: ["MBA", "BBA", "Finance", "Marketing"] },
  { title: "Science", icon: <Science sx={{ color: "#673ab7" }} />, color: "#EDE7F6", courses: ["Physics", "Chemistry", "Biology", "Mathematics"] },
  { title: "Arts", icon: <Palette sx={{ color: "#ff9800" }} />, color: "#FFF3E0", courses: ["History", "Political Science", "Sociology", "Psychology"] },
  { title: "Commerce", icon: <AttachMoney sx={{ color: "#009688" }} />, color: "#E0F2F1", courses: ["Accounting", "Business Studies", "Economics", "Finance"] },
  { title: "Technology", icon: <Computer sx={{ color: "#3f51b5" }} />, color: "#E3F2FD", courses: ["AI", "Data Science", "Cybersecurity", "IoT"] }
];

const StudyGoal = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", p: 3, position: "relative" }}>
      {/* Left Scroll Button */}
      <IconButton onClick={() => scroll("left")} sx={{ zIndex: 2 }}>
        <ArrowBackIos />
      </IconButton>

      {/* Scrollable Cards */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          scrollBehavior: "smooth",
          width: "100%",
          p: 1,
          position: "relative",
        }}
      >
        {studyGoals.map((goal, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 240,
              textAlign: "center",
              p: 2,
              backgroundColor: goal.color,
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <CardContent>
              <ListItemIcon sx={{ justifyContent: "center" }}>{goal.icon}</ListItemIcon>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {goal.title}
              </Typography>
              <List sx={{ textAlign: "left", pl: 2 }}>
                {goal.courses.map((course, idx) => (
                  <ListItem key={idx} sx={{ p: 0, fontSize: "0.9rem", color: "#555" }}>
                    • {course}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Right Scroll Button */}
      <IconButton onClick={() => scroll("right")} sx={{ zIndex: 2 }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default StudyGoal;
