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

// Mock data for demonstration
const assignmentData = {
  id: 1,
  title: 'AI Project Submission',
  course: 'Introduction to AI',
  courseId: 1,
  description: `Create a machine learning model that can classify images into different categories. 
  The project should demonstrate your understanding of supervised learning concepts and image processing techniques.
  
  Requirements:
  1. Use a dataset of at least 1000 images
  2. Implement at least 2 different classification algorithms
  3. Compare the performance of the algorithms
  4. Write a detailed report explaining your approach and results`,
  dueDate: '2024-03-25',
  status: 'pending',
  type: 'project',
  grade: null,
  feedback: null,
  attachments: [
    { id: 1, name: 'Project Guidelines.pdf', type: 'pdf', url: '#' },
    { id: 2, name: 'Sample Dataset.zip', type: 'zip', url: '#' },
  ],
  rubric: [
    { category: 'Code Quality', weight: 30, criteria: 'Clean, well-documented code with proper error handling' },
    { category: 'Model Performance', weight: 40, criteria: 'Accuracy and efficiency of the implemented models' },
    { category: 'Report Quality', weight: 30, criteria: 'Clear explanation of approach and results' },
  ],
};

export default function AssignmentDetailPage({ params }: { params: { id: string } }) {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [submission, setSubmission] = useState('');
  const [files, setFiles] = useState<File[]>([]);
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
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Assignment Status
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Status
                    </Typography>
                    <Typography variant="body1">
                      {assignmentData.status === 'pending' ? 'Not Submitted' : 'Submitted'}
                    </Typography>
                  </Box>
                  {assignmentData.grade && (
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Grade
                      </Typography>
                      <Typography variant="body1">
                        {assignmentData.grade}%
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

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

          {/* Rubric */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Grading Rubric
              </Typography>
              <List>
                {assignmentData.rubric.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle1">{item.category}</Typography>
                          <Typography variant="subtitle1">{item.weight}%</Typography>
                        </Box>
                      }
                      secondary={item.criteria}
                    />
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
                {assignmentData.attachments.map((file) => (
                  <ListItem
                    key={file.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="download">
                        <Download />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <Description />
                    </ListItemIcon>
                    <ListItemText
                      primary={file.name}
                      secondary={file.type.toUpperCase()}
                    />
                  </ListItem>
                ))}
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