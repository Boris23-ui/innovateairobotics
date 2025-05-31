"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Avatar,
  Stack,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
  Badge,
  ListItemIcon,
  Paper,
} from '@mui/material';
import {
  School,
  Assignment,
  EmojiEvents,
  Book,
  MoreVert as MoreVertIcon,
  Notifications as NotificationsIcon,
  BarChart as BarChartIcon,
  CalendarToday as CalendarIcon,
  Message as MessageIcon,
  Star as StarIcon,
  CheckCircle,
  Schedule,
  PlayCircle,
  Description,
  Quiz,
  Code,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock data for demonstration
const courses = [
  {
    id: 1,
    name: 'Introduction to AI',
    instructor: 'Dr. Sarah Johnson',
    progress: 75,
    nextClass: '2024-03-20 10:00 AM',
    assignments: 2,
  },
  {
    id: 2,
    name: 'Web Development',
    instructor: 'Prof. Michael Chen',
    progress: 45,
    nextClass: '2024-03-21 02:00 PM',
    assignments: 1,
  },
];

const assignments = [
  {
    id: 1,
    title: 'AI Project Submission',
    course: 'Introduction to AI',
    dueDate: '2024-03-25',
    status: 'pending',
  },
  {
    id: 2,
    title: 'Web Development Quiz',
    course: 'Web Development',
    dueDate: '2024-03-22',
    status: 'pending',
  },
];

const achievements = [
  {
    id: 1,
    title: 'First Assignment Completed',
    description: 'Successfully completed your first assignment',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'Perfect Quiz Score',
    description: 'Achieved 100% on a quiz',
    date: '2024-03-18',
  },
];

export default function StudentDashboard() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome back, {user?.firstName || 'Student'}!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here's an overview of your learning progress and upcoming activities.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <IconButton>
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Avatar
                src={user?.imageUrl}
                alt={user?.firstName}
                sx={{ width: 40, height: 40 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <School />
                </Avatar>
                <Box>
                  <Typography variant="h6">{courses.length}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active Courses
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: 'warning.main' }}>
                  <Assignment />
                </Avatar>
                <Box>
                  <Typography variant="h6">{assignments.length}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pending Assignments
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <EmojiEvents />
                </Avatar>
                <Box>
                  <Typography variant="h6">{achievements.length}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Achievements
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: 'info.main' }}>
                  <Book />
                </Avatar>
                <Box>
                  <Typography variant="h6">12</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Learning Resources
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Left Column - Courses and Assignments */}
        <Grid xs={12} md={8}>
          {/* Active Courses */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Active Courses
              </Typography>
              <List>
                {courses.map((course) => (
                  <ListItem
                    key={course.id}
                    secondaryAction={
                      <Stack direction="row" spacing={1}>
                        <Chip
                          size="small"
                          icon={<CalendarIcon />}
                          label={course.nextClass}
                        />
                        <IconButton
                          edge="end"
                          aria-label="more"
                          onClick={handleMenuClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </Stack>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        <School />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={course.name}
                      secondary={`Instructor: ${course.instructor}`}
                    />
                    <Box sx={{ width: 100, mr: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={course.progress}
                        sx={{ mb: 0.5 }}
                      />
                      <Typography variant="body2" color="text.secondary" align="right">
                        {course.progress}%
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<PlayCircle />}
                onClick={() => router.push('/dashboard/student/courses')}
              >
                View All Courses
              </Button>
            </CardActions>
          </Card>

          {/* Upcoming Assignments */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Assignments
              </Typography>
              <List>
                {assignments.map((assignment) => (
                  <ListItem
                    key={assignment.id}
                    secondaryAction={
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => router.push(`/dashboard/student/assignments/${assignment.id}`)}
                      >
                        View
                      </Button>
                    }
                  >
                    <ListItemIcon>
                      <Assignment />
                    </ListItemIcon>
                    <ListItemText
                      primary={assignment.title}
                      secondary={
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography variant="body2" color="text.secondary">
                            {assignment.course}
                          </Typography>
                          <Chip
                            size="small"
                            icon={<CalendarIcon />}
                            label={`Due: ${assignment.dueDate}`}
                            color="warning"
                          />
                        </Stack>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<Assignment />}
                onClick={() => router.push('/dashboard/student/assignments')}
              >
                View All Assignments
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Right Column - Achievements and Resources */}
        <Grid xs={12} md={4}>
          {/* Recent Achievements */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Achievements
              </Typography>
              <List>
                {achievements.map((achievement) => (
                  <ListItem key={achievement.id}>
                    <ListItemIcon>
                      <EmojiEvents color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={achievement.title}
                      secondary={
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography variant="body2" color="text.secondary">
                            {achievement.description}
                          </Typography>
                          <Chip
                            size="small"
                            label={achievement.date}
                            variant="outlined"
                          />
                        </Stack>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<EmojiEvents />}
                onClick={() => router.push('/dashboard/student/achievements')}
              >
                View All Achievements
              </Button>
            </CardActions>
          </Card>

          {/* Learning Resources */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Learning Resources
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Book />
                  </ListItemIcon>
                  <ListItemText
                    primary="Course Materials"
                    secondary="Access all your course materials and resources"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText
                    primary="Code Examples"
                    secondary="Browse through code examples and tutorials"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MessageIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Discussion Forum"
                    secondary="Join discussions with instructors and peers"
                  />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<Book />}
                onClick={() => router.push('/dashboard/student/resources')}
              >
                Explore Resources
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
} 