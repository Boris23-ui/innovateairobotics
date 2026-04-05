'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
  Inventory2Outlined,
  SmartToyOutlined,
  BuildOutlined,
  SendOutlined,
  CheckCircleOutlined,
  ErrorOutlined,
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

function DonatePageInner() {
  const theme = useTheme();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const { user } = useUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const searchParams = useSearchParams();
  const donationStatus = searchParams.get('success') === 'true'
    ? 'success'
    : searchParams.get('canceled') === 'true'
    ? 'canceled'
    : null;

  useEffect(() => {
    if (donationStatus === 'success') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [donationStatus]);
  const [equipmentForm, setEquipmentForm] = useState({ name: '', email: '', description: '', location: '' });
  const [equipmentSubmitting, setEquipmentSubmitting] = useState(false);

  const handleEquipmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!equipmentForm.name || !equipmentForm.email || !equipmentForm.description) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setEquipmentSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...equipmentForm,
          subject: 'Equipment / Kit Donation Offer',
        }),
      });
      toast.success("Thank you! We'll be in touch soon about your donation.");
      setEquipmentForm({ name: '', email: '', description: '', location: '' });
    } catch {
      toast.error('Something went wrong. Please email us directly at info@innovateairobotics.com');
    } finally {
      setEquipmentSubmitting(false);
    }
  };

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
      {/* Donation Status Banner */}
      {donationStatus === 'success' && (
        <Box
          sx={{
            display: 'flex', alignItems: 'center', gap: 2,
            bgcolor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.4)',
            borderRadius: 3, p: 3, mb: 6,
          }}
        >
          <CheckCircleOutlined sx={{ color: '#06b6d4', fontSize: 36, flexShrink: 0 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#06b6d4' }}>
              Thank you for your donation!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your contribution helps us bring robotics education to students in Kenya and the US.
              A confirmation email is on its way to you.
            </Typography>
          </Box>
        </Box>
      )}
      {donationStatus === 'canceled' && (
        <Box
          sx={{
            display: 'flex', alignItems: 'center', gap: 2,
            bgcolor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 3, p: 3, mb: 6,
          }}
        >
          <ErrorOutlined sx={{ color: '#ef4444', fontSize: 36, flexShrink: 0 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#ef4444' }}>
              Payment canceled
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No charge was made. You can try again below whenever you&apos;re ready.
            </Typography>
          </Box>
        </Box>
      )}

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
                $4,000
              </Typography>
              <Typography variant="subtitle1">Raised This Year</Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                500+
              </Typography>
              <Typography variant="subtitle1">Students Impacted</Typography>
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
      {/* Equipment Donation Section */}
      <Box sx={{ mt: 10 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Donate Equipment & Kits
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto' }}>
            Have LEGO robotics kits, EV3 sets, sensors, or other equipment you&apos;d like to pass on?
            We put every piece to work in classrooms in Kenya and the US.
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="stretch">
          {/* Image + what we accept */}
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Hero image */}
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 4,
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/lego-storage-ev3-shelves-open.jpg"
                  alt="LEGO EV3 kits on shelves ready for students"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    p: 2.5,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                    color: 'white',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Your Kits, New Hands</Typography>
                  <Typography variant="body2">Every donated kit opens a door for a young engineer</Typography>
                </Box>
              </Box>

              {/* What we accept */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  We gladly accept:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {[
                    { icon: <SmartToyOutlined />, label: 'LEGO Mindstorms EV3 & NXT sets' },
                    { icon: <Inventory2Outlined />, label: 'LEGO Technic and Education kits' },
                    { icon: <BuildOutlined />, label: 'Sensors, motors, cables & accessories' },
                    { icon: <Science />, label: 'Robots, drones & STEM equipment' },
                    { icon: <School />, label: 'Curriculum books and printed materials' },
                  ].map(({ icon, label }) => (
                    <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={{ color: 'primary.main', display: 'flex' }}>{icon}</Box>
                      <Typography variant="body1">{label}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Contact form */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Tell us about your donation
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Fill in the form and our team will reach out within 2 business days to arrange collection or shipping.
                </Typography>

                <Box component="form" onSubmit={handleEquipmentSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <TextField
                    label="Your Name or Organization *"
                    variant="outlined"
                    fullWidth
                    value={equipmentForm.name}
                    onChange={(e) => setEquipmentForm({ ...equipmentForm, name: e.target.value })}
                  />
                  <TextField
                    label="Email Address *"
                    variant="outlined"
                    type="email"
                    fullWidth
                    value={equipmentForm.email}
                    onChange={(e) => setEquipmentForm({ ...equipmentForm, email: e.target.value })}
                  />
                  <TextField
                    label="City / Country"
                    variant="outlined"
                    fullWidth
                    placeholder="e.g. Nairobi, Kenya  or  San Jose, CA"
                    value={equipmentForm.location}
                    onChange={(e) => setEquipmentForm({ ...equipmentForm, location: e.target.value })}
                  />
                  <TextField
                    label="Describe what you'd like to donate *"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="e.g. 3 EV3 base sets, mostly complete, with sensors and USB cables"
                    value={equipmentForm.description}
                    onChange={(e) => setEquipmentForm({ ...equipmentForm, description: e.target.value })}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendOutlined />}
                    disabled={equipmentSubmitting}
                    sx={{ mt: 1 }}
                  >
                    {equipmentSubmitting ? 'Sending…' : 'Submit Donation Offer'}
                  </Button>
                  <Typography variant="caption" color="text.secondary">
                    Prefer email? Reach us at{' '}
                    <a href="mailto:info@innovateairobotics.com" style={{ color: 'inherit' }}>
                      info@innovateairobotics.com
                    </a>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={null}>
      <DonatePageInner />
    </Suspense>
  );
} 