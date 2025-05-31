"use client";

import { Container, Typography, Grid, Card, CardContent, Box, Button, Divider } from '@mui/material';
import { Book, Code, Science, Psychology, LocalLibrary } from '@mui/icons-material';

const modules = [
  {
    title: 'Foundations of AI',
    description: 'Introduction to artificial intelligence concepts, history, and applications.',
    topics: [
      'Introduction to AI and Machine Learning',
      'Python Programming Basics',
      'Data Structures and Algorithms',
      'Mathematics for AI',
    ],
    icon: <Science sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Web Development',
    description: 'Comprehensive web development curriculum covering frontend and backend technologies.',
    topics: [
      'HTML, CSS, and JavaScript',
      'React and Modern Frontend',
      'Node.js and Backend Development',
      'Database Design and Management',
    ],
    icon: <Code sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Data Science',
    description: 'Learn data analysis, visualization, and statistical methods.',
    topics: [
      'Data Analysis with Python',
      'Statistical Methods',
      'Data Visualization',
      'Machine Learning Basics',
    ],
    icon: <Psychology sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Robotics',
    description: 'Hands-on robotics programming and control systems.',
    topics: [
      'Robotics Fundamentals',
      'Control Systems',
      'Sensor Integration',
      'Autonomous Navigation',
    ],
    icon: <LocalLibrary sx={{ fontSize: 40 }} />,
  },
];

export default function CurriculumPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Curriculum
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Explore our comprehensive learning paths and course modules
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {modules.map((module) => (
          <Grid item key={module.title} xs={12} md={6}>
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
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 2 }}>
                    {module.icon}
                  </Box>
                  <Typography variant="h5" component="h2">
                    {module.title}
                  </Typography>
                </Box>
                <Typography color="text.secondary" paragraph>
                  {module.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Topics Covered:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {module.topics.map((topic) => (
                    <Typography
                      key={topic}
                      component="li"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {topic}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Button 
                    variant="contained"
                    fullWidth
                  >
                    View Detailed Curriculum
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 