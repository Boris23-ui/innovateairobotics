'use client';

import { Box, Typography } from '@mui/material';
import { ProgramLayout } from '@/components/programs/ProgramLayout';
import Image from 'next/image';

export default function RobotExplorersPage() {
  return (
    <ProgramLayout
      title="Robot Explorers"
      ageRange="6-9 years old"
      description="Welcome to the fascinating world of AI Robotics! In this exciting class designed just for 6–9 year olds, you will explore the magical combination of Artificial Intelligence (AI) and Robots. Get ready to unleash your creativity as you build and interact with friendly robots that can think, learn, and respond to your commands. Through fun activities and hands-on experiments, you will discover how robots use sensors and algorithms to navigate their surroundings, solve challenges, and even play games with you! Join us for an action-packed adventure where you will learn the basics of coding and robotics while having a blast with your new robotic friends! Let's embark on an unforgettable journey into the future of technology together!"
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        <Box sx={{ position: 'relative', height: 400, borderRadius: 4, overflow: 'hidden' }}>
          <Image
            src="/images/Mountain-view-classes-4.jpg"
            alt="Robot Explorers engaged in hands-on learning"
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
              Basic programming concepts through visual coding
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Robot movement and sensor interaction
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Problem-solving and critical thinking
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Team collaboration and communication
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Introduction to AI concepts through games
            </Typography>
          </Box>
        </Box>
      </Box>
    </ProgramLayout>
  );
} 