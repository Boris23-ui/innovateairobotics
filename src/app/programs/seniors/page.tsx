'use client';

import { Box, Typography } from '@mui/material';
import { ProgramLayout } from '@/components/programs/ProgramLayout';
import Image from 'next/image';

export default function SeniorsPage() {
  return (
    <ProgramLayout
      title="Senior Innovators"
      ageRange="18+ years"
      description="Welcome to our AI Robotics class designed specifically for adults! This comprehensive program offers a unique opportunity to explore the fascinating world of artificial intelligence and robotics in a supportive, engaging environment. Whether you're looking to enhance your professional skills, pursue a new hobby, or simply stay current with technological advancements, this class provides hands-on experience with cutting-edge technologies. You'll learn about programming robots, understanding AI algorithms, and exploring the societal implications of these rapidly evolving fields. Through practical projects and interactive discussions, you'll gain valuable insights into how AI and robotics are shaping our future. Join us to discover, create, and innovate in the exciting realm of AI Robotics!"
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        <Box sx={{ position: 'relative', height: 400, borderRadius: 4, overflow: 'hidden' }}>
          <Image
            src="/images/Palo-alto-classes-6.jpg"
            alt="Senior Innovators exploring AI and robotics"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
            What You'll Learn
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Typography component="li" sx={{ mb: 1 }}>
              Advanced AI and robotics concepts
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Professional applications and industry trends
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Ethical considerations and societal impact
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Hands-on project development
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Future technology integration
            </Typography>
          </Box>
        </Box>
      </Box>
    </ProgramLayout>
  );
} 