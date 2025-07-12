'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  LinearProgress,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  School as SchoolIcon,
  Engineering as EngineeringIcon,
  Science as ScienceIcon,
  Code as CodeIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  PlayArrow as PlayArrowIcon,
  BookmarkBorder as BookmarkIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { user, isSignedIn } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, href: '/dashboard' },
    { text: 'Courses', icon: <SchoolIcon />, href: '/courses' },
    { text: 'Projects', icon: <EngineeringIcon />, href: '/projects' },
    { text: 'Progress', icon: <ScienceIcon />, href: '/progress' },
    { text: 'Code Playground', icon: <CodeIcon />, href: '/playground' },
  ];

  const ageGroups = [
    {
      name: 'Tiny Tinkerers',
      age: 'Ages 5 & Under',
      color: theme.palette.education.tiny,
      description: 'Introduction to robotics through play and simple machines',
      icon: '🤖'
    },
    {
      name: 'Robot Explorers',
      age: 'Ages 6-9',
      color: theme.palette.education.explorers,
      description: 'Building and programming basic robots',
      icon: '🚀'
    },
    {
      name: 'Tech Titans',
      age: 'Ages 10-12',
      color: theme.palette.education.titans,
      description: 'Advanced robotics and coding concepts',
      icon: '⚡'
    },
    {
      name: 'AI Avengers',
      age: 'AI Introduction',
      color: theme.palette.education.avengers,
      description: 'Artificial intelligence and machine learning',
      icon: '🧠'
    }
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" color="primary">
          InnovateAI Robotics
        </Typography>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            InnovateAI Robotics
          </Typography>
          {isSignedIn ? (
            <Button color="inherit" startIcon={<PersonIcon />}>
              {user?.firstName || 'Profile'}
            </Button>
          ) : (
            <Button color="inherit" variant="outlined">
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Empowering the Next Generation of
              <Typography 
                variant="h2" 
                component="span" 
                sx={{ 
                  background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}
              >
                {' '}Robotics Engineers
              </Typography>
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Hands-on learning experiences that combine robotics, AI, and coding 
              to inspire creativity and innovation in young minds.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large" 
                startIcon={<PlayArrowIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                Start Learning
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                startIcon={<BookmarkIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                Explore Courses
              </Button>
            </Box>
          </Box>
        </motion.div>

        {/* Age Groups Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Age-Appropriate Learning Paths
          </Typography>
          <Grid container spacing={3}>
            {ageGroups.map((group, index) => (
              <Grid item xs={12} sm={6} md={3} key={group.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card 
                    className="card-hover"
                    sx={{ 
                      height: '100%',
                      border: `2px solid ${group.color}`,
                      '&:hover': {
                        borderColor: group.color,
                        transform: 'translateY(-4px)',
                      }
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Typography variant="h1" sx={{ mb: 2 }}>
                        {group.icon}
                      </Typography>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {group.name}
                      </Typography>
                      <Chip 
                        label={group.age} 
                        size="small" 
                        sx={{ 
                          backgroundColor: group.color, 
                          color: 'white',
                          mb: 2
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {group.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
              Why Choose InnovateAI Robotics?
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card className="card-hover">
                  <CardContent>
                    <EngineeringIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h5" component="h3" gutterBottom>
                      Hands-On Learning
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Build real robots and see your code come to life through interactive projects and challenges.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="card-hover">
                  <CardContent>
                    <ScienceIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                    <Typography variant="h5" component="h3" gutterBottom>
                      AI Integration
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Learn about artificial intelligence and machine learning through age-appropriate activities.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="card-hover">
                  <CardContent>
                    <CodeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h5" component="h3" gutterBottom>
                      Visual Programming
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Use block-based coding to program robots, making complex concepts accessible to all ages.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 