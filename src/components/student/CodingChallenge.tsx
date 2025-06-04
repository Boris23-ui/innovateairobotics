import React from 'react';
import { Paper, Typography, Box, Button, Chip } from '@mui/material';

interface CodingChallengeProps {
  title: string;
  description: string;
  type: string;
  completed: boolean;
}

export default function CodingChallenge({ title, description, type, completed }: CodingChallengeProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        border: 1,
        borderColor: completed ? 'success.light' : 'primary.light',
        bgcolor: completed ? 'success.light' : 'primary.light',
        opacity: 0.1,
        '&:hover': {
          opacity: 0.15,
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography variant="subtitle1" fontWeight="medium">
          {title}
        </Typography>
        <Chip
          label={type}
          size="small"
          sx={{
            bgcolor: completed ? 'success.light' : 'primary.light',
            color: completed ? 'success.dark' : 'primary.dark',
            opacity: 1,
          }}
        />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color={completed ? 'success' : 'primary'}
        sx={{
          textTransform: 'none',
          bgcolor: completed ? 'success.light' : undefined,
          color: completed ? 'success.dark' : undefined,
          '&:hover': {
            bgcolor: completed ? 'success.main' : undefined,
            color: completed ? 'white' : undefined,
          }
        }}
      >
        {completed ? 'View Solution' : 'Start Challenge'}
      </Button>
    </Paper>
  );
} 