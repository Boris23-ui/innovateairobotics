import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Chip, Button, TextField, InputAdornment } from '@mui/material';
import { Search, Star, AccessTime, People } from '@mui/icons-material';

// Mock data - Replace with actual data from your backend
const allCourses = [
  {
    id: 1,
    title: "Introduction to Robotics",
    description: "Learn the fundamentals of robotics and automation",
    image: "/images/robotics-intro.jpg",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.8,
    students: 1234,
    category: "Robotics"
  },
  {
    id: 2,
    title: "Advanced Programming",
    description: "Master advanced programming concepts for robotics",
    image: "/images/advanced-prog.jpg",
    duration: "10 weeks",
    level: "Advanced",
    rating: 4.6,
    students: 856,
    category: "Programming"
  },
  {
    id: 3,
    title: "Sensor Integration",
    description: "Learn to integrate various sensors with your robots",
    image: "/images/sensors.jpg",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 945,
    category: "Electronics"
  },
  {
    id: 4,
    title: "Robot Design Principles",
    description: "Understand the principles of robot design and mechanics",
    image: "/images/robot-design.jpg",
    duration: "12 weeks",
    level: "Intermediate",
    rating: 4.9,
    students: 678,
    category: "Design"
  }
];

export default function AllCoursesPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          All Courses
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Explore our comprehensive collection of robotics and programming courses
        </Typography>

        <TextField
          fullWidth
          placeholder="Search courses..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 4 }}
        />

        <Grid container spacing={3}>
          {allCourses.map((course) => (
            <Grid item xs={12} md={6} key={course.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h2">
                      {course.title}
                    </Typography>
                    <Chip 
                      label={course.level}
                      size="small"
                      color={course.level === 'Beginner' ? 'success' : course.level === 'Intermediate' ? 'warning' : 'error'}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {course.description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Star sx={{ color: 'warning.main', mr: 0.5 }} />
                      <Typography variant="body2">{course.rating}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTime sx={{ color: 'text.secondary', mr: 0.5 }} />
                      <Typography variant="body2">{course.duration}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <People sx={{ color: 'text.secondary', mr: 0.5 }} />
                      <Typography variant="body2">{course.students} students</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip 
                      label={course.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Button 
                      variant="contained"
                      color="primary"
                      sx={{ textTransform: 'none' }}
                    >
                      Enroll Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
} 