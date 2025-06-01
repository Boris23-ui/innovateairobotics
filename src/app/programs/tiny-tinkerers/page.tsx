'use client';

import { Box, Grid, Typography } from '@mui/material';
import { ProgramLayout } from '@/components/programs/ProgramLayout';
import Image from 'next/image';

export default function TinyTinkerersPage() {
  return (
    <ProgramLayout
      title="Tiny Tinkerers"
      ageRange="5 & Under"
      description="Welcome to the magical AI Robotics class for our youngest learners, aged 5 and under! Together, we'll discover the wonders of robots and how they can come to life with Artificial Intelligence (AI). Through interactive play and colorful activities, we'll explore how robots think, move, and communicate. Get ready to meet our adorable robot friends, watch them dance, and even teach them some tricks! It's a fun-filled and age-appropriate introduction to the amazing world of AI and robotics, where imagination knows no limits. Let's have a blast learning and playing with our robot pals!"
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        <Box sx={{ position: 'relative', height: 400, borderRadius: 4, overflow: 'hidden' }}>
          <Image
            src="/images/Kids sorting kit components.jpg"
            alt="Tiny Tinkerers sorting and learning with robotics components"
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
              Basic robot movements and sounds
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Simple cause and effect relationships
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Introduction to colors and shapes through robotics
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Basic problem-solving through play
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Teamwork and social interaction
            </Typography>
          </Box>
        </Box>
      </Box>
    </ProgramLayout>
  );
} 