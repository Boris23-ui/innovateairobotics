'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  SmartToy as RobotIcon,
  Science as ScienceIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

interface CourseModule {
  title: string;
  description: string;
  duration: string;
  topics: string[];
  prerequisites: string[];
}

interface CourseLevel {
  title: string;
  description: string;
  modules: CourseModule[];
}

const curriculum: CourseLevel[] = [
  {
    title: 'Level 1: Foundations',
    description: 'Build a strong foundation in robotics and AI concepts',
    modules: [
      {
        title: 'Introduction to Robotics',
        description: 'Learn the basics of robotics and automation',
        duration: '4 weeks',
        topics: [
          'Basic mechanics and electronics',
          'Introduction to programming',
          'Robot assembly and testing',
          'Basic sensor integration',
        ],
        prerequisites: ['None'],
      },
      {
        title: 'Programming Fundamentals',
        description: 'Master the essential programming concepts',
        duration: '6 weeks',
        topics: [
          'Python programming basics',
          'Data structures and algorithms',
          'Object-oriented programming',
          'Version control with Git',
        ],
        prerequisites: ['None'],
      },
    ],
  },
  {
    title: 'Level 2: Intermediate',
    description: 'Dive deeper into advanced concepts and practical applications',
    modules: [
      {
        title: 'Advanced Robotics',
        description: 'Explore complex robotics systems and control',
        duration: '8 weeks',
        topics: [
          'Advanced mechanics and control systems',
          'Sensor fusion and integration',
          'Motion planning and navigation',
          'Robot operating system (ROS)',
        ],
        prerequisites: ['Introduction to Robotics', 'Programming Fundamentals'],
      },
      {
        title: 'Machine Learning Basics',
        description: 'Introduction to machine learning concepts and applications',
        duration: '6 weeks',
        topics: [
          'Supervised and unsupervised learning',
          'Neural networks fundamentals',
          'Data preprocessing and feature engineering',
          'Model evaluation and optimization',
        ],
        prerequisites: ['Programming Fundamentals'],
      },
    ],
  },
  {
    title: 'Level 3: Advanced',
    description: 'Master advanced topics and work on real-world projects',
    modules: [
      {
        title: 'Deep Learning and AI',
        description: 'Advanced AI concepts and deep learning applications',
        duration: '10 weeks',
        topics: [
          'Deep neural networks',
          'Computer vision',
          'Natural language processing',
          'Reinforcement learning',
        ],
        prerequisites: ['Machine Learning Basics'],
      },
      {
        title: 'Advanced Robotics Projects',
        description: 'Hands-on experience with complex robotics systems',
        duration: '12 weeks',
        topics: [
          'Autonomous navigation',
          'Multi-robot systems',
          'Human-robot interaction',
          'Project development and deployment',
        ],
        prerequisites: ['Advanced Robotics', 'Deep Learning and AI'],
      },
    ],
  },
];

export default function Curriculum() {
  const [activeLevel, setActiveLevel] = useState(0);
  const theme = useTheme();

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
          Curriculum
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
        >
          Our comprehensive curriculum is designed to take you from beginner to expert
          in robotics and AI. Each level builds upon the previous one, ensuring a
          solid foundation and continuous growth.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                position: 'sticky',
                top: 24,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Course Structure
              </Typography>
              <Box sx={{ mt: 2 }}>
                {curriculum.map((level, index) => (
                  <Button
                    key={level.title}
                    fullWidth
                    variant={activeLevel === index ? 'contained' : 'outlined'}
                    onClick={() => setActiveLevel(index)}
                    sx={{
                      mb: 2,
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      fontWeight: activeLevel === index ? 600 : 400,
                    }}
                  >
                    {level.title}
                  </Button>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: 'primary.main' }}
              >
                {curriculum[activeLevel].title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                {curriculum[activeLevel].description}
              </Typography>

              {curriculum[activeLevel].modules.map((module, index) => (
                <Accordion
                  key={module.title}
                  sx={{
                    mb: 2,
                    '&:before': { display: 'none' },
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {module.title}
                      </Typography>
                      <Chip
                        label={module.duration}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      {module.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Topics Covered:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {module.topics.map((topic) => (
                          <Chip
                            key={topic}
                            label={topic}
                            size="small"
                            icon={<CheckCircleIcon />}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>
                        Prerequisites:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {module.prerequisites.map((prereq) => (
                          <Chip
                            key={prereq}
                            label={prereq}
                            size="small"
                            color="secondary"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 