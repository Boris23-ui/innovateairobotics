import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Box, Button } from '@mui/material';

interface Project {
  title: string;
  status: string;
  score?: string;
  feedback: string | null;
}

interface SubmittedProjectsProps {
  projects: Project[];
}

export default function SubmittedProjects({ projects }: SubmittedProjectsProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          Submitted Projects
        </Typography>
        <List>
          {projects.map((project, idx) => (
            <ListItem
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'grey.50',
                borderRadius: 1,
                mb: 1,
                p: 2
              }}
            >
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">
                  {project.title}
                </Typography>
                <Typography variant="body2" color={project.status === 'graded' ? 'success.main' : 'warning.main'}>
                  Status: {project.status === 'graded' ? 'Graded' : 'In Review'}
                </Typography>
                {project.score && (
                  <Typography variant="body2" color="text.secondary">
                    Score: {project.score}
                  </Typography>
                )}
                {project.feedback && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {project.feedback}
                  </Typography>
                )}
              </Box>
              <Button
                variant="text"
                color="primary"
                sx={{ textTransform: 'none' }}
              >
                View Details
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 