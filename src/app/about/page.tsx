'use client';

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

export default function AboutPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Mission Statement */}
      <Paper
        elevation={0}
        sx={{
          p: 6,
          mb: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          borderRadius: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Mission
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 800, lineHeight: 1.6 }}>
          Integrating robotics and AI into school curricula is essential for preparing students for the 4th industrial revolution. 
          By providing access to advanced technologies, we can equip the next generation with vital skills for innovation and 
          leadership in a changing world, supporting their personal development and societal progress.
        </Typography>
      </Paper>

      {/* Leadership Section */}
      <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
        Leadership
      </Typography>

      <Grid container spacing={6}>
        {/* John Williams */}
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mb: 3,
                    border: `4px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Image
                    src="/images/John Williams Sr.jpg"
                    alt="John H. Williams"
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                </Avatar>
                <Typography variant="h4" component="h3" gutterBottom>
                  John H. Williams
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  President/Founder
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                His career trajectory showcases a blend of technical expertise and visionary leadership. He began as a programmer 
                at Los Angeles County Healthcare, where he honed his skills in managing complex healthcare systems. Transitioning 
                to Mattel Toys as a systems analyst, he further developed his analytical acumen, ensuring the seamless integration 
                of technology with product design.
              </Typography>
              <Typography variant="body1" paragraph>
                His journey continued at The Rand Corporation, where he tackled high-impact research projects as a systems analyst, 
                driving innovation in strategic technologies. At Atlantic Richfield Company (ARCO), he stepped into a managerial 
                role for the Products Division, overseeing the efficiency of user-centric systems in the company refineries.
              </Typography>
              <Typography variant="body1" paragraph>
                In Silicon Valley, John embraced the dynamic startup environment with roles at AGA and Securus, where he contributed 
                to pioneering tech solutions. His leadership was further exemplified during his recent six-year tenure as VP of 
                Operations at Tsquared Robotics LLC, a for-profit educational service provider specializing in robotics instruction 
                for youth across Silicon Valley, Austin, Texas, and Kenya.
              </Typography>
              <Typography variant="body1">
                This experience led him to found Innovate AI Robotics Inc., a nonprofit dedicated to advancing robotics education 
                and fostering innovation, teamwork, and problem-solving through hands-on classes for youth of all ages.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                John received his bachelor's degree from California Lutheran University in Business Administration/Information Systems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Basil Boris */}
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mb: 3,
                    border: `4px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Image
                    src="/images/basil.jpg"
                    alt="Basil K. Boris"
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                </Avatar>
                <Typography variant="h4" component="h3" gutterBottom>
                  Basil K. Boris
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  VP Operations/CTO
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                His career trajectory reflects a blend of technical expertise and a commitment to empowering learners. As CIO in a 
                remote role at Tsquared Robotics, he played a pivotal role in designing advanced robotics systems for educational 
                applications, while also integrating Learning Management Systems (LMS) to enhance global educational services.
              </Typography>
              <Typography variant="body1" paragraph>
                His passion for education is evident in the engaging robotics workshops and training sessions he has designed and 
                delivered for students, educators, and industry professionals, both in-person and virtually.
              </Typography>
              <Typography variant="body1" paragraph>
                Previously, he served as a Test and Assessment Developer at the ICDL Foundation, where he collaborated on the 
                creation of high-quality assessments and supported multimedia content development. His journey also includes a 
                role as a Creative Writer at Baserange.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
} 