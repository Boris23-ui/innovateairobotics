'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Tabs,
  Tab,
  IconButton,
  useTheme,
  Paper,
} from '@mui/material';
import {
  Search as SearchIcon,
  Book as BookIcon,
  VideoLibrary as VideoIcon,
  Code as CodeIcon,
  Download as DownloadIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from '@mui/icons-material';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'code';
  category: string;
  image: string;
  url: string;
  tags: string[];
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Getting Started with Robotics',
    description: 'A comprehensive guide to begin your robotics journey',
    type: 'article',
    category: 'Tutorials',
    image: '/images/young-robotics-engineers.jpg',
    url: '#',
    tags: ['beginner', 'robotics', 'guide'],
  },
  {
    id: '2',
    title: 'Python for Robotics',
    description: 'Learn how to program robots using Python',
    type: 'video',
    category: 'Programming',
    image: '/images/kids getting ready for class.jpg',
    url: '#',
    tags: ['python', 'programming', 'robotics'],
  },
  {
    id: '3',
    title: 'Robot Navigation System',
    description: 'Source code for an autonomous navigation system',
    type: 'code',
    category: 'Projects',
    image: '/images/IMG_0535.jpg',
    url: '#',
    tags: ['navigation', 'autonomous', 'code'],
  },
  {
    id: '4',
    title: 'AI in Robotics',
    description: 'Understanding AI applications in modern robotics',
    type: 'article',
    category: 'AI',
    image: '/images/20220810_152306.jpg',
    url: '#',
    tags: ['ai', 'robotics', 'advanced'],
  },
  {
    id: '5',
    title: 'Building Your First Drone',
    description: 'Step-by-step video tutorial on drone construction',
    type: 'video',
    category: 'Tutorials',
    image: '/images/building_drones.jpg',
    url: '#',
    tags: ['drone', 'tutorial', 'hardware'],
  },
  {
    id: '6',
    title: 'ROS Navigation Stack',
    description: 'Implementation of the ROS navigation stack',
    type: 'code',
    category: 'Programming',
    image: '/images/young-robotics-engineers.jpg',
    url: '#',
    tags: ['ros', 'navigation', 'code'],
  },
];

const categories = ['All', 'Tutorials', 'Programming', 'Projects', 'AI'];
const types = ['All', 'article', 'video', 'code'];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [bookmarkedResources, setBookmarkedResources] = useState<string[]>([]);
  const theme = useTheme();

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const toggleBookmark = (resourceId: string) => {
    setBookmarkedResources(prev =>
      prev.includes(resourceId)
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <BookIcon />;
      case 'video':
        return <VideoIcon />;
      case 'code':
        return <CodeIcon />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          color="primary"
          gutterBottom
          sx={{ mb: 6, fontWeight: 600 }}
        >
          Learning Resources
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 2,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Categories
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? 'primary' : 'default'}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Resource Types
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {types.map((type) => (
                <Chip
                  key={type}
                  label={type.charAt(0).toUpperCase() + type.slice(1)}
                  onClick={() => setSelectedType(type)}
                  color={selectedType === type ? 'primary' : 'default'}
                  variant={selectedType === type ? 'filled' : 'outlined'}
                  icon={type !== 'All' ? getTypeIcon(type) : undefined}
                />
              ))}
            </Box>
          </Box>
        </Paper>

        <Grid container spacing={4}>
          {filteredResources.map((resource) => (
            <Grid item key={resource.id} xs={12} md={6} lg={4} component="div">
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={resource.image}
                  alt={resource.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {getTypeIcon(resource.type)}
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </Typography>
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 600 }}
                  >
                    {resource.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {resource.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {resource.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        component="div"
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    fullWidth
                    sx={{ mr: 1 }}
                  >
                    Download
                  </Button>
                  <IconButton
                    color="primary"
                    onClick={() => toggleBookmark(resource.id)}
                  >
                    {bookmarkedResources.includes(resource.id) ? (
                      <BookmarkIcon />
                    ) : (
                      <BookmarkBorderIcon />
                    )}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 