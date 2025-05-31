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
  EmojiEvents,
  Grade,
  CalendarToday,
  Book,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Mock data for demonstration
const studentData = {
  enrollmentDate: '2024-01-15',
  currentSemester: 'Spring 2024',
  gpa: 3.8,
  courses: [
    { id: 1, name: 'Introduction to AI', progress: 75, grade: 'A-' },
    { id: 2, name: 'Web Development', progress: 45, grade: 'B+' },
  ],
  achievements: [
    { id: 1, title: 'Perfect Attendance', date: '2024-02-15' },
    { id: 2, title: 'Top Performer', date: '2024-03-01' },
  ],
};

export default function StudentProfilePage() {
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
        Student Profile
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
                  label="Student"
                  color="primary"
                  sx={{ mt: 1 }}
                />
              </Box>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Enrollment Date
                  </Typography>
                  <Typography variant="body1">
                    {studentData.enrollmentDate}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Current Semester
                  </Typography>
                  <Typography variant="body1">
                    {studentData.currentSemester}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    GPA
                  </Typography>
                  <Typography variant="body1">
                    {studentData.gpa}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Academic Information */}
        <Grid item xs={12} md={8}>
          <Stack spacing={4}>
            {/* Current Courses */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Current Courses
                </Typography>
                <List>
                  {studentData.courses.map((course) => (
                    <ListItem key={course.id}>
                      <ListItemIcon>
                        <School />
                      </ListItemIcon>
                      <ListItemText
                        primary={course.name}
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                                Progress:
                              </Typography>
                              <LinearProgress
                                variant="determinate"
                                value={course.progress}
                                sx={{ flexGrow: 1, mr: 1 }}
                              />
                              <Typography variant="body2">
                                {course.progress}%
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Grade sx={{ fontSize: 16, mr: 1 }} />
                              <Typography variant="body2">
                                Current Grade: {course.grade}
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
                  {studentData.achievements.map((achievement) => (
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