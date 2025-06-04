import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

interface StudentInfoProps {
  name: string;
  gradeLevel: string;
  progress: string;
  lastLogin: string;
}

export default function StudentInfoCard({ name, gradeLevel, progress, lastLogin }: StudentInfoProps) {
  // Convert progress string to number for LinearProgress
  const progressValue = parseInt(progress.replace('%', ''));

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Grade Level: {gradeLevel}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" fontWeight="medium">
              Overall Progress
            </Typography>
            <Typography variant="body2" fontWeight="medium">
              {progress}
            </Typography>
          </Box>
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
        <Typography variant="caption" color="text.secondary">
          Last login: {lastLogin}
        </Typography>
      </CardContent>
    </Card>
  );
} 