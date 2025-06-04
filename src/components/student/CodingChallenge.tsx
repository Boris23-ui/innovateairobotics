"use client";

import React from 'react';
import { Paper, Typography, Box, Button, Chip, useTheme } from '@mui/material';

interface CodingChallengeProps {
  title: string;
  description: string;
  type: string;
  completed: boolean;
}

export default function CodingChallenge({ title, description, type, completed }: CodingChallengeProps) {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        border: 1,
        borderColor: completed 
          ? theme.palette.mode === 'dark' 
            ? 'rgba(76, 175, 80, 0.3)' 
            : 'success.light'
          : theme.palette.mode === 'dark'
            ? 'rgba(25, 118, 210, 0.3)'
            : 'primary.light',
        bgcolor: completed 
          ? theme.palette.mode === 'dark' 
            ? 'rgba(76, 175, 80, 0.08)' 
            : 'rgba(76, 175, 80, 0.1)'
          : theme.palette.mode === 'dark'
            ? 'rgba(25, 118, 210, 0.08)'
            : 'rgba(25, 118, 210, 0.1)',
        opacity: 1,
        '&:hover': {
          bgcolor: completed 
            ? theme.palette.mode === 'dark' 
              ? 'rgba(76, 175, 80, 0.12)' 
              : 'rgba(76, 175, 80, 0.15)'
            : theme.palette.mode === 'dark'
              ? 'rgba(25, 118, 210, 0.12)'
              : 'rgba(25, 118, 210, 0.15)',
        },
        transition: theme.transitions.create(['background-color', 'opacity', 'border-color'], {
          duration: theme.transitions.duration.standard,
        }),
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography 
          variant="subtitle1" 
          fontWeight="medium"
          sx={{
            color: 'text.primary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          {title}
        </Typography>
        <Chip
          label={type}
          size="small"
          sx={{
            bgcolor: completed 
              ? theme.palette.mode === 'dark' 
                ? 'rgba(76, 175, 80, 0.2)' 
                : 'rgba(76, 175, 80, 0.15)'
              : theme.palette.mode === 'dark'
                ? 'rgba(25, 118, 210, 0.2)'
                : 'rgba(25, 118, 210, 0.15)',
            color: completed 
              ? theme.palette.mode === 'dark' 
                ? 'success.light' 
                : 'success.dark'
              : theme.palette.mode === 'dark'
                ? 'primary.light'
                : 'primary.dark',
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'color'], {
              duration: theme.transitions.duration.standard,
            }),
          }}
        />
      </Box>
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
        {description}
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color={completed ? 'success' : 'primary'}
        sx={{
          textTransform: 'none',
          bgcolor: completed 
            ? theme.palette.mode === 'dark' 
              ? 'rgba(76, 175, 80, 0.2)' 
              : 'rgba(76, 175, 80, 0.15)'
            : undefined,
          color: completed 
            ? theme.palette.mode === 'dark' 
              ? 'success.light' 
              : 'success.dark'
            : undefined,
          '&:hover': {
            bgcolor: completed 
              ? theme.palette.mode === 'dark' 
                ? 'rgba(76, 175, 80, 0.3)' 
                : 'success.main'
              : undefined,
            color: completed 
              ? theme.palette.mode === 'dark' 
                ? 'success.light' 
                : 'white'
              : undefined,
          },
          transition: theme.transitions.create(['background-color', 'color'], {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        {completed ? 'View Solution' : 'Start Challenge'}
      </Button>
    </Paper>
  );
} 