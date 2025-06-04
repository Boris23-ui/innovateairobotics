"use client";

import { Container, Typography, Grid, useTheme } from '@mui/material';
import BadgesOverview from '@/components/student/BadgesOverview';

export default function BadgesPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ 
          my: 4,
          color: 'text.primary',
          transition: theme.transitions.create('color', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        My Achievements
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BadgesOverview />
        </Grid>
      </Grid>
    </Container>
  );
} 