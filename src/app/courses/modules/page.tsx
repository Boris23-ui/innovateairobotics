import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { PlayArrow, AccessTime, School } from '@mui/icons-material';

const mockCourses = [
  {
    id: 1,
    title: 'Introduction to Robotics',
    description: 'Learn the basics of robotics and programming',
    image: '/images/building_drones.jpg',
    duration: '8 weeks',
    level: 'Beginner',
    progress: 75,
    lessons: 24
  },
  {
    id: 2,
    title: 'Advanced Programming',
    description: 'Master advanced programming concepts',
    image: '/images/kids_designing_simple_machines.jpg',
    duration: '12 weeks',
    level: 'Intermediate',
    progress: 60,
    lessons: 36
  },
  {
    id: 3,
    title: 'AI and Machine Learning',
    description: 'Explore artificial intelligence and ML',
    image: '/images/young-robotics-engineers.jpg',
    duration: '16 weeks',
    level: 'Advanced',
    progress: 0,
    lessons: 48
  }
];

export default async function CoursesModules() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Course Modules
        </Typography>
        
        <Grid container spacing={3}>
          {mockCourses.map((course) => (
            <Grid item xs={12} md={6} lg={4} key={course.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {course.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip 
                      icon={<AccessTime />} 
                      label={course.duration} 
                      size="small" 
                      variant="outlined" 
                    />
                    <Chip 
                      icon={<School />} 
                      label={course.level} 
                      size="small" 
                      variant="outlined" 
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      {course.lessons} lessons
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<PlayArrow />}
                      size="small"
                    >
                      {course.progress > 0 ? 'Continue' : 'Start'}
                    </Button>
                  </Box>
                  
                  {course.progress > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Progress: {course.progress}%
                      </Typography>
                      <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 1 }}>
                        <Box 
                          sx={{ 
                            width: `${course.progress}%`, 
                            height: 8, 
                            bgcolor: 'primary.main', 
                            borderRadius: 1 
                          }} 
                        />
                      </Box>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
} 