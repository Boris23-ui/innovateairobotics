'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Avatar,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
  Paper,
  Badge
} from '@mui/material';
import {
  Star as StarIcon,
  EmojiEvents as TrophyIcon,
  School as SchoolIcon,
  Engineering as EngineeringIcon,
  Code as CodeIcon,
  Science as ScienceIcon,
  TrendingUp as TrendingIcon,
  Celebration as CelebrationIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Badge as BadgeType, BadgeCategory } from '@shared/types';

interface BadgeSystemProps {
  userId: string;
  onBadgeEarned?: (badge: BadgeType) => void;
}

export const BadgeSystem: React.FC<BadgeSystemProps> = ({
  userId,
  onBadgeEarned
}) => {
  const theme = useTheme();
  const [badges, setBadges] = useState<BadgeType[]>([]);
  const [selectedBadge, setSelectedBadge] = useState<BadgeType | null>(null);
  const [showBadgeDialog, setShowBadgeDialog] = useState(false);

  // Mock badges data - replace with actual API call
  useEffect(() => {
    const mockBadges: BadgeType[] = [
      {
        id: '1',
        name: 'First Steps',
        description: 'Complete your first lesson',
        image: '/badges/first-steps.png',
        category: 'achievement',
        criteria: {
          type: 'completion',
          value: 1,
          description: 'Complete 1 lesson'
        },
        points: 10,
        isUnlocked: true,
        unlockedAt: new Date('2024-01-15')
      },
      {
        id: '2',
        name: 'Robot Explorer',
        description: 'Complete 5 robotics lessons',
        image: '/badges/robot-explorer.png',
        category: 'skill',
        criteria: {
          type: 'completion',
          value: 5,
          description: 'Complete 5 robotics lessons'
        },
        points: 25,
        isUnlocked: true,
        unlockedAt: new Date('2024-01-20')
      },
      {
        id: '3',
        name: 'Code Master',
        description: 'Write 100 lines of robot code',
        image: '/badges/code-master.png',
        category: 'skill',
        criteria: {
          type: 'custom',
          value: 100,
          description: 'Write 100 lines of code'
        },
        points: 50,
        isUnlocked: false
      },
      {
        id: '4',
        name: 'AI Pioneer',
        description: 'Complete an AI-powered robot project',
        image: '/badges/ai-pioneer.png',
        category: 'achievement',
        criteria: {
          type: 'completion',
          value: 1,
          description: 'Complete AI project'
        },
        points: 100,
        isUnlocked: false
      },
      {
        id: '5',
        name: 'Consistent Learner',
        description: 'Study for 7 days in a row',
        image: '/badges/consistent-learner.png',
        category: 'participation',
        criteria: {
          type: 'streak',
          value: 7,
          description: '7-day learning streak'
        },
        points: 30,
        isUnlocked: false
      },
      {
        id: '6',
        name: 'Perfect Score',
        description: 'Get 100% on a quiz',
        image: '/badges/perfect-score.png',
        category: 'achievement',
        criteria: {
          type: 'score',
          value: 100,
          description: 'Score 100% on any quiz'
        },
        points: 75,
        isUnlocked: false
      }
    ];
    setBadges(mockBadges);
  }, []);

  const getBadgeIcon = (category: BadgeCategory) => {
    switch (category) {
      case 'achievement':
        return <TrophyIcon />;
      case 'participation':
        return <SchoolIcon />;
      case 'skill':
        return <EngineeringIcon />;
      case 'special':
        return <StarIcon />;
      default:
        return <StarIcon />;
    }
  };

  const getBadgeColor = (category: BadgeCategory) => {
    switch (category) {
      case 'achievement':
        return '#fbbf24'; // Amber
      case 'participation':
        return '#10b981'; // Emerald
      case 'skill':
        return '#3b82f6'; // Blue
      case 'special':
        return '#8b5cf6'; // Purple
      default:
        return '#6b7280'; // Gray
    }
  };

  const getCategoryColor = (category: BadgeCategory) => {
    switch (category) {
      case 'achievement':
        return 'warning';
      case 'participation':
        return 'success';
      case 'skill':
        return 'primary';
      case 'special':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const handleBadgeClick = (badge: BadgeType) => {
    setSelectedBadge(badge);
    setShowBadgeDialog(true);
  };

  const unlockedBadges = badges.filter(badge => badge.isUnlocked);
  const lockedBadges = badges.filter(badge => !badge.isUnlocked);
  const totalPoints = unlockedBadges.reduce((sum, badge) => sum + badge.points, 0);

  const stats = {
    total: badges.length,
    unlocked: unlockedBadges.length,
    locked: lockedBadges.length,
    totalPoints,
    completionRate: (unlockedBadges.length / badges.length) * 100
  };

  return (
    <Box>
      {/* Stats Overview */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="card-hover">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h4" component="div">
                      {stats.unlocked}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Badges Earned
                    </Typography>
                  </Box>
                  <TrophyIcon sx={{ fontSize: 40, color: 'warning.main' }} />
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="card-hover">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h4" component="div">
                      {stats.totalPoints}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Points
                    </Typography>
                  </Box>
                  <StarIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="card-hover">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h4" component="div">
                      {Math.round(stats.completionRate)}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Completion Rate
                    </Typography>
                  </Box>
                  <TrendingIcon sx={{ fontSize: 40, color: 'success.main' }} />
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card className="card-hover">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h4" component="div">
                      {stats.locked}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Badges Remaining
                    </Typography>
                  </Box>
                  <SchoolIcon sx={{ fontSize: 40, color: 'info.main' }} />
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Progress Bar */}
      <Card className="card-hover" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Badge Progress
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {stats.unlocked} of {stats.total} badges earned
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Math.round(stats.completionRate)}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={stats.completionRate}
            sx={{
              height: 12,
              borderRadius: 6,
              backgroundColor: '#e5e7eb',
              '& .MuiLinearProgress-bar': {
                borderRadius: 6,
                background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
              }
            }}
          />
        </CardContent>
      </Card>

      {/* Unlocked Badges */}
      <Typography variant="h5" gutterBottom>
        Earned Badges
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {unlockedBadges.map((badge, index) => (
          <Grid item xs={12} sm={6} md={4} key={badge.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card 
                className="card-hover"
                sx={{ 
                  cursor: 'pointer',
                  border: `2px solid ${getBadgeColor(badge.category)}`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 25px ${getBadgeColor(badge.category)}40`,
                  }
                }}
                onClick={() => handleBadgeClick(badge)}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Badge
                    badgeContent={<CheckIcon sx={{ fontSize: 16 }} />}
                    color="success"
                    sx={{ mb: 2 }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: getBadgeColor(badge.category),
                        fontSize: '2rem'
                      }}
                    >
                      {getBadgeIcon(badge.category)}
                    </Avatar>
                  </Badge>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {badge.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {badge.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Chip
                      label={badge.category}
                      size="small"
                      color={getCategoryColor(badge.category)}
                    />
                    <Chip
                      label={`${badge.points} pts`}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  {badge.unlockedAt && (
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      Earned {badge.unlockedAt.toLocaleDateString()}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Locked Badges */}
      <Typography variant="h5" gutterBottom>
        Available Badges
      </Typography>
      <Grid container spacing={2}>
        {lockedBadges.map((badge, index) => (
          <Grid item xs={12} sm={6} md={4} key={badge.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card 
                className="card-hover"
                sx={{ 
                  cursor: 'pointer',
                  opacity: 0.6,
                  '&:hover': {
                    opacity: 0.8,
                    transform: 'translateY(-2px)',
                  }
                }}
                onClick={() => handleBadgeClick(badge)}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: 'grey.400',
                      fontSize: '2rem',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    {getBadgeIcon(badge.category)}
                  </Avatar>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {badge.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {badge.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Chip
                      label={badge.category}
                      size="small"
                      color={getCategoryColor(badge.category)}
                    />
                    <Chip
                      label={`${badge.points} pts`}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    {badge.criteria.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Badge Detail Dialog */}
      <Dialog open={showBadgeDialog} onClose={() => setShowBadgeDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedBadge?.name}
        </DialogTitle>
        <DialogContent>
          {selectedBadge && (
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: selectedBadge.isUnlocked ? getBadgeColor(selectedBadge.category) : 'grey.400',
                  fontSize: '3rem',
                  mx: 'auto',
                  mb: 3
                }}
              >
                {getBadgeIcon(selectedBadge.category)}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {selectedBadge.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {selectedBadge.description}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
                <Chip
                  label={selectedBadge.category}
                  color={getCategoryColor(selectedBadge.category)}
                />
                <Chip
                  label={`${selectedBadge.points} points`}
                  variant="outlined"
                />
              </Box>
              <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
                <Typography variant="subtitle2" gutterBottom>
                  How to Earn:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedBadge.criteria.description}
                </Typography>
              </Paper>
              {selectedBadge.isUnlocked && selectedBadge.unlockedAt && (
                <Box sx={{ mt: 2, p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
                  <Typography variant="body2" color="white">
                    ✅ Earned on {selectedBadge.unlockedAt.toLocaleDateString()}
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowBadgeDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}; 