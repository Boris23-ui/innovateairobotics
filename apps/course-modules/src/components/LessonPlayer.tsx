'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
  useTheme,
  Paper
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  SkipNext as NextIcon,
  SkipPrevious as PrevIcon,
  VolumeUp as VolumeIcon,
  Fullscreen as FullscreenIcon,
  Quiz as QuizIcon,
  Code as CodeIcon,
  Engineering as ProjectIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Lesson, AgeGroup } from '@shared/types';

interface LessonPlayerProps {
  lesson: Lesson;
  onComplete: (lessonId: string) => void;
  onProgress: (lessonId: string, progress: number) => void;
  ageGroup: AgeGroup;
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({
  lesson,
  onComplete,
  onProgress,
  ageGroup
}) => {
  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCodePlayground, setShowCodePlayground] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const steps = [
    { label: 'Introduction', completed: false },
    { label: 'Video Lesson', completed: false },
    { label: 'Interactive Demo', completed: false },
    { label: 'Practice Exercise', completed: false },
    { label: 'Quiz', completed: false },
    { label: 'Project', completed: false },
    { label: 'Summary', completed: false }
  ];

  useEffect(() => {
    // Simulate progress based on current step
    const newProgress = ((currentStep + 1) / steps.length) * 100;
    setProgress(newProgress);
    onProgress(lesson.id, newProgress);
  }, [currentStep, lesson.id, onProgress]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      steps[currentStep].completed = true;
    } else {
      onComplete(lesson.id);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const getAgeGroupColor = (ageGroup: AgeGroup) => {
    const colors = {
      'Tiny Tinkerers': theme.palette.education.tiny,
      'Robot Explorers': theme.palette.education.explorers,
      'Tech Titans': theme.palette.education.titans,
      'AI Avengers': theme.palette.education.avengers,
    };
    return colors[ageGroup] || '#6b7280';
  };

  const getAgeGroupIcon = (ageGroup: AgeGroup) => {
    switch (ageGroup) {
      case 'Tiny Tinkerers':
        return '🤖';
      case 'Robot Explorers':
        return '🚀';
      case 'Tech Titans':
        return '⚡';
      case 'AI Avengers':
        return '🧠';
      default:
        return '📚';
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Introduction
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h1" sx={{ mb: 2 }}>
                {getAgeGroupIcon(ageGroup)}
              </Typography>
              <Typography variant="h4" component="h2" gutterBottom>
                {lesson.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {lesson.description}
              </Typography>
              <Chip
                label={ageGroup}
                sx={{
                  backgroundColor: getAgeGroupColor(ageGroup),
                  color: 'white',
                  fontSize: '1rem',
                  padding: '8px 16px'
                }}
              />
            </Box>
          </motion.div>
        );

      case 1: // Video Lesson
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h5" gutterBottom>
                Video Lesson
              </Typography>
              {lesson.videoUrl ? (
                <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto' }}>
                  <video
                    controls
                    style={{ width: '100%', borderRadius: '8px' }}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={lesson.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              ) : (
                <Box sx={{ 
                  bgcolor: 'background.paper', 
                  p: 4, 
                  borderRadius: 2, 
                  border: '2px dashed',
                  borderColor: 'divider'
                }}>
                  <Typography variant="body1" color="text.secondary">
                    Video content will be available here
                  </Typography>
                </Box>
              )}
            </Box>
          </motion.div>
        );

      case 2: // Interactive Demo
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h5" gutterBottom>
                Interactive Demo
              </Typography>
              <Box sx={{ 
                bgcolor: 'background.paper', 
                p: 4, 
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Interactive demonstration content will be displayed here
                </Typography>
                <Button variant="outlined" startIcon={<CodeIcon />}>
                  Launch Demo
                </Button>
              </Box>
            </Box>
          </motion.div>
        );

      case 3: // Practice Exercise
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h5" gutterBottom>
                Practice Exercise
              </Typography>
              <Box sx={{ 
                bgcolor: 'background.paper', 
                p: 4, 
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Practice exercises and hands-on activities
                </Typography>
                <Button variant="outlined" startIcon={<ProjectIcon />}>
                  Start Exercise
                </Button>
              </Box>
            </Box>
          </motion.div>
        );

      case 4: // Quiz
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h5" gutterBottom>
                Knowledge Check
              </Typography>
              <Box sx={{ 
                bgcolor: 'background.paper', 
                p: 4, 
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Test your understanding with interactive questions
                </Typography>
                <Button 
                  variant="contained" 
                  startIcon={<QuizIcon />}
                  onClick={() => setShowQuiz(true)}
                >
                  Start Quiz
                </Button>
              </Box>
            </Box>
          </motion.div>
        );

      case 5: // Project
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h5" gutterBottom>
                Hands-on Project
              </Typography>
              <Box sx={{ 
                bgcolor: 'background.paper', 
                p: 4, 
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Apply what you've learned in a real project
                </Typography>
                <Button 
                  variant="contained" 
                  startIcon={<ProjectIcon />}
                  onClick={() => setShowProject(true)}
                >
                  Start Project
                </Button>
              </Box>
            </Box>
          </motion.div>
        );

      case 6: // Summary
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h5" gutterBottom>
                Lesson Complete! 🎉
              </Typography>
              <Box sx={{ 
                bgcolor: 'success.light', 
                p: 4, 
                borderRadius: 2,
                color: 'white'
              }}>
                <CheckIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Congratulations!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  You've successfully completed this lesson. Great job!
                </Typography>
                <Button 
                  variant="contained" 
                  color="inherit"
                  onClick={handleNext}
                >
                  Continue to Next Lesson
                </Button>
              </Box>
            </Box>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Box>
      {/* Progress Bar */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Progress
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Math.round(progress)}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: '#e5e7eb',
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
              background: `linear-gradient(90deg, ${getAgeGroupColor(ageGroup)} 0%, ${getAgeGroupColor(ageGroup)}80 100%)`,
            }
          }}
        />
      </Box>

      {/* Lesson Steps */}
      <Card className="card-hover" sx={{ mb: 3 }}>
        <CardContent>
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  onClick={() => handleStepClick(index)}
                  sx={{ 
                    cursor: 'pointer',
                    '& .MuiStepLabel-label': { 
                      fontSize: '0.875rem',
                      fontWeight: currentStep === index ? 600 : 400
                    }
                  }}
                >
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </CardContent>
      </Card>

      {/* Lesson Content */}
      <Card className="card-hover">
        <CardContent>
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button
          variant="outlined"
          startIcon={<PrevIcon />}
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          endIcon={currentStep === steps.length - 1 ? <CheckIcon /> : <NextIcon />}
          onClick={handleNext}
          sx={{
            background: `linear-gradient(135deg, ${getAgeGroupColor(ageGroup)} 0%, ${getAgeGroupColor(ageGroup)}80 100%)`,
            '&:hover': {
              background: `linear-gradient(135deg, ${getAgeGroupColor(ageGroup)}80 0%, ${getAgeGroupColor(ageGroup)} 100%)`,
            }
          }}
        >
          {currentStep === steps.length - 1 ? 'Complete Lesson' : 'Next'}
        </Button>
      </Box>

      {/* Quiz Dialog */}
      <Dialog open={showQuiz} onClose={() => setShowQuiz(false)} maxWidth="md" fullWidth>
        <DialogTitle>Knowledge Check</DialogTitle>
        <DialogContent>
          <Typography>
            Quiz content will be displayed here...
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowQuiz(false)}>Cancel</Button>
          <Button variant="contained">Submit Quiz</Button>
        </DialogActions>
      </Dialog>

      {/* Project Dialog */}
      <Dialog open={showProject} onClose={() => setShowProject(false)} maxWidth="lg" fullWidth>
        <DialogTitle>Hands-on Project</DialogTitle>
        <DialogContent>
          <Typography>
            Project interface will be displayed here...
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowProject(false)}>Cancel</Button>
          <Button variant="contained">Start Project</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}; 