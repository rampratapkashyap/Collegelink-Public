import React from 'react';
import { Card, CardContent, CardMedia, Button, Grid, Typography } from '@mui/material';

const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn the basics of React.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript concepts.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Web Development Masterclass',
    description: 'Become a full-stack web developer.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more courses as needed
];

function Courses() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={course.imageUrl}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <Button size="small" color="primary">
                Enroll Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Courses;
