import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  List,
  ListItem,
  Box,
} from '@mui/material';

interface Course {
  id: string;
  title: string;
  progress: number;
  lastActivity: string;
}

interface CourseProgressListProps {
  courses: Course[];
}

export default function CourseProgressList({ courses }: CourseProgressListProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Your Courses
        </Typography>
        <List>
          {courses.map((course) => (
            <ListItem
              key={course.id}
              divider
              sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <Typography variant="subtitle1" fontWeight="medium">
                {course.title}
              </Typography>
              <Box sx={{ width: '100%', mt: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={course.progress}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
              <Box sx={{ mt: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color="text.secondary">
                  Progress: {course.progress}%
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Last activity: {course.lastActivity}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 