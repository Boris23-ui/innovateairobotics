'use client';

import { useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function DonateSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get('session_id');

  useEffect(() => {
    // You could verify the session here if needed
    console.log('Payment session ID:', sessionId);
  }, [sessionId]);

  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
      <CheckCircle sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
      <Typography variant="h4" component="h1" gutterBottom>
        Thank You for Your Donation!
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Your generous contribution will help us continue providing quality robotics education
        to students worldwide. A receipt has been sent to your email address.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          component={Link}
          href="/"
          variant="contained"
          size="large"
          sx={{ mr: 2 }}
        >
          Return Home
        </Button>
        <Button
          component={Link}
          href="/donate"
          variant="outlined"
          size="large"
        >
          Donate Again
        </Button>
      </Box>
    </Container>
  );
}