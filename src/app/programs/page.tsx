'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  useTheme,
} from '@mui/material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  SmartToy as RobotIcon,
  Science as ScienceIcon,
  AccessTime as TimeIcon,
  Group as GroupIcon,
} from '@mui/icons-material';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  maxStudents: number;
  price: string;
}

const programs: Program[] = [
  {
    id: '1',
    title: 'Introduction to Robotics',
    description: 'Learn the fundamentals of robotics, including basic mechanics, electronics, and programming. Perfect for beginners!',
    image: '/images/young-robotics-engineers.jpg',
    category: 'Robotics',
    duration: '12 weeks',
    level: 'Beginner',
    maxStudents: 20,
    price: '$999',
  },
  {
    id: '2',
    title: 'Advanced AI Programming',
    description: 'Dive deep into machine learning algorithms and neural networks. Build your own AI models from scratch.',
    image: '/images/IMG_0535.jpg',
    category: 'AI',
    duration: '16 weeks',
    level: 'Advanced',
    maxStudents: 15,
    price: '$1,499',
  },
  {
    id: '3',
    title: 'Drone Development',
    description: 'Design, build, and program your own drones. Learn about aerodynamics, flight control, and autonomous navigation.',
    image: '/images/20220810_152306.jpg',
    category: 'Robotics',
    duration: '14 weeks',
    level: 'Intermediate',
    maxStudents: 18,
    price: '$1,299',
  },
  {
    id: '4',
    title: 'Computer Vision',
    description: 'Master computer vision techniques and implement them in real-world applications using Python and OpenCV.',
    image: '/images/kids getting ready for class.jpg',
    category: 'AI',
    duration: '10 weeks',
    level: 'Intermediate',
    maxStudents: 16,
    price: '$1,199',
  },
];

const categories = ['All', 'Robotics', 'AI'];

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const theme = useTheme();

  const filteredPrograms = programs.filter(
    program => selectedCategory === 'All' || program.category === selectedCategory
  );

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          color="primary"
          gutterBottom
          sx={{ mb: 6, fontWeight: 600 }}
        >
          Our Programs
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            centered
            sx={{
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                textTransform: 'none',
                minWidth: 120,
              },
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category}
                label={category}
                value={category}
                sx={{
                  '&.Mui-selected': {
                    color: 'primary.main',
                    fontWeight: 600,
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filteredPrograms.map((program) => (
            <Grid item key={program.id} xs={12} md={6} component="div">
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={program.image}
                  alt={program.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 600 }}
                  >
                    {program.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {program.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    <Chip
                      icon={<TimeIcon />}
                      label={program.duration}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      icon={<GroupIcon />}
                      label={`Max ${program.maxStudents} students`}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label={program.level}
                      size="small"
                      color="secondary"
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  >
                    {program.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 500,
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 