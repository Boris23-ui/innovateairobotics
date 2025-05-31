"use client";

import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { LocalLibrary, Code, Science, Psychology } from '@mui/icons-material';

const programs = [
  {
    title: 'AI & Machine Learning',
    description: 'Master the fundamentals of artificial intelligence and machine learning through hands-on projects and real-world applications.',
    icon: <Science sx={{ fontSize: 40 }} />,
    duration: '12 weeks',
    level: 'Intermediate',
  },
  {
    title: 'Web Development',
    description: 'Learn modern web development technologies including React, Node.js, and full-stack application development.',
    icon: <Code sx={{ fontSize: 40 }} />,
    duration: '10 weeks',
    level: 'Beginner',
  },
  {
    title: 'Data Science',
    description: 'Explore data analysis, visualization, and statistical methods to extract insights from complex datasets.',
    icon: <Psychology sx={{ fontSize: 40 }} />,
    duration: '14 weeks',
    level: 'Advanced',
  },
  {
    title: 'Robotics & Automation',
    description: 'Dive into robotics programming, automation systems, and control theory with practical projects.',
    icon: <LocalLibrary sx={{ fontSize: 40 }} />,
    duration: '16 weeks',
    level: 'Intermediate',
  },
];

export default function ProgramsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Our Programs
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Discover our comprehensive range of technology education programs
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {programs.map((program) => (
          <Grid item key={program.title} xs={12} sm={6} md={3}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {program.icon}
                </Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {program.title}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {program.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {program.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Level: {program.level}
                  </Typography>
                </Box>
              </CardContent>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 