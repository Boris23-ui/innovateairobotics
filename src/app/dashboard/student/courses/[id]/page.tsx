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
  Tabs,
  Tab,
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`course-tabpanel-${index}`}
      aria-labelledby={`course-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// Mock data for demonstration
const courseData = {
  id: 1,
  name: 'Introduction to AI',
  description: 'Learn the fundamentals of Artificial Intelligence and Machine Learning.',
  instructor: 'Dr. Sarah Johnson',
  progress: 75,
  nextClass: '2024-03-20 10:00 AM',
  modules: [
    {
      id: 1,
      title: 'Introduction to AI Concepts',
      description: 'Understanding the basics of AI and its applications',
      lessons: [
        { id: 1, title: 'What is AI?', duration: '45 min', type: 'video', completed: true },
        { id: 2, title: 'History of AI', duration: '30 min', type: 'reading', completed: true },
        { id: 3, title: 'AI Applications', duration: '60 min', type: 'quiz', completed: false },
      ],
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      description: 'Core concepts of machine learning algorithms',
      lessons: [
        { id: 4, title: 'Supervised Learning', duration: '60 min', type: 'video', completed: false },
        { id: 5, title: 'Unsupervised Learning', duration: '45 min', type: 'reading', completed: false },
        { id: 6, title: 'ML Algorithms', duration: '90 min', type: 'coding', completed: false },
      ],
    },
  ],
  assignments: [
    { id: 1, title: 'AI Project Submission', dueDate: '2024-03-25', status: 'pending', type: 'project' },
    { id: 2, title: 'ML Quiz', dueDate: '2024-03-28', status: 'pending', type: 'quiz' },
    { id: 3, title: 'Coding Assignment', dueDate: '2024-03-30', status: 'pending', type: 'coding' },
  ],
  resources: [
    { id: 1, title: 'Course Textbook', type: 'pdf', url: '#' },
    { id: 2, title: 'Additional Readings', type: 'link', url: '#' },
    { id: 3, title: 'Code Examples', type: 'github', url: '#' },
  ],
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
      {/* Course Header */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {courseData.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {courseData.description}
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Chip
                icon={<School />}
                label={`Instructor: ${courseData.instructor}`}
                variant="outlined"
              />
              <Chip
                icon={<CalendarIcon />}
                label={`Next Class: ${courseData.nextClass}`}
                variant="outlined"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Course Progress
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={courseData.progress} />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">
                      {courseData.progress}%
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<PlayCircle />}
                  onClick={() => {/* Handle continue learning */}}
                >
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Course Content Tabs */}
      <Paper sx={{ width: '100%', mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Modules" />
          <Tab label="Assignments" />
          <Tab label="Resources" />
          <Tab label="Discussion" />
        </Tabs>

        {/* Modules Tab */}
        <TabPanel value={tabValue} index={0}>
          <List>
            {courseData.modules.map((module) => (
              <Card key={module.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {module.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {module.description}
                  </Typography>
                  <List>
                    {module.lessons.map((lesson) => (
                      <ListItem
                        key={lesson.id}
                        secondaryAction={
                          <Chip
                            size="small"
                            label={lesson.duration}
                            variant="outlined"
                          />
                        }
                      >
                        <ListItemIcon>
                          {lesson.type === 'video' && <PlayCircle />}
                          {lesson.type === 'reading' && <Description />}
                          {lesson.type === 'quiz' && <Quiz />}
                          {lesson.type === 'coding' && <Code />}
                        </ListItemIcon>
                        <ListItemText
                          primary={lesson.title}
                          secondary={lesson.type}
                        />
                        {lesson.completed && (
                          <CheckCircle color="success" sx={{ ml: 1 }} />
                        )}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))}
          </List>
        </TabPanel>

        {/* Assignments Tab */}
        <TabPanel value={tabValue} index={1}>
          <List>
            {courseData.assignments.map((assignment) => (
              <Card key={assignment.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={8}>
                      <Typography variant="h6">
                        {assignment.title}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <Chip
                          size="small"
                          icon={<CalendarIcon />}
                          label={`Due: ${assignment.dueDate}`}
                        />
                        <Chip
                          size="small"
                          label={assignment.type}
                          color="primary"
                          variant="outlined"
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Button
                        variant="contained"
                        fullWidth
                        color={assignment.status === 'pending' ? 'primary' : 'success'}
                      >
                        {assignment.status === 'pending' ? 'Start Assignment' : 'View Submission'}
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </List>
        </TabPanel>

        {/* Resources Tab */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={2}>
            {courseData.resources.map((resource) => (
              <Grid item xs={12} md={4} key={resource.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {resource.title}
                    </Typography>
                    <Chip
                      size="small"
                      label={resource.type}
                      color="primary"
                      variant="outlined"
                    />
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Access Resource
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Discussion Tab */}
        <TabPanel value={tabValue} index={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Course Discussion
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Join the discussion forum to interact with your instructor and fellow students.
              </Typography>
              <Button
                variant="contained"
                startIcon={<MessageIcon />}
                sx={{ mt: 2 }}
              >
                Open Discussion Forum
              </Button>
            </CardContent>
          </Card>
        </TabPanel>
      </Paper>
    </Container>
  );
} 