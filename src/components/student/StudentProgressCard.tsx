"use client";

import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, LinearProgress, useTheme } from '@mui/material';

interface StudentProgressCardProps {
  name: string;
  gradeLevel: string;
  progress: string;
  lastLogin: string;
}

const StudentProgressCard: React.FC<StudentProgressCardProps> = ({
  name,
  gradeLevel,
  progress,
  lastLogin,
}) => {
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
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
          <Avatar 
            sx={{ 
              bgcolor: 'primary.light',
              width: 64,
              height: 64,
              fontSize: '1.5rem',
              transition: theme.transitions.create('background-color', {
                duration: theme.transitions.duration.standard,
              }),
            }}
          >
            {name.charAt(0)}
          </Avatar>
          <Box>
            <Typography 
              variant="h6" 
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
                color: 'text.secondary',
                transition: theme.transitions.create('color', {
                  duration: theme.transitions.duration.standard,
                }),
              }}
            >
              {gradeLevel}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography 
              variant="body2" 
              sx={{
                color: 'text.secondary',
                transition: theme.transitions.create('color', {
                  duration: theme.transitions.duration.standard,
                }),
              }}
            >
              Overall Progress
            </Typography>
            <Typography 
              variant="body2" 
              color="primary" 
              fontWeight="medium"
              sx={{
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
          variant="body2" 
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
};

export default StudentProgressCard; 