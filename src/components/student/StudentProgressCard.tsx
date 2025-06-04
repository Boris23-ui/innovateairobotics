import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, LinearProgress } from '@mui/material';

interface StudentProgressCardProps {
  name: string;
  gradeLevel: string;
  progress: string;
  lastLogin: string;
}

const StudentProgressCard: React.FC<StudentProgressCardProps> = ({
  name,
  gradeLevel,
  progress,
  lastLogin,
}) => {
  // Convert progress string to number for LinearProgress
  const progressValue = parseInt(progress.replace('%', ''));

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
          <Avatar 
            sx={{ 
              bgcolor: 'primary.light',
              width: 64,
              height: 64,
              fontSize: '1.5rem'
            }}
          >
            {name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" color="text.primary">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {gradeLevel}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Overall Progress
            </Typography>
            <Typography variant="body2" color="primary" fontWeight="medium">
              {progress}
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={progressValue}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'primary.main',
                borderRadius: 4,
              }
            }}
          />
        </Box>

        <Typography variant="body2" color="text.secondary">
          Last login: {lastLogin}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StudentProgressCard; 