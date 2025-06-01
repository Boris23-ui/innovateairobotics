import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon, Add as AddIcon } from '@mui/icons-material';

interface CreateCourseDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (courseData: CourseData) => void;
}

interface CourseData {
  name: string;
  description: string;
  category: string;
  level: string;
  maxStudents: number;
  startDate: string;
  endDate: string;
  tags: string[];
}

const initialCourseData: CourseData = {
  name: '',
  description: '',
  category: '',
  level: 'beginner',
  maxStudents: 30,
  startDate: '',
  endDate: '',
  tags: [],
};

export default function CreateCourseDialog({ open, onClose, onSubmit }: CreateCourseDialogProps) {
  const [courseData, setCourseData] = useState<CourseData>(initialCourseData);
  const [newTag, setNewTag] = useState('');

  const handleChange = (field: keyof CourseData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseData({ ...courseData, [field]: event.target.value });
  };

  const handleAddTag = () => {
    if (newTag && !courseData.tags.includes(newTag)) {
      setCourseData({ ...courseData, tags: [...courseData.tags, newTag] });
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setCourseData({
      ...courseData,
      tags: courseData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = () => {
    onSubmit(courseData);
    setCourseData(initialCourseData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Create New Course
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Course Name"
              value={courseData.name}
              onChange={handleChange('name')}
              required
            />
            
            <TextField
              fullWidth
              label="Description"
              value={courseData.description}
              onChange={handleChange('description')}
              multiline
              rows={4}
              required
            />

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={courseData.category}
                label="Category"
                onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}
                required
              >
                <MenuItem value="robotics">Robotics</MenuItem>
                <MenuItem value="programming">Programming</MenuItem>
                <MenuItem value="ai">Artificial Intelligence</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="mechanics">Mechanics</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Level</InputLabel>
              <Select
                value={courseData.level}
                label="Level"
                onChange={(e) => setCourseData({ ...courseData, level: e.target.value })}
                required
              >
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              type="number"
              label="Maximum Students"
              value={courseData.maxStudents}
              onChange={handleChange('maxStudents')}
              inputProps={{ min: 1, max: 100 }}
              required
            />

            <TextField
              fullWidth
              type="date"
              label="Start Date"
              value={courseData.startDate}
              onChange={handleChange('startDate')}
              InputLabelProps={{ shrink: true }}
              required
            />

            <TextField
              fullWidth
              type="date"
              label="End Date"
              value={courseData.endDate}
              onChange={handleChange('endDate')}
              InputLabelProps={{ shrink: true }}
              required
            />

            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <TextField
                  size="small"
                  label="Add Tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <Button
                  variant="contained"
                  onClick={handleAddTag}
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {courseData.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    onDelete={() => handleRemoveTag(tag)}
                  />
                ))}
              </Box>
            </Box>
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={!courseData.name || !courseData.description || !courseData.category}
        >
          Create Course
        </Button>
      </DialogActions>
    </Dialog>
  );
} 