"use client";

import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, useTheme } from '@mui/material';

interface StudentInfoProps {
  name: string;
  gradeLevel: string;
  progress: string;
  lastLogin: string;
}

export default function StudentInfoCard({ name, gradeLevel, progress, lastLogin }: StudentInfoProps) {
  const theme = useTheme();
  // Convert progress string to number for LinearProgress
  const progressValue = parseInt(progress.replace('%', ''));

  return (
    <Card sx={{ 
      bgcolor: 'background.paper',
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.standard,
      }),
    }}>
      <CardContent>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{
            color: 'text.primary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          {name}
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
          Grade Level: {gradeLevel}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography 
              variant="body2" 
              fontWeight="medium"
              sx={{
                color: 'text.primary',
                transition: theme.transitions.create('color', {
                  duration: theme.transitions.duration.standard,
                }),
              }}
            >
              Overall Progress
            </Typography>
            <Typography 
              variant="body2" 
              fontWeight="medium"
              sx={{
                color: 'text.primary',
                transition: theme.transitions.create('color', {
                  duration: theme.transitions.duration.standard,
                }),
              }}
            >
              {progress}
            </Typography>
          </Box>
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
          variant="caption" 
          sx={{ 
            color: 'text.secondary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          Last login: {lastLogin}
        </Typography>
      </CardContent>
    </Card>
  );
} 