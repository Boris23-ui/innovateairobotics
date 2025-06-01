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

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz' | 'coding';
  completed: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

interface CourseData {
  id: string;
  name: string;
  description: string;
  instructor: string;
  nextClass: string;
  schedule: string;
  location: string;
  progress: number;
  modules: Module[];
  assignments: {
    id: string;
    title: string;
    dueDate: string;
    status: string;
    type: string;
  }[];
  resources: {
    id: string;
    title: string;
    type: string;
    url: string;
  }[];
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Mock data for course
  const courseData: CourseData = {
    id: params.id,
    name: 'Introduction to Robotics',
    description: 'Learn the fundamentals of robotics, including basic mechanics, electronics, and programming concepts.',
    instructor: 'Dr. Sarah Chen',
    nextClass: 'Mon, Mar 15, 2024 - 2:00 PM',
    schedule: 'Mon & Wed, 2:00 PM - 3:30 PM',
    location: 'Lab 101',
    progress: 65,
    modules: [
      {
        id: '1',
        title: 'Introduction to Robotics',
        description: 'Understanding the basics of robotics and its applications',
        lessons: [
          { id: '1', title: 'What is Robotics?', duration: '45 min', type: 'video', completed: true },
          { id: '2', title: 'History of Robotics', duration: '30 min', type: 'reading', completed: true },
          { id: '3', title: 'Basic Components', duration: '60 min', type: 'quiz', completed: false },
        ],
      },
      {
        id: '2',
        title: 'Robot Mechanics',
        description: 'Learn about the mechanical components and their functions',
        lessons: [
          { id: '4', title: 'Motors and Actuators', duration: '60 min', type: 'video', completed: false },
          { id: '5', title: 'Sensors and Feedback', duration: '45 min', type: 'reading', completed: false },
          { id: '6', title: 'Mechanical Design', duration: '90 min', type: 'coding', completed: false },
        ],
      },
    ],
    assignments: [
      {
        id: '1',
        title: 'Robot Navigation Project',
        dueDate: '2024-03-15',
        status: 'pending',
        type: 'Project'
      },
      {
        id: '2',
        title: 'Sensor Integration Lab',
        dueDate: '2024-03-20',
        status: 'completed',
        type: 'Lab'
      }
    ],
    resources: [
      {
        id: '1',
        title: 'Course Syllabus',
        type: 'PDF',
        url: '#'
      },
      {
        id: '2',
        title: 'Week 1 Lecture Notes',
        type: 'PDF',
        url: '#'
      }
    ]
  };

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
          <Grid xs={12} md={8}>
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
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Course Progress
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h4" color="primary">
                      {courseData.progress}%
                    </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={courseData.progress}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                <Stack spacing={1}>
                  <Typography variant="body2" color="text.secondary">
                    Schedule: {courseData.schedule}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {courseData.location}
                  </Typography>
                </Stack>
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
            {courseData.modules.map((module: Module) => (
              <Card key={module.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {module.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {module.description}
                  </Typography>
                  <List>
                    {module.lessons.map((lesson: Lesson) => (
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
                    <Grid xs={12} md={8}>
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
                    <Grid xs={12} md={4}>
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
              <Grid xs={12} md={4} key={resource.id}>
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