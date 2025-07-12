'use client';

import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useTheme
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  School as SchoolIcon,
  Engineering as EngineeringIcon,
  Code as CodeIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Course, AgeGroup, Difficulty } from '@shared/types';

interface CourseBuilderProps {
  onSave: (course: Partial<Course>) => void;
  initialCourse?: Partial<Course>;
}

export const CourseBuilder: React.FC<CourseBuilderProps> = ({
  onSave,
  initialCourse
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [course, setCourse] = useState<Partial<Course>>(
    initialCourse || {
      title: '',
      description: '',
      ageGroup: 'Robot Explorers' as AgeGroup,
      difficulty: 'Beginner' as Difficulty,
      duration: '',
      lessons: 0,
      rating: 0,
      enrolledStudents: 0,
      tags: [],
      learningObjectives: [],
      prerequisites: []
    }
  );

  const [newTag, setNewTag] = useState('');
  const [newObjective, setNewObjective] = useState('');
  const [newPrerequisite, setNewPrerequisite] = useState('');

  const steps = [
    {
      label: 'Basic Information',
      icon: <SchoolIcon />,
      description: 'Course title, description, and basic details'
    },
    {
      label: 'Target Audience',
      icon: <EngineeringIcon />,
      description: 'Age group, difficulty, and prerequisites'
    },
    {
      label: 'Learning Objectives',
      icon: <CodeIcon />,
      description: 'What students will learn and achieve'
    }
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = () => {
    onSave(course);
  };

  const addTag = () => {
    if (newTag.trim() && !course.tags?.includes(newTag.trim())) {
      setCourse(prev => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setCourse(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

  const addObjective = () => {
    if (newObjective.trim() && !course.learningObjectives?.includes(newObjective.trim())) {
      setCourse(prev => ({
        ...prev,
        learningObjectives: [...(prev.learningObjectives || []), newObjective.trim()]
      }));
      setNewObjective('');
    }
  };

  const removeObjective = (objectiveToRemove: string) => {
    setCourse(prev => ({
      ...prev,
      learningObjectives: prev.learningObjectives?.filter(obj => obj !== objectiveToRemove) || []
    }));
  };

  const addPrerequisite = () => {
    if (newPrerequisite.trim() && !course.prerequisites?.includes(newPrerequisite.trim())) {
      setCourse(prev => ({
        ...prev,
        prerequisites: [...(prev.prerequisites || []), newPrerequisite.trim()]
      }));
      setNewPrerequisite('');
    }
  };

  const removePrerequisite = (prerequisiteToRemove: string) => {
    setCourse(prev => ({
      ...prev,
      prerequisites: prev.prerequisites?.filter(prereq => prereq !== prerequisiteToRemove) || []
    }));
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

  return (
    <Card className="card-hover">
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Course Builder
        </Typography>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={() => step.icon}
                sx={{ '& .MuiStepLabel-label': { fontWeight: 600 } }}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {step.description}
                  </Typography>

                  {index === 0 && (
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Course Title"
                          value={course.title}
                          onChange={(e) => setCourse(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Description"
                          multiline
                          rows={4}
                          value={course.description}
                          onChange={(e) => setCourse(prev => ({ ...prev, description: e.target.value }))}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Duration"
                          value={course.duration}
                          onChange={(e) => setCourse(prev => ({ ...prev, duration: e.target.value }))}
                          placeholder="e.g., 8 weeks, 12 hours"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Number of Lessons"
                          type="number"
                          value={course.lessons}
                          onChange={(e) => setCourse(prev => ({ ...prev, lessons: parseInt(e.target.value) || 0 }))}
                        />
                      </Grid>
                    </Grid>
                  )}

                  {index === 1 && (
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel>Age Group</InputLabel>
                          <Select
                            value={course.ageGroup}
                            label="Age Group"
                            onChange={(e) => setCourse(prev => ({ ...prev, ageGroup: e.target.value as AgeGroup }))}
                          >
                            <MenuItem value="Tiny Tinkerers">Tiny Tinkerers (Ages 5 & Under)</MenuItem>
                            <MenuItem value="Robot Explorers">Robot Explorers (Ages 6-9)</MenuItem>
                            <MenuItem value="Tech Titans">Tech Titans (Ages 10-12)</MenuItem>
                            <MenuItem value="AI Avengers">AI Avengers (AI Introduction)</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel>Difficulty</InputLabel>
                          <Select
                            value={course.difficulty}
                            label="Difficulty"
                            onChange={(e) => setCourse(prev => ({ ...prev, difficulty: e.target.value as Difficulty }))}
                          >
                            <MenuItem value="Beginner">Beginner</MenuItem>
                            <MenuItem value="Intermediate">Intermediate</MenuItem>
                            <MenuItem value="Advanced">Advanced</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Prerequisites
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                          <TextField
                            size="small"
                            placeholder="Add prerequisite"
                            value={newPrerequisite}
                            onChange={(e) => setNewPrerequisite(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addPrerequisite()}
                          />
                          <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={addPrerequisite}
                            disabled={!newPrerequisite.trim()}
                          >
                            Add
                          </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {course.prerequisites?.map((prereq, idx) => (
                            <Chip
                              key={idx}
                              label={prereq}
                              onDelete={() => removePrerequisite(prereq)}
                              color="primary"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  )}

                  {index === 2 && (
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Learning Objectives
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                          <TextField
                            fullWidth
                            size="small"
                            placeholder="What will students learn?"
                            value={newObjective}
                            onChange={(e) => setNewObjective(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addObjective()}
                          />
                          <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={addObjective}
                            disabled={!newObjective.trim()}
                          >
                            Add
                          </Button>
                        </Box>
                        <List dense>
                          {course.learningObjectives?.map((objective, idx) => (
                            <ListItem key={idx}>
                              <ListItemText primary={objective} />
                              <ListItemSecondaryAction>
                                <IconButton
                                  edge="end"
                                  onClick={() => removeObjective(objective)}
                                  size="small"
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Tags
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                          <TextField
                            size="small"
                            placeholder="Add tag"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addTag()}
                          />
                          <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={addTag}
                            disabled={!newTag.trim()}
                          >
                            Add
                          </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {course.tags?.map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag}
                              onDelete={() => removeTag(tag)}
                              color="secondary"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  )}

                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      onClick={index === steps.length - 1 ? handleSave : handleNext}
                      sx={{ mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Save Course' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                  </Box>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {/* Course Preview */}
        {course.title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
              <Typography variant="h6" gutterBottom>
                Course Preview
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip
                  label={course.ageGroup}
                  size="small"
                  sx={{
                    backgroundColor: getAgeGroupColor(course.ageGroup!),
                    color: 'white'
                  }}
                />
                <Chip label={course.difficulty} size="small" color="primary" />
              </Box>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
            </Box>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}; 