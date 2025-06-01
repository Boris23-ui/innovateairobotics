"use client";

import { useUser } from '@clerk/nextjs';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
  Button,
  TextField,
  Divider,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  School,
  Assignment,
  People,
  Grade,
  CalendarToday,
  Book,
  Star,
  EmojiEvents,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Mock data for demonstration
const teacherData = {
  joinDate: '2023-08-01',
  department: 'Computer Science',
  specialization: 'Artificial Intelligence',
  courses: [
    { id: 1, name: 'Introduction to AI', students: 45, rating: 4.8 },
    { id: 2, name: 'Machine Learning', students: 38, rating: 4.9 },
  ],
  statistics: {
    totalStudents: 83,
    averageRating: 4.85,
    coursesTaught: 2,
    assignmentsGraded: 156,
  },
  achievements: [
    { id: 1, title: 'Best Teacher Award', date: '2024-01-15' },
    { id: 2, title: 'Research Excellence', date: '2024-02-20' },
  ],
};

export default function TeacherProfilePage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Teacher Profile
      </Typography>

      <Grid container spacing={4}>
        {/* Profile Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={user.imageUrl}
                  alt={user.firstName || 'User'}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h6">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.emailAddresses[0]?.emailAddress}
                </Typography>
                <Chip
                  label="Teacher"
                  color="primary"
                  sx={{ mt: 1 }}
                />
              </Box>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Department
                  </Typography>
                  <Typography variant="body1">
                    {teacherData.department}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Specialization
                  </Typography>
                  <Typography variant="body1">
                    {teacherData.specialization}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Join Date
                  </Typography>
                  <Typography variant="body1">
                    {teacherData.joinDate}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Teaching Information */}
        <Grid item xs={12} md={8}>
          <Stack spacing={4}>
            {/* Statistics */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Teaching Statistics
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <People sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                      <Typography variant="h4">
                        {teacherData.statistics.totalStudents}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total Students
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Star sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                      <Typography variant="h4">
                        {teacherData.statistics.averageRating}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Average Rating
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Book sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                      <Typography variant="h4">
                        {teacherData.statistics.coursesTaught}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Courses Taught
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Assignment sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
                      <Typography variant="h4">
                        {teacherData.statistics.assignmentsGraded}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Assignments Graded
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Current Courses */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Current Courses
                </Typography>
                <List>
                  {teacherData.courses.map((course) => (
                    <ListItem key={course.id}>
                      <ListItemIcon>
                        <School />
                      </ListItemIcon>
                      <ListItemText
                        primary={course.name}
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <People sx={{ fontSize: 16, mr: 1 }} />
                              <Typography variant="body2">
                                {course.students} Students
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Star sx={{ fontSize: 16, mr: 1, color: 'warning.main' }} />
                              <Typography variant="body2">
                                Rating: {course.rating}/5.0
                              </Typography>
                            </Box>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Achievements
                </Typography>
                <List>
                  {teacherData.achievements.map((achievement) => (
                    <ListItem key={achievement.id}>
                      <ListItemIcon>
                        <EmojiEvents color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={achievement.title}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                            <CalendarToday sx={{ fontSize: 16, mr: 1 }} />
                            <Typography variant="body2">
                              {achievement.date}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
} 