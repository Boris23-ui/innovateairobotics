import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button, Stack } from '@mui/material';

interface Review {
  projectTitle: string;
  reviewer: string;
  status: 'pending' | 'completed';
  dueDate?: string;
}

export default function PeerReviewSection() {
  const reviews: Review[] = [
    {
      projectTitle: "Robot Navigation System",
      reviewer: "Alex Chen",
      status: "pending",
      dueDate: "April 12, 2025"
    },
    {
      projectTitle: "Sensor Integration Project",
      reviewer: "Sarah Miller",
      status: "completed"
    }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          Peer Reviews
        </Typography>
        <Stack spacing={2}>
          {reviews.map((review, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                bgcolor: 'grey.50',
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {review.projectTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Reviewer: {review.reviewer}
                  </Typography>
                </Box>
                <Chip
                  label={review.status === 'completed' ? 'Completed' : 'Pending'}
                  size="small"
                  sx={{
                    bgcolor: review.status === 'completed' ? 'success.light' : 'warning.light',
                    color: review.status === 'completed' ? 'success.dark' : 'warning.dark',
                  }}
                />
              </Box>
              {review.dueDate && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Due: {review.dueDate}
                </Typography>
              )}
              {review.status === 'pending' && (
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, textTransform: 'none' }}
                >
                  Start Review
                </Button>
              )}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
} 