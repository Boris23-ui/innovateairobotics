"use client";

import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  useTheme,
  Fade,
  Grow,
  Chip,
  IconButton,
  Tooltip,
  Alert,
  Snackbar,
  LinearProgress,
  Badge,
} from '@mui/material';
import { 
  Refresh as RefreshIcon,
  Notifications as NotificationsIcon,
  TrendingUp as TrendingUpIcon,
  Stars as StarsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import StudentInfoCard from '@/components/student/StudentInfoCard';
import StudentProgressCard from '@/components/student/StudentProgressCard';
import StudentDashboardCard from '@/components/student/StudentDashboardCard';
import BadgesOverview from '@/components/student/BadgesOverview';
import CurrentChallenges from '@/components/student/CurrentChallenges';
import UpcomingAssignments from '@/components/student/UpcomingAssignments';
import PeerReviewSection from '@/components/student/PeerReviewSection';
import SubmittedProjects from '@/components/student/SubmittedProjects';

// Mock data - Replace with actual data from your backend
const mockData = {
  studentInfo: {
    name: "John Doe",
    gradeLevel: "Grade 10",
    progress: "75%",
    lastLogin: "2 hours ago"
  },
  courses: [
    { course: "Introduction to Robotics", progress: "75%", lastActivity: "2 hours ago" },
    { course: "Advanced Programming", progress: "60%", lastActivity: "1 day ago" }
  ],
  assignments: [
    { title: "Robot Navigation Project", course: "Introduction to Robotics", dueDate: "April 15, 2024" },
    { title: "Sensor Integration", course: "Advanced Programming", dueDate: "April 20, 2024" }
  ],
  projects: [
    { title: "Maze Solver Robot", status: "graded", score: "95%", feedback: "Excellent implementation!" },
    { title: "Sensor Array Project", status: "in_review", feedback: null }
  ]
};

export default function StudentDashboard() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState(2);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLastUpdated(new Date());
    setIsLoading(false);
    setShowAlert(true);
    setAlertMessage('Dashboard updated successfully!');
  };

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
      <Box sx={{ 
        my: 4,
        minHeight: 0,
        overflowY: 'auto',
        transition: theme.transitions.create(['background-color', 'color'], {
          duration: theme.transitions.duration.standard,
        }),
      }}>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 3 
          }}
        >
          <Box>
            <Typography 
              variant="h4" 
              component="h1"
              sx={{
                color: 'text.primary',
                transition: theme.transitions.create('color', {
                  duration: theme.transitions.duration.standard,
                }),
                mb: 1,
              }}
            >
              Student Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Tooltip title="Notifications">
              <IconButton color="primary">
                <Badge badgeContent={notifications} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Refresh dashboard">
              <IconButton 
                onClick={handleRefresh} 
                color="primary"
                sx={{
                  animation: isLoading ? 'spin 1s linear infinite' : 'none',
                  '@keyframes spin': {
                    '0%': {
                      transform: 'rotate(0deg)',
                    },
                    '100%': {
                      transform: 'rotate(360deg)',
                    },
                  },
                }}
              >
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {isLoading && (
          <LinearProgress 
            sx={{ 
              mb: 3, 
              borderRadius: 1,
              height: 6,
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
            }} 
          />
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={3}>
            {/* Quick Stats Section */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Grow in timeout={500}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: theme.shadows[1],
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 1,
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                        }}
                      >
                        <TrendingUpIcon />
                      </Box>
                      <Box>
                        <Typography variant="h6" color="primary">75%</Typography>
                        <Typography variant="body2" color="text.secondary">Overall Progress</Typography>
                      </Box>
                    </Box>
                  </Grow>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Grow in timeout={700}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: theme.shadows[1],
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 1,
                          bgcolor: 'warning.light',
                          color: 'warning.main',
                        }}
                      >
                        <StarsIcon />
                      </Box>
                      <Box>
                        <Typography variant="h6" color="warning.main">12</Typography>
                        <Typography variant="body2" color="text.secondary">Achievements</Typography>
                      </Box>
                    </Box>
                  </Grow>
                </Grid>
              </Grid>
            </Grid>

            {/* Student Info Section */}
            <Grid item xs={12} md={4}>
              <Fade in timeout={800}>
                <div>
                  <StudentInfoCard {...mockData.studentInfo} />
                </div>
              </Fade>
            </Grid>
            
            {/* Progress Section */}
            <Grid item xs={12} md={8}>
              <Fade in timeout={1000}>
                <div>
                  <StudentProgressCard {...mockData.studentInfo} />
                </div>
              </Fade>
            </Grid>

            {/* Course Progress Section */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Active Courses
                <Chip 
                  label="In Progress" 
                  size="small" 
                  color="primary" 
                  sx={{ ml: 1 }} 
                />
              </Typography>
              <Grid container spacing={2}>
                {mockData.courses.map((course, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Fade in timeout={1200 + index * 200}>
                      <div>
                        <StudentDashboardCard {...course} />
                      </div>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Current Challenges */}
            <Grid item xs={12} md={6}>
              <Fade in timeout={1600}>
                <div>
                  <CurrentChallenges />
                </div>
              </Fade>
            </Grid>

            {/* Upcoming Assignments */}
            <Grid item xs={12} md={6}>
              <Fade in timeout={1800}>
                <div>
                  <UpcomingAssignments />
                </div>
              </Fade>
            </Grid>

            {/* Badges Overview */}
            <Grid item xs={12} md={6}>
              <Fade in timeout={2000}>
                <div>
                  <BadgesOverview />
                </div>
              </Fade>
            </Grid>

            {/* Peer Reviews */}
            <Grid item xs={12} md={6}>
              <Fade in timeout={2200}>
                <div>
                  <PeerReviewSection />
                </div>
              </Fade>
            </Grid>

            {/* Submitted Projects */}
            <Grid item xs={12}>
              <Fade in timeout={2400}>
                <div>
                  <SubmittedProjects />
                </div>
              </Fade>
            </Grid>
          </Grid>
        </motion.div>

        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert 
            onClose={() => setShowAlert(false)} 
            severity="success" 
            variant="filled"
            sx={{ width: '100%' }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
} 