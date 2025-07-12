import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Assignment, Schedule, Grade, CheckCircle, Pending } from '@mui/icons-material';

const mockAssignments = [
  {
    id: 1,
    title: 'Robot Navigation Project',
    course: 'Introduction to Robotics',
    dueDate: '2024-04-15',
    status: 'pending',
    grade: null,
    description: 'Build a robot that can navigate through a maze'
  },
  {
    id: 2,
    title: 'Sensor Integration',
    course: 'Advanced Programming',
    dueDate: '2024-04-20',
    status: 'submitted',
    grade: '95%',
    description: 'Integrate various sensors into your robot'
  },
  {
    id: 3,
    title: 'AI Algorithm Implementation',
    course: 'AI and Machine Learning',
    dueDate: '2024-04-25',
    status: 'graded',
    grade: '88%',
    description: 'Implement a machine learning algorithm'
  }
];

export default async function AssignmentsDashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'graded':
        return <CheckCircle color="success" />;
      case 'submitted':
        return <Pending color="warning" />;
      default:
        return <Schedule color="info" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'graded':
        return 'success';
      case 'submitted':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Assignments Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  My Assignments
                </Typography>
                <List>
                  {mockAssignments.map((assignment) => (
                    <ListItem key={assignment.id} divider>
                      <ListItemIcon>
                        {getStatusIcon(assignment.status)}
                      </ListItemIcon>
                      <ListItemText
                        primary={assignment.title}
                        secondary={
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              {assignment.course} • Due: {assignment.dueDate}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              {assignment.description}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                              <Chip 
                                label={assignment.status} 
                                color={getStatusColor(assignment.status) as any}
                                size="small"
                              />
                              {assignment.grade && (
                                <Chip 
                                  icon={<Grade />}
                                  label={assignment.grade} 
                                  color="primary"
                                  size="small"
                                />
                              )}
                            </Box>
                          </Box>
                        }
                      />
                      <Button variant="outlined" size="small">
                        {assignment.status === 'pending' ? 'Submit' : 'View'}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Assignment Stats
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Total Assignments</Typography>
                    <Typography variant="h6">12</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Completed</Typography>
                    <Typography variant="h6" color="success.main">8</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Pending</Typography>
                    <Typography variant="h6" color="warning.main">3</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Overdue</Typography>
                    <Typography variant="h6" color="error.main">1</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 