'use client';

import { useAuth, useUser } from '@clerk/nextjs';
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
import CreateCourseDialog from './components/CreateCourseDialog';
import { toast } from 'react-hot-toast';

interface CourseData {
  id: string;
  name: string;
  description: string;
  category: string;
  level: string;
  maxStudents: number;
  startDate: string;
  endDate: string;
  tags: string[];
  students: any[];
  schedule: string;
  location: string;
}

const recentActivities = [
  { id: '1', type: 'success', student: 'Emma Johnson', action: 'Completed Robot Building Project', course: 'Robot Explorers Club', time: '2 hours ago' },
  { id: '2', type: 'info', student: 'Michael Chen', action: 'Submitted AI Ethics Assignment', course: 'AI Avengers Workshop', time: '3 hours ago' },
  { id: '3', type: 'warning', student: 'Sarah Williams', action: 'Needs Help with Sensor Integration', course: 'Tech Titans Challenge', time: '5 hours ago' },
  { id: '4', type: 'success', student: 'David Kim', action: 'Achieved Perfect Score in Coding Challenge', course: 'Senior Innovators Program', time: '1 day ago' },
];

const notifications = [
  { id: 1, title: 'New Assignment Submission', message: 'John Doe submitted the Robot Navigation Project', time: '2 hours ago' },
  { id: 2, title: 'Course Update', message: 'New resources added to Advanced Programming', time: '1 day ago' },
  { id: 3, title: 'Student Question', message: 'Mike Johnson asked a question in Robot Design', time: '2 days ago' },
];

export default function TeacherDashboard() {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [notificationAnchor, setNotificationAnchor] = useState<null | HTMLElement>(null);
  const [isCreateCourseOpen, setIsCreateCourseOpen] = useState(false);
  const [courses, setCourses] = useState<CourseData[]>([
    {
      id: '1',
      name: 'Tiny Tinkerers Robotics',
      description: 'An engaging introduction to robotics for young learners aged 5 and under. Through play-based activities, children explore basic robot movements, sounds, and simple cause-and-effect relationships.',
      category: 'Early Learning',
      level: 'Beginner',
      maxStudents: 12,
      startDate: '2024-03-01',
      endDate: '2024-06-30',
      tags: ['robotics', 'early-learning', 'play-based'],
      students: Array(8).fill({ id: 'student', name: 'Student' }),
      schedule: 'Mon & Wed, 10:00 AM - 11:00 AM',
      location: 'Room 101'
    },
    {
      id: '2',
      name: 'Robot Explorers Club',
      description: 'Designed for 6-9 year olds, this course introduces basic programming concepts through visual coding and hands-on robot building. Students learn about sensors, motors, and simple automation.',
      category: 'Elementary',
      level: 'Intermediate',
      maxStudents: 15,
      startDate: '2024-03-15',
      endDate: '2024-07-15',
      tags: ['programming', 'robotics', 'sensors'],
      students: Array(12).fill({ id: 'student', name: 'Student' }),
      schedule: 'Tue & Thu, 3:00 PM - 4:30 PM',
      location: 'Lab 203'
    },
    {
      id: '3',
      name: 'Tech Titans Challenge',
      description: 'Advanced robotics and coding for 10-12 year olds. Students tackle complex projects involving autonomous navigation, sensor integration, and problem-solving challenges.',
      category: 'Middle School',
      level: 'Advanced',
      maxStudents: 12,
      startDate: '2024-04-01',
      endDate: '2024-07-31',
      tags: ['advanced', 'coding', 'challenges'],
      students: Array(10).fill({ id: 'student', name: 'Student' }),
      schedule: 'Wed & Fri, 4:00 PM - 5:30 PM',
      location: 'Lab 305'
    },
    {
      id: '4',
      name: 'AI Avengers Workshop',
      description: 'For teens aged 13-17, this course explores the intersection of AI and robotics. Students learn about machine learning, computer vision, and ethical AI development.',
      category: 'High School',
      level: 'Expert',
      maxStudents: 15,
      startDate: '2024-04-15',
      endDate: '2024-08-15',
      tags: ['AI', 'machine-learning', 'ethics'],
      students: Array(14).fill({ id: 'student', name: 'Student' }),
      schedule: 'Sat, 10:00 AM - 1:00 PM',
      location: 'AI Lab'
    },
    {
      id: '5',
      name: 'Senior Innovators Program',
      description: 'A comprehensive program for adults interested in AI and robotics. Covers professional applications, industry trends, and hands-on project development.',
      category: 'Adult Learning',
      level: 'Professional',
      maxStudents: 20,
      startDate: '2024-05-01',
      endDate: '2024-08-31',
      tags: ['professional', 'industry', 'projects'],
      students: Array(16).fill({ id: 'student', name: 'Student' }),
      schedule: 'Mon & Thu, 6:00 PM - 8:00 PM',
      location: 'Conference Room'
    }
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push('/sign-in');
    }
  }, [isLoaded, userId, router]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if (!response.ok) throw new Error('Failed to fetch courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        toast.error('Failed to load courses');
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchCourses();
    }
  }, [userId]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, courseId: string) => {
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

  const handleCreateCourse = async (courseData: any) => {
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) throw new Error('Failed to create course');
      
      const newCourse = await response.json();
      setCourses([...courses, newCourse]);
      toast.success('Course created successfully');
    } catch (error) {
      console.error('Error creating course:', error);
      toast.error('Failed to create course');
    }
  };

  if (!isLoaded || isLoading) {
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

      {/* Stats Section */}
      <Box sx={{ mb: 4 }}>
        <Grid
          container
          spacing={3}
          wrap={{ xs: 'nowrap', md: 'wrap' } as any}
          sx={{
            overflowX: { xs: 'auto', md: 'visible' },
            pb: { xs: 2, md: 0 },
            mx: { xs: -2, md: 0 },
          }}
        >
          <Box sx={{ minWidth: { xs: 260, md: 'auto' } }}>
            <Card elevation={4} sx={{
              borderRadius: 3,
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }
            }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'white', color: '#1976d2', width: 56, height: 56 }}>
                    <School fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'white', opacity: 0.85 }}>
                      Active Courses
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'white' }}>{courses.length}</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ minWidth: { xs: 260, md: 'auto' } }}>
            <Card elevation={4} sx={{
              borderRadius: 3,
              background: 'linear-gradient(135deg, #388e3c 0%, #66bb6a 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }
            }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'white', color: '#388e3c', width: 56, height: 56 }}>
                    <People fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'white', opacity: 0.85 }}>
                      Total Students
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'white' }}>
                      {courses.reduce((acc, course) => acc + (course.students?.length || 0), 0)}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ minWidth: { xs: 260, md: 'auto' } }}>
            <Card elevation={4} sx={{
              borderRadius: 3,
              background: 'linear-gradient(135deg, #fbc02d 0%, #ffd54f 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }
            }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'white', color: '#fbc02d', width: 56, height: 56 }}>
                    <Assignment fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'white', opacity: 0.85 }}>
                      Pending Reviews
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'white' }}>12</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ minWidth: { xs: 260, md: 'auto' } }}>
            <Card elevation={4} sx={{
              borderRadius: 3,
              background: 'linear-gradient(135deg, #7b1fa2 0%, #ba68c8 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }
            }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'white', color: '#7b1fa2', width: 56, height: 56 }}>
                    <Book fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'white', opacity: 0.85 }}>
                      Resources
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'white' }}>24</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Box>

      {/* Main Content Sections: Courses and Recent Activity */}
      <Grid container spacing={3} sx={{ mt: 0 }}>
        <Box sx={{ width: { xs: '100%', md: '58.333333%' }, pr: { md: 2 }, mb: { xs: 3, md: 0 } }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Your Courses</Typography>
                <Button 
                  startIcon={<AddIcon />} 
                  variant="contained"
                  onClick={() => setIsCreateCourseOpen(true)}
                >
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
                              label={`${course.students?.length || 0} students`}
                            />
                            <Chip
                              size="small"
                              icon={<BarChartIcon />}
                              label={`${course.level}`}
                            />
                            <Chip
                              size="small"
                              icon={<Assignment />}
                              label={`${course.category}`}
                            />
                          </Stack>
                          <Typography variant="body2" color="text.secondary">
                            {course.description}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '41.666667%' }, pl: { md: 2 } }}>
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
        </Box>
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

      <CreateCourseDialog
        open={isCreateCourseOpen}
        onClose={() => setIsCreateCourseOpen(false)}
        onSubmit={handleCreateCourse}
      />
    </Container>
  );
} 