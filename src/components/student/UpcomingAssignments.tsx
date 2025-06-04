import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Box } from '@mui/material';

interface Assignment {
  title: string;
  course: string;
  dueDate: string;
}

interface UpcomingAssignmentsProps {
  assignments: Assignment[];
}

export default function UpcomingAssignments({ assignments }: UpcomingAssignmentsProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          Upcoming Assignments
        </Typography>
        <List>
          {assignments.map((assign, idx) => (
            <ListItem
              key={idx}
              sx={{
                p: 2,
                mb: 1,
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                bgcolor: 'primary.main',
                opacity: 0.05,
                borderRadius: '0 8px 8px 0',
                '&:hover': {
                  bgcolor: 'primary.main',
                  opacity: 0.1,
                }
              }}
            >
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">
                  {assign.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Course: {assign.course}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Due: {assign.dueDate}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 