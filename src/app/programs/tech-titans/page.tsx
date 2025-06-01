'use client';

import { Box, Typography } from '@mui/material';
import { ProgramLayout } from '@/components/programs/ProgramLayout';
import Image from 'next/image';

export default function TechTitansPage() {
  return (
    <ProgramLayout
      title="Tech Titans"
      ageRange="10-12 years old"
      description="Welcome to the thrilling AI Robotics class for 9-12-year-olds! Get ready to dive into the cutting-edge world of Artificial Intelligence and Robotics. In this hands-on adventure, you will design, build, and program your own intelligent robots. Discover how AI helps them make smart decisions, solve challenges, and interact with the world around them. Through engaging projects and fun competitions, you will learn coding, problem-solving, and teamwork skills. Join us to unleash your creativity, explore the future of technology, and become a skilled AI Robotics enthusiast! Let's embark on this exciting journey of innovation and imagination together!"
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        <Box sx={{ position: 'relative', height: 400, borderRadius: 4, overflow: 'hidden' }}>
          <Image
            src="/images/Mountain-view-classes-8.jpg"
            alt="Tech Titans working on advanced robotics projects"
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
              Advanced programming and robotics concepts
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              AI decision-making and problem-solving
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Robot design and construction
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Competition preparation and strategy
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Project management and presentation skills
            </Typography>
          </Box>
        </Box>
      </Box>
    </ProgramLayout>
  );
} 