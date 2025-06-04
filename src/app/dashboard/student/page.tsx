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
  useTheme,
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
import StudentInfoCard from '@/components/student/StudentInfoCard';
import StudentProgressCard from '@/components/student/StudentProgressCard';
import StudentDashboardCard from '@/components/student/StudentDashboardCard';
import BadgesOverview from '@/components/student/BadgesOverview';
import CurrentChallenges from '@/components/student/CurrentChallenges';
import UpcomingAssignments from '@/components/student/UpcomingAssignments';
import PeerReviewSection from '@/components/student/PeerReviewSection';
import SubmittedProjects from '@/components/student/SubmittedProjects';

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
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

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
    <Container maxWidth="lg">
      <Box sx={{ 
        my: 4,
        transition: theme.transitions.create(['background-color', 'color'], {
          duration: theme.transitions.duration.standard,
        }),
      }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{
            color: 'text.primary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          Student Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          {/* Student Info Section */}
          <Grid item xs={12} md={4}>
            <StudentInfoCard {...mockData.studentInfo} />
          </Grid>
          
          {/* Progress Section */}
          <Grid item xs={12} md={8}>
            <StudentProgressCard {...mockData.studentInfo} />
          </Grid>

          {/* Course Progress Section */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {mockData.courses.map((course, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <StudentDashboardCard {...course} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Challenges and Assignments Section */}
          <Grid item xs={12} md={6}>
            <CurrentChallenges />
          </Grid>
          <Grid item xs={12} md={6}>
            <UpcomingAssignments assignments={mockData.assignments} />
          </Grid>

          {/* Badges and Reviews Section */}
          <Grid item xs={12} md={6}>
            <BadgesOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <PeerReviewSection />
          </Grid>

          {/* Submitted Projects Section */}
          <Grid item xs={12}>
            <SubmittedProjects projects={mockData.projects} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 