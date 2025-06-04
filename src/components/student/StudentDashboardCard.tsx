import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

interface StudentDashboardCardProps {
  course: string;
  progress: string;
  lastActivity: string;
}

export default function StudentDashboardCard({ course, progress, lastActivity }: StudentDashboardCardProps) {
  // Convert progress string to number for LinearProgress
  const progressValue = parseInt(progress.replace('%', ''));

  return (
    <Card sx={{ 
      '&:hover': { 
        boxShadow: 6 
      },
      transition: 'box-shadow 0.3s ease-in-out'
    }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {course}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Last activity: {lastActivity}
        </Typography>
        
        <Box sx={{ width: '100%', mb: 1 }}>
          <LinearProgress 
            variant="determinate" 
            value={progressValue}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'primary.main',
                borderRadius: 4,
              }
            }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" align="right">
          {progress} Complete
        </Typography>
      </CardContent>
    </Card>
  );
} 