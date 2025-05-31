"use client";

import { Container, Typography, Grid, Card, CardContent, Box, Button, Divider } from '@mui/material';
import { Science, Code, Psychology, LocalLibrary, School } from '@mui/icons-material';

const resources = [
  {
    title: 'Learning Materials',
    description: 'Access our comprehensive collection of tutorials, guides, and documentation.',
    items: [
      'Video Tutorials',
      'Interactive Guides',
      'Documentation',
      'Code Examples',
    ],
    icon: <School sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Development Tools',
    description: 'Essential tools and software for your learning journey.',
    items: [
      'Code Editors',
      'Development Environments',
      'Version Control',
      'Debugging Tools',
    ],
    icon: <Code sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Research Papers',
    description: 'Access to cutting-edge research and academic papers.',
    items: [
      'AI Research',
      'Robotics Papers',
      'Case Studies',
      'Technical Reports',
    ],
    icon: <Science sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Community Resources',
    description: 'Connect with the community and access shared resources.',
    items: [
      'Forums',
      'Discussion Groups',
      'Project Showcases',
      'Collaboration Tools',
    ],
    icon: <Psychology sx={{ fontSize: 40 }} />,
  },
];

export default function ResourcesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Resources
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Access our comprehensive collection of learning materials and tools
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {resources.map((resource) => (
          <Grid item key={resource.title} xs={12} sm={6} md={3}>
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
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ color: 'primary.main', mb: 2, textAlign: 'center' }}>
                  {resource.icon}
                </Box>
                <Typography variant="h5" component="h2" gutterBottom align="center">
                  {resource.title}
                </Typography>
                <Typography color="text.secondary" paragraph align="center">
                  {resource.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box component="ul" sx={{ pl: 2 }}>
                  {resource.items.map((item) => (
                    <Typography
                      key={item}
                      component="li"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button 
                  variant="contained"
                  fullWidth
                >
                  Explore Resources
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 