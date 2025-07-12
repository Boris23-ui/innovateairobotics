import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Box, Container, Typography, Grid, Card, CardContent, LinearProgress, Avatar, Chip } from '@mui/material';
import { EmojiEvents, TrendingUp, School, Star } from '@mui/icons-material';

const mockProgress = {
  overallProgress: 75,
  courses: [
    { name: 'Introduction to Robotics', progress: 80, lessons: 24, completed: 19 },
    { name: 'Advanced Programming', progress: 60, lessons: 36, completed: 22 },
    { name: 'AI and Machine Learning', progress: 0, lessons: 48, completed: 0 }
  ],
  achievements: [
    { name: 'First Steps', description: 'Completed your first lesson', icon: '🎯', earned: true },
    { name: 'Code Master', description: 'Completed 10 programming challenges', icon: '💻', earned: true },
    { name: 'Robot Builder', description: 'Built your first robot', icon: '🤖', earned: true },
    { name: 'AI Pioneer', description: 'Completed AI fundamentals', icon: '🧠', earned: false }
  ],
  badges: [
    { name: 'Problem Solver', color: 'primary', earned: true },
    { name: 'Team Player', color: 'secondary', earned: true },
    { name: 'Innovator', color: 'success', earned: false },
    { name: 'Mentor', color: 'warning', earned: false }
  ]
};

export default async function ProgressTracker() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Progress Tracker
        </Typography>
        
        <Grid container spacing={3}>
          {/* Overall Progress */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Overall Progress</Typography>
                    <Typography variant="h4">{mockProgress.overallProgress}%</Typography>
                  </Box>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={mockProgress.overallProgress} 
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Course Progress */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Course Progress
                </Typography>
                {mockProgress.courses.map((course, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle1">{course.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {course.completed}/{course.lessons} lessons
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={course.progress} 
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {course.progress}% complete
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Achievements */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Achievements
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {mockProgress.achievements.map((achievement, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        opacity: achievement.earned ? 1 : 0.5
                      }}
                    >
                      <Avatar sx={{ 
                        bgcolor: achievement.earned ? 'primary.main' : 'grey.300',
                        width: 40,
                        height: 40
                      }}>
                        <Typography variant="h6">{achievement.icon}</Typography>
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2">
                          {achievement.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {achievement.description}
                        </Typography>
                      </Box>
                      {achievement.earned && (
                        <Star color="primary" />
                      )}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Badges */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Badges
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {mockProgress.badges.map((badge, index) => (
                    <Chip
                      key={index}
                      label={badge.name}
                      color={badge.earned ? (badge.color as any) : 'default'}
                      variant={badge.earned ? 'filled' : 'outlined'}
                      icon={badge.earned ? <EmojiEvents /> : undefined}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 