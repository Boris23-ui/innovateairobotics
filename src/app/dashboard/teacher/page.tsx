'use client';

import { useAuth } from '@clerk/nextjs';
import {
  Container,
  Typography,
  Box,
  Paper,
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
  CircularProgress,
} from '@mui/material';
import {
  School,
  Assignment,
  People,
  Book,
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  Notifications as NotificationsIcon,
  BarChart as BarChartIcon,
  CalendarToday as CalendarIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock data for demonstration
const courses = [
  { id: 1, name: 'Introduction to Robotics', students: 24, progress: 75, attendance: 92, avgGrade: 85 },
  { id: 2, name: 'Advanced Programming', students: 18, progress: 60, attendance: 88, avgGrade: 82 },
  { id: 3, name: 'Robot Design', students: 15, progress: 45, attendance: 95, avgGrade: 88 },
];

const recentActivities = [
  { id: 1, student: 'John Doe', action: 'Completed Assignment', course: 'Introduction to Robotics', time: '2 hours ago', type: 'success' },
  { id: 2, student: 'Jane Smith', action: 'Submitted Project', course: 'Advanced Programming', time: '3 hours ago', type: 'info' },
  { id: 3, student: 'Mike Johnson', action: 'Asked Question', course: 'Robot Design', time: '5 hours ago', type: 'warning' },
];

const notifications = [
  { id: 1, title: 'New Assignment Submission', message: 'John Doe submitted the Robot Navigation Project', time: '2 hours ago' },
  { id: 2, title: 'Course Update', message: 'New resources added to Advanced Programming', time: '1 day ago' },
  { id: 3, title: 'Student Question', message: 'Mike Johnson asked a question in Robot Design', time: '2 days ago' },
];

export default function TeacherDashboard() {
  const { isLoaded, userId, user } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [notificationAnchor, setNotificationAnchor] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (isLoaded && !userId) {
      console.log('No user found, redirecting to sign-in...');
      router.push('/sign-in');
    }
  }, [isLoaded, userId, router]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, courseId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedCourse(courseId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCourse(null);
  };

  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  if (!isLoaded) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!userId) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>
            {user?.firstName?.charAt(0) || 'T'}
          </Avatar>
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome back, {user?.firstName}!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here's what's happening with your courses today.
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Tooltip title="Notifications">
            <IconButton onClick={handleNotificationClick}>
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={notificationAnchor}
            open={Boolean(notificationAnchor)}
            onClose={handleNotificationClose}
            PaperProps={{
              sx: { width: 320, maxHeight: 400 },
            }}
          >
            {notifications.map((notification) => (
              <MenuItem key={notification.id} onClick={handleNotificationClose}>
                <ListItemText
                  primary={notification.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {notification.message}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {notification.time}
                      </Typography>
                    </>
                  }
                />
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Box>

      <Grid container spacing={3}>
        {/* Quick Stats */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: 'primary.light' }}>
                  <School />
                </Avatar>
                <Box>
                  <Typography variant="h6">Active Courses</Typography>
                  <Typography variant="h4">{courses.length}</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: 'success.light' }}>
                  <People />
                </Avatar>
                <Box>
                  <Typography variant="h6">Total Students</Typography>
                  <Typography variant="h4">
                    {courses.reduce((acc, course) => acc + course.students, 0)}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: 'warning.light' }}>
                  <Assignment />
                </Avatar>
                <Box>
                  <Typography variant="h6">Pending Reviews</Typography>
                  <Typography variant="h4">12</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: 'info.light' }}>
                  <Book />
                </Avatar>
                <Box>
                  <Typography variant="h6">Resources</Typography>
                  <Typography variant="h4">24</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Course List */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Your Courses</Typography>
                <Button startIcon={<AddIcon />} variant="contained">
                  New Course
                </Button>
              </Box>
              <List>
                {courses.map((course) => (
                  <ListItem
                    key={course.id}
                    secondaryAction={
                      <IconButton edge="end" onClick={(e) => handleMenuClick(e, course.id)}>
                        <MoreVertIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.light' }}>
                        <School />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={course.name}
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                            <Chip
                              size="small"
                              icon={<People />}
                              label={`${course.students} students`}
                            />
                            <Chip
                              size="small"
                              icon={<BarChartIcon />}
                              label={`${course.attendance}% attendance`}
                            />
                            <Chip
                              size="small"
                              icon={<Assignment />}
                              label={`${course.avgGrade}% avg grade`}
                            />
                          </Stack>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                              <LinearProgress variant="determinate" value={course.progress} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                              <Typography variant="body2" color="text.secondary">
                                {course.progress}%
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <List>
                {recentActivities.map((activity) => (
                  <ListItem key={activity.id} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: `${activity.type}.light` }}>
                        {activity.type === 'success' ? <Assignment /> :
                         activity.type === 'info' ? <MessageIcon /> :
                         <BarChartIcon />}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle2">
                          {activity.student} - {activity.action}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary">
                            {activity.course}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {activity.time}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View All Activity
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <BarChartIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>View Analytics</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <CalendarIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Schedule Class</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <MessageIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Send Announcement</ListItemText>
        </MenuItem>
      </Menu>
    </Container>
  );
} 