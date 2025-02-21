import React from "react";
import { Card, CardContent, Typography, Box, IconButton, List, ListItem, ListItemIcon } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, School, LocalHospital, Gavel, Business, Science, Palette, AttachMoney, Computer } from "@mui/icons-material";
import { useRef } from "react";

const studyGoals = [
    { title: "Engineering", icon: <School />, courses: ["Civil", "Mechanical", "Electrical", "Computer Science"] },
    { title: "Medical", icon: <LocalHospital />, courses: ["MBBS", "BDS", "BAMS", "BHMS", "Nursing"] },
    { title: "Law", icon: <Gavel />, courses: ["LLB", "LLM", "Corporate Law", "Criminal Law"] },
    { title: "Management", icon: <Business />, courses: ["MBA", "BBA", "Finance", "Marketing"] },
    { title: "Science", icon: <Science />, courses: ["Physics", "Chemistry", "Biology", "Mathematics"] },
    { title: "Arts", icon: <Palette />, courses: ["History", "Political Science", "Sociology", "Psychology"] },
    { title: "Commerce", icon: <AttachMoney />, courses: ["Accounting", "Business Studies", "Economics", "Finance"] },
    { title: "Technology", icon: <Computer />, courses: ["AI", "Data Science", "Cybersecurity", "IoT"] }
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
        <Box sx={{ display: "flex", alignItems: "center", overflow: "hidden", p: 2 }}>
            <IconButton onClick={() => scroll("left")}>
                <ArrowBackIos />
            </IconButton>
            <Box
                ref={scrollRef}
                sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollBehavior: "smooth",
                    width: "100%",
                    p: 1,
                }}
            >
                {studyGoals.map((goal, index) => (
                    <Card key={index} sx={{ minWidth: 220, textAlign: "center", p: 1 }}>
                        <CardContent>
                            <ListItemIcon sx={{ justifyContent: "center" }}>{goal.icon}</ListItemIcon>
                            <Typography variant="h6">{goal.title}</Typography>
                            <List sx={{ textAlign: "left", pl: 2 }}>
                                {goal.courses.map((course, idx) => (
                                    <ListItem key={idx} sx={{ p: 0, fontSize: "0.875rem" }}>
                                        - {course}
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <IconButton onClick={() => scroll("right")}>
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
};

export default StudyGoal;