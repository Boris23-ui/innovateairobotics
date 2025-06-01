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
import {
  Favorite,
  School,
  Science,
  Code,
  EmojiObjects,
} from '@mui/icons-material';

const donationTiers = [
  {
    title: 'Supporter',
    amount: 25,
    description: 'Help provide basic robotics kits for one student',
    icon: <Favorite fontSize="large" />,
  },
  {
    title: 'Educator',
    amount: 50,
    description: 'Support a classroom workshop session',
    icon: <School fontSize="large" />,
  },
  {
    title: 'Innovator',
    amount: 100,
    description: 'Fund advanced robotics equipment for a team',
    icon: <Science fontSize="large" />,
  },
  {
    title: 'Visionary',
    amount: 250,
    description: 'Sponsor a complete robotics program for a school',
    icon: <Code fontSize="large" />,
  },
];

export default function DonatePage() {
  const theme = useTheme();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = async (amount: number) => {
    // TODO: Implement Stripe integration
    console.log('Donating:', amount);
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
                >
                  Donate Now
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
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => selectedAmount && handleDonate(selectedAmount)}
            disabled={!selectedAmount}
          >
            Donate ${selectedAmount || '0'}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
} 