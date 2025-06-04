"use client";

import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box, useTheme } from '@mui/material';

interface StudentDashboardCardProps {
  course: string;
  progress: string;
  lastActivity: string;
}

export default function StudentDashboardCard({ course, progress, lastActivity }: StudentDashboardCardProps) {
  const theme = useTheme();
  // Convert progress string to number for LinearProgress
  const progressValue = parseInt(progress.replace('%', ''));

  return (
    <Card sx={{ 
      bgcolor: 'background.paper',
      '&:hover': { 
        boxShadow: 6,
        transform: 'translateY(-2px)',
      },
      transition: theme.transitions.create(['box-shadow', 'transform', 'background-color'], {
        duration: theme.transitions.duration.standard,
      }),
    }}>
      <CardContent>
        <Typography 
          variant="h6" 
          component="h2" 
          gutterBottom
          sx={{
            color: 'text.primary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          {course}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2,
            color: 'text.secondary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          Last activity: {lastActivity}
        </Typography>
        
        <Box sx={{ width: '100%', mb: 1 }}>
          <LinearProgress 
            variant="determinate" 
            value={progressValue}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'grey.200',
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'primary.main',
                borderRadius: 4,
                transition: theme.transitions.create('background-color', {
                  duration: theme.transitions.duration.standard,
                }),
              },
              transition: theme.transitions.create('background-color', {
                duration: theme.transitions.duration.standard,
              }),
            }}
          />
        </Box>
        <Typography 
          variant="body2" 
          align="right"
          sx={{
            color: 'text.secondary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          {progress} Complete
        </Typography>
      </CardContent>
    </Card>
  );
} 