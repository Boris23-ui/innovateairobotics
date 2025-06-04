import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface Badge {
  title: string;
  description: string;
  earned: boolean;
}

export default function BadgesOverview() {
  const badges: Badge[] = [
    { title: "First Robot Built", description: "Complete your first build using LEGO WeDo.", earned: true },
    { title: "Sensor Master", description: "Use 2+ sensors in one project.", earned: false },
    { title: "Team Player", description: "Participate in a group challenge.", earned: true },
    { title: "Code Champion", description: "Finish all coding exercises.", earned: true }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          Your Achievements
        </Typography>
        <List>
          {badges.map((badge, idx) => (
            <ListItem 
              key={idx}
              sx={{ 
                opacity: badge.earned ? 1 : 0.7,
                py: 1
              }}
            >
              <ListItemIcon>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: badge.earned ? 'warning.light' : 'grey.100',
                    color: badge.earned ? 'warning.main' : 'grey.500'
                  }}
                >
                  {badge.earned ? (
                    <StarIcon />
                  ) : (
                    <StarBorderIcon />
                  )}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="medium">
                    {badge.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    {badge.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 