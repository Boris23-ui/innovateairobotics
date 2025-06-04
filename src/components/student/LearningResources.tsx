import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Chip, IconButton, LinearProgress } from '@mui/material';
import { PlayArrow, Book, Code, Science, Build } from '@mui/icons-material';

interface Resource {
  title: string;
  type: 'video' | 'document' | 'code' | 'lab';
  progress: number;
  duration: string;
  description: string;
}

const resources: Resource[] = [
  {
    title: "Introduction to Robotics",
    type: "video",
    progress: 75,
    duration: "45 min",
    description: "Learn the basics of robotics and automation"
  },
  {
    title: "Programming Guide",
    type: "document",
    progress: 60,
    duration: "30 min",
    description: "Comprehensive guide to robot programming"
  },
  {
    title: "Sensor Integration Lab",
    type: "lab",
    progress: 40,
    duration: "2 hours",
    description: "Hands-on experience with various sensors"
  },
  {
    title: "Code Examples",
    type: "code",
    progress: 90,
    duration: "20 min",
    description: "Practical code examples for common tasks"
  }
];

const getResourceIcon = (type: Resource['type']) => {
  switch (type) {
    case 'video':
      return <PlayArrow />;
    case 'document':
      return <Book />;
    case 'code':
      return <Code />;
    case 'lab':
      return <Science />;
  }
};

const getResourceColor = (type: Resource['type']) => {
  switch (type) {
    case 'video':
      return 'primary';
    case 'document':
      return 'success';
    case 'code':
      return 'warning';
    case 'lab':
      return 'error';
  }
};

export default function LearningResources() {
  return (
    <Grid container spacing={3}>
      {resources.map((resource, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton 
                  sx={{ 
                    bgcolor: `${getResourceColor(resource.type)}.light`,
                    color: `${getResourceColor(resource.type)}.main`,
                    mr: 2
                  }}
                >
                  {getResourceIcon(resource.type)}
                </IconButton>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3">
                    {resource.title}
                  </Typography>
                  <Chip 
                    label={resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    size="small"
                    color={getResourceColor(resource.type)}
                    sx={{ mt: 0.5 }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {resource.duration}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {resource.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={resource.progress}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: `${getResourceColor(resource.type)}.main`,
                        borderRadius: 4,
                      }
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {resource.progress}%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
} 