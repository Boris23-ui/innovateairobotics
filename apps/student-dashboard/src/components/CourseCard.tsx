'use client';

import { Card, CardContent, CardActions, Typography, Button, LinearProgress, Chip, Box } from '@mui/material';
import { PlayArrow, BookmarkBorder, Star, AccessTime, School } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

interface Course {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
  duration: string;
  difficulty: string;
  rating: number;
  enrolledStudents: number;
  lessons: number;
  image?: string;
}

interface CourseCardProps {
  course: Course;
  progress: number;
  onEnroll: (courseId: string) => void;
  onContinue: (courseId: string) => void;
  isEnrolled: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  progress,
  onEnroll,
  onContinue,
  isEnrolled
}) => {
  const theme = useTheme();

  const getAgeGroupColor = (ageGroup: string) => {
    const colors = {
      'Tiny Tinkerers': theme.palette.education.tiny,
      'Robot Explorers': theme.palette.education.explorers,
      'Tech Titans': theme.palette.education.titans,
      'AI Avengers': theme.palette.education.avengers,
    };
    return colors[ageGroup as keyof typeof colors] || '#6b7280';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': '#10b981',
      'Intermediate': '#f59e0b',
      'Advanced': '#ef4444',
    };
    return colors[difficulty as keyof typeof colors] || '#6b7280';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card className="card-hover" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="h6" component="h3" className="font-bold" sx={{ flex: 1, mr: 2 }}>
              {course.title}
            </Typography>
            <Chip
              label={course.ageGroup}
              size="small"
              sx={{
                backgroundColor: getAgeGroupColor(course.ageGroup),
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            />
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: '3rem' }}>
            {course.description}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="caption" color="text.secondary">
                {course.duration}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <School sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="caption" color="text.secondary">
                {course.lessons} lessons
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Star sx={{ fontSize: 16, color: '#fbbf24' }} />
              <Typography variant="caption" color="text.secondary">
                {course.rating}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Chip
              label={course.difficulty}
              size="small"
              sx={{
                backgroundColor: getDifficultyColor(course.difficulty),
                color: 'white',
                fontSize: '0.75rem'
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {course.enrolledStudents} students enrolled
            </Typography>
          </Box>

          {isEnrolled && (
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Progress
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {progress}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#e5e7eb',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4,
                    background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
                  }
                }}
              />
            </Box>
          )}
        </CardContent>

        <CardActions sx={{ px: 3, pb: 3 }}>
          {isEnrolled ? (
            <Button
              variant="contained"
              startIcon={<PlayArrow />}
              onClick={() => onContinue(course.id)}
              fullWidth
              sx={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                }
              }}
            >
              Continue Learning
            </Button>
          ) : (
            <Button
              variant="outlined"
              startIcon={<BookmarkBorder />}
              onClick={() => onEnroll(course.id)}
              fullWidth
              sx={{
                borderColor: getAgeGroupColor(course.ageGroup),
                color: getAgeGroupColor(course.ageGroup),
                '&:hover': {
                  borderColor: getAgeGroupColor(course.ageGroup),
                  backgroundColor: `${getAgeGroupColor(course.ageGroup)}10`,
                }
              }}
            >
              Enroll Now
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
}; 