"use client";

import { Container, Typography, Grid, useTheme } from '@mui/material';
import PeerReviewSection from '@/components/student/PeerReviewSection';

export default function ReviewsPage() {
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
        Peer Reviews
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PeerReviewSection />
        </Grid>
      </Grid>
    </Container>
  );
} 