'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {
  Favorite,
  School,
  Science,
  Code,
  EmojiObjects,
} from '@mui/icons-material';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const donationTiers = [
  {
    title: 'Supporter',
    amount: 50,
    description: 'Help provide basic robotics kits for one student',
    icon: <Favorite fontSize="large" />,
  },
  {
    title: 'Educator',
    amount: 100,
    description: 'Support a classroom workshop session',
    icon: <School fontSize="large" />,
  },
  {
    title: 'Innovator',
    amount: 500,
    description: 'Fund advanced robotics equipment for a team',
    icon: <Science fontSize="large" />,
  },
  {
    title: 'Visionary',
    amount: 1000,
    description: 'Sponsor a complete robotics program for a school',
    icon: <Code fontSize="large" />,
  },
];

export default function DonatePage() {
  const theme = useTheme();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const { user } = useUser();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = async (amount: number) => {
    if (!amount || isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid donation amount.');
      return;
    }

    try {
      setIsProcessing(true);

      const response = await fetch('/api/stripe/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          donorEmail: user?.emailAddresses[0]?.emailAddress || undefined,
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      // Get Stripe.js instance
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Redirect to Checkout
      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
      
      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      console.error('Donation error:', err);
      toast.error(
        err instanceof Error ? err.message : 'Failed to process donation'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Support the Future of Robotics Education
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          Your donation helps us provide cutting-edge robotics education to students worldwide,
          preparing them for the future of technology and innovation.
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            borderRadius: 4,
          }}
        >
          <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                $25,000
              </Typography>
              <Typography variant="subtitle1">Raised This Year</Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                500+
              </Typography>
              <Typography variant="subtitle1">Students Impacted</Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                15
              </Typography>
              <Typography variant="subtitle1">Schools Supported</Typography>
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* Impact Images Grid */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              position: 'relative',
              height: 300,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Image
              src="/images/Nairobi-classes-7.jpg"
              alt="Students engaged in robotics learning"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: 'white',
              }}
            >
              <Typography variant="h6">Hands-on Learning</Typography>
              <Typography variant="body2">Students engaged in robotics projects</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              position: 'relative',
              height: 300,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Image
              src="/images/Nairobi-classes-3.jpg"
              alt="Students working together on robotics"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: 'white',
              }}
            >
              <Typography variant="h6">Collaborative Learning</Typography>
              <Typography variant="body2">Students working together on robotics projects</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              position: 'relative',
              height: 300,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Image
              src="/images/kids_designing_simple_machines.jpg"
              alt="Young students designing and building"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: 'white',
              }}
            >
              <Typography variant="h6">Creative Design</Typography>
              <Typography variant="body2">Young minds exploring engineering concepts</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Donation Tiers */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {donationTiers.map((tier) => (
          <Grid item xs={12} sm={6} md={3} key={tier.title}>
            <Card
              elevation={4}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>{tier.icon}</Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {tier.title}
                </Typography>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ${tier.amount}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {tier.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => handleDonate(tier.amount)}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Donate $${tier.amount}`}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Custom Donation */}
      <Card sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            Custom Donation
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
            Choose your own amount to support our mission
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            {[50, 100, 250, 500].map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? 'contained' : 'outlined'}
                onClick={() => setSelectedAmount(amount)}
                sx={{ flex: 1 }}
              >
                ${amount}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              label="Custom Amount"
              variant="outlined"
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              fullWidth
            />
            <Button
              variant="contained"
              size="large"
              onClick={() => handleDonate(Number(customAmount))}
              disabled={isProcessing || !customAmount || Number(customAmount) <= 0}
              sx={{ height: 56, whiteSpace: 'nowrap' }}
            >
              {isProcessing ? 'Processing...' : 'Donate Now'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
} 