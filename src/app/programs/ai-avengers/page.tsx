'use client';

import { Box, Typography } from '@mui/material';
import { ProgramLayout } from '@/components/programs/ProgramLayout';
import Image from 'next/image';

export default function AIAvengersPage() {
  return (
    <ProgramLayout
      title="AI Avengers"
      ageRange="13-17 years old"
      description="Welcome to the exciting world of AI Robotics! In this class designed specifically for teens, you will delve into the intersection of artificial intelligence and robotics, exploring how these cutting-edge technologies are shaping the future. Through hands-on projects, interactive demonstrations, and engaging discussions, you will learn the fundamentals of programming robots, designing algorithms for autonomous decision-making, and understanding the ethical considerations of AI in robotics. Whether you are a beginner or have some experience, this class offers a dynamic environment where you can unleash your creativity, problem-solving skills, and passion for innovation. Get ready to build, code, and explore the endless possibilities of AI Robotics!"
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        <Box sx={{ position: 'relative', height: 400, borderRadius: 4, overflow: 'hidden' }}>
          <Image
            src="/images/Palo-alto-classes-5.jpg"
            alt="AI Avengers collaborating on advanced AI projects"
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
              Advanced AI and machine learning concepts
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Complex robotics programming and control
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Ethical considerations in AI development
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Real-world problem-solving applications
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Research and development methodologies
            </Typography>
          </Box>
        </Box>
      </Box>
    </ProgramLayout>
  );
} 