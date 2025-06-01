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
  TextField,
  Alert,
  AlertTitle,
  Breadcrumbs,
  Link,
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
  NavigateNext,
  Upload,
  Download,
  Comment,
  Grade,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AssignmentDetailPage({ params }: { params: { id: string } }) {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [submission, setSubmission] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Mock data for assignment
  const assignmentData = {
    id: params.id,
    title: 'Robot Navigation Project',
    course: 'Introduction to Robotics',
    courseId: 'course-1',
    type: 'Project',
    status: 'pending',
    dueDate: '2024-03-15',
    description: 'Create a robot that can navigate through a maze using sensors and basic programming concepts.',
    requirements: [
      'Use at least 2 different types of sensors',
      'Implement basic collision avoidance',
      'Document your code and design process',
      'Create a video demonstration'
    ],
    points: 100,
    submitted: false,
    grade: null,
    feedback: null
  };

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleSubmit = () => {
    // Handle submission logic
    console.log('Submitting assignment:', { submission, files });
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 3 }}>
        <Link
          color="inherit"
          href="/dashboard/student"
          onClick={(e) => {
            e.preventDefault();
            router.push('/dashboard/student');
          }}
        >
          Dashboard
        </Link>
        <Link
          color="inherit"
          href={`/dashboard/student/courses/${assignmentData.courseId}`}
          onClick={(e) => {
            e.preventDefault();
            router.push(`/dashboard/student/courses/${assignmentData.courseId}`);
          }}
        >
          {assignmentData.course}
        </Link>
        <Typography color="text.primary">{assignmentData.title}</Typography>
      </Breadcrumbs>

      {/* Assignment Header */}
      <Grid container spacing={3}>
        <Grid item component="div" xs={12} md={8}>
          <Typography variant="h4" component="h1" gutterBottom>
            {assignmentData.title}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Chip
              icon={<School />}
              label={assignmentData.course}
              variant="outlined"
            />
            <Chip
              icon={<CalendarIcon />}
              label={`Due: ${assignmentData.dueDate}`}
              color={assignmentData.status === 'pending' ? 'warning' : 'success'}
              variant="outlined"
            />
            <Chip
              icon={<Assignment />}
              label={assignmentData.type}
              variant="outlined"
            />
          </Stack>
        </Grid>
        <Grid item component="div" xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Assignment Details
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Points
                  </Typography>
                  <Typography variant="h6">
                    {assignmentData.points} points
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Status
                  </Typography>
                  <Chip
                    label={assignmentData.status}
                    color={assignmentData.status === 'pending' ? 'warning' : 'success'}
                    size="small"
                  />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Assignment Content */}
      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Assignment Description
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {assignmentData.description}
              </Typography>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Assignment Requirements
              </Typography>
              <List>
                {assignmentData.requirements.map((requirement, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={requirement} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Submission Form */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Your Submission
              </Typography>
              <Stack spacing={3}>
                <TextField
                  label="Comments"
                  multiline
                  rows={4}
                  value={submission}
                  onChange={(e) => setSubmission(e.target.value)}
                  placeholder="Add any comments or notes about your submission..."
                />
                <Box>
                  <input
                    accept=".pdf,.doc,.docx,.zip,.py,.ipynb"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="raised-button-file">
                    <Button
                      variant="outlined"
                      component="span"
                      startIcon={<Upload />}
                    >
                      Upload Files
                    </Button>
                  </label>
                  {files.length > 0 && (
                    <List>
                      {files.map((file, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <Description />
                          </ListItemIcon>
                          <ListItemText
                            primary={file.name}
                            secondary={`${(file.size / 1024 / 1024).toFixed(2)} MB`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={files.length === 0}
                >
                  Submit Assignment
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Attachments */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Assignment Files
              </Typography>
              <List>
                {/* Add assignment files here */}
              </List>
            </CardContent>
          </Card>

          {/* Feedback */}
          {assignmentData.feedback && (
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Instructor Feedback
                </Typography>
                <Alert severity="info" sx={{ mb: 2 }}>
                  <AlertTitle>Grade: {assignmentData.grade}%</AlertTitle>
                  {assignmentData.feedback}
                </Alert>
                <Button
                  variant="outlined"
                  startIcon={<Comment />}
                  fullWidth
                >
                  Ask for Clarification
                </Button>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Container>
  );
} 