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
  useTheme,
  Paper,
  Divider
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Engineering as EngineeringIcon,
  Code as CodeIcon,
  Quiz as QuizIcon,
  Assignment as AssignmentIcon,
  School as SchoolIcon,
  Timer as TimerIcon,
  Star as StarIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Assignment, AssignmentType, RubricCriteria, AgeGroup } from '@shared/types';

interface AssignmentBuilderProps {
  onSave: (assignment: Partial<Assignment>) => void;
  initialAssignment?: Partial<Assignment>;
  courseId: string;
}

export const AssignmentBuilder: React.FC<AssignmentBuilderProps> = ({
  onSave,
  initialAssignment,
  courseId
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [assignment, setAssignment] = useState<Partial<Assignment>>(
    initialAssignment || {
      title: '',
      description: '',
      type: 'project' as AssignmentType,
      points: 100,
      dueDate: undefined,
      rubric: [],
      attachments: []
    }
  );

  const [newRubricCriteria, setNewRubricCriteria] = useState({
    title: '',
    description: '',
    maxPoints: 10,
    weight: 1
  });

  const steps = [
    {
      label: 'Basic Information',
      icon: <AssignmentIcon />,
      description: 'Assignment title, description, and type'
    },
    {
      label: 'Requirements & Rubric',
      icon: <EngineeringIcon />,
      description: 'Set requirements and grading criteria'
    },
    {
      label: 'Robotics Components',
      icon: <CodeIcon />,
      description: 'Add robotics-specific elements'
    }
  ];

  const assignmentTemplates = [
    {
      name: 'Robot Programming Challenge',
      type: 'coding' as AssignmentType,
      description: 'Program a robot to complete a specific task',
      icon: '🤖',
      color: theme.palette.education.explorers
    },
    {
      name: 'Sensor Integration Project',
      type: 'project' as AssignmentType,
      description: 'Build a robot that uses multiple sensors',
      icon: '📡',
      color: theme.palette.education.titans
    },
    {
      name: 'AI Robot Design',
      type: 'project' as AssignmentType,
      description: 'Design a robot with AI capabilities',
      icon: '🧠',
      color: theme.palette.education.avengers
    },
    {
      name: 'Simple Machine Construction',
      type: 'project' as AssignmentType,
      description: 'Build a simple machine using robotics principles',
      icon: '⚙️',
      color: theme.palette.education.tiny
    }
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = () => {
    onSave(assignment);
  };

  const addRubricCriteria = () => {
    if (newRubricCriteria.title.trim()) {
      const criteria: RubricCriteria = {
        id: Date.now().toString(),
        title: newRubricCriteria.title,
        description: newRubricCriteria.description,
        maxPoints: newRubricCriteria.maxPoints,
        weight: newRubricCriteria.weight
      };

      setAssignment(prev => ({
        ...prev,
        rubric: [...(prev.rubric || []), criteria]
      }));

      setNewRubricCriteria({
        title: '',
        description: '',
        maxPoints: 10,
        weight: 1
      });
    }
  };

  const removeRubricCriteria = (criteriaId: string) => {
    setAssignment(prev => ({
      ...prev,
      rubric: prev.rubric?.filter(criteria => criteria.id !== criteriaId) || []
    }));
  };

  const applyTemplate = (template: typeof assignmentTemplates[0]) => {
    setAssignment(prev => ({
      ...prev,
      type: template.type,
      title: template.name,
      description: template.description
    }));
  };

  const getAssignmentTypeColor = (type: AssignmentType) => {
    const colors = {
      'quiz': '#f59e0b',
      'project': '#10b981',
      'coding': '#3b82f6',
      'presentation': '#8b5cf6',
      'research': '#ef4444'
    };
    return colors[type] || '#6b7280';
  };

  return (
    <Card className="card-hover">
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Assignment Builder
        </Typography>

        {/* Assignment Templates */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Quick Templates
          </Typography>
          <Grid container spacing={2}>
            {assignmentTemplates.map((template, index) => (
              <Grid item xs={12} sm={6} md={3} key={template.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card 
                    className="card-hover"
                    sx={{ 
                      cursor: 'pointer',
                      border: `2px solid ${template.color}`,
                      '&:hover': {
                        borderColor: template.color,
                        transform: 'translateY(-2px)',
                      }
                    }}
                    onClick={() => applyTemplate(template)}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h2" sx={{ mb: 1 }}>
                        {template.icon}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        {template.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {template.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

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
                          label="Assignment Title"
                          value={assignment.title}
                          onChange={(e) => setAssignment(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Description"
                          multiline
                          rows={4}
                          value={assignment.description}
                          onChange={(e) => setAssignment(prev => ({ ...prev, description: e.target.value }))}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel>Assignment Type</InputLabel>
                          <Select
                            value={assignment.type}
                            label="Assignment Type"
                            onChange={(e) => setAssignment(prev => ({ ...prev, type: e.target.value as AssignmentType }))}
                          >
                            <MenuItem value="quiz">Quiz</MenuItem>
                            <MenuItem value="project">Project</MenuItem>
                            <MenuItem value="coding">Coding Challenge</MenuItem>
                            <MenuItem value="presentation">Presentation</MenuItem>
                            <MenuItem value="research">Research</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Points"
                          type="number"
                          value={assignment.points}
                          onChange={(e) => setAssignment(prev => ({ ...prev, points: parseInt(e.target.value) || 0 }))}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Due Date"
                          type="datetime-local"
                          value={assignment.dueDate ? new Date(assignment.dueDate).toISOString().slice(0, 16) : ''}
                          onChange={(e) => setAssignment(prev => ({ ...prev, dueDate: e.target.value ? new Date(e.target.value) : undefined }))}
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                    </Grid>
                  )}

                  {index === 1 && (
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Rubric Criteria
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                          <TextField
                            size="small"
                            label="Criteria Title"
                            value={newRubricCriteria.title}
                            onChange={(e) => setNewRubricCriteria(prev => ({ ...prev, title: e.target.value }))}
                          />
                          <TextField
                            size="small"
                            label="Max Points"
                            type="number"
                            value={newRubricCriteria.maxPoints}
                            onChange={(e) => setNewRubricCriteria(prev => ({ ...prev, maxPoints: parseInt(e.target.value) || 0 }))}
                          />
                          <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={addRubricCriteria}
                            disabled={!newRubricCriteria.title.trim()}
                          >
                            Add
                          </Button>
                        </Box>
                        <List dense>
                          {assignment.rubric?.map((criteria) => (
                            <ListItem key={criteria.id}>
                              <ListItemText
                                primary={criteria.title}
                                secondary={`${criteria.maxPoints} points`}
                              />
                              <ListItemSecondaryAction>
                                <IconButton
                                  edge="end"
                                  onClick={() => removeRubricCriteria(criteria.id)}
                                  size="small"
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  )}

                  {index === 2 && (
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Robotics-Specific Elements
                        </Typography>
                        <Box sx={{ 
                          bgcolor: 'background.paper', 
                          p: 3, 
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'divider'
                        }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <Card className="card-hover">
                                <CardContent>
                                  <Typography variant="h6" gutterBottom>
                                    🤖 Robot Programming
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Include code requirements for robot control
                                  </Typography>
                                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                                    Add Code Template
                                  </Button>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Card className="card-hover">
                                <CardContent>
                                  <Typography variant="h6" gutterBottom>
                                    📡 Sensor Integration
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Specify sensor requirements and usage
                                  </Typography>
                                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                                    Add Sensor Specs
                                  </Button>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Card className="card-hover">
                                <CardContent>
                                  <Typography variant="h6" gutterBottom>
                                    ⚙️ Mechanical Design
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Include mechanical design requirements
                                  </Typography>
                                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                                    Add Design Specs
                                  </Button>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Card className="card-hover">
                                <CardContent>
                                  <Typography variant="h6" gutterBottom>
                                    🧠 AI Components
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Add AI/ML requirements if applicable
                                  </Typography>
                                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                                    Add AI Specs
                                  </Button>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
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
                      {index === steps.length - 1 ? 'Create Assignment' : 'Continue'}
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

        {/* Assignment Preview */}
        {assignment.title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
              <Typography variant="h6" gutterBottom>
                Assignment Preview
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Chip
                  label={assignment.type}
                  size="small"
                  sx={{
                    backgroundColor: getAssignmentTypeColor(assignment.type!),
                    color: 'white'
                  }}
                />
                <Chip label={`${assignment.points} points`} size="small" color="primary" />
                {assignment.dueDate && (
                  <Chip 
                    label={`Due: ${new Date(assignment.dueDate).toLocaleDateString()}`} 
                    size="small" 
                    color="secondary" 
                  />
                )}
              </Box>
              <Typography variant="body2" color="text.secondary">
                {assignment.description}
              </Typography>
            </Box>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}; 