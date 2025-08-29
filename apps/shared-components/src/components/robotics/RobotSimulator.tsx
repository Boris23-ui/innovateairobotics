'use client';

import { useState, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Grid, 
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from '@mui/material';
import { 
  PlayArrow, 
  Stop, 
  Refresh, 
  Settings,
  Sensors,
  Speed,
  Battery90
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface RobotState {
  position: { x: number; y: number };
  rotation: number;
  speed: number;
  battery: number;
  sensors: {
    front: number;
    left: number;
    right: number;
    back: number;
  };
  mode: 'manual' | 'autonomous' | 'programmed';
}

interface RobotSimulatorProps {
  onStateChange?: (state: RobotState) => void;
  initialMode?: 'manual' | 'autonomous' | 'programmed';
  showSensors?: boolean;
  showBattery?: boolean;
}

export const RobotSimulator: React.FC<RobotSimulatorProps> = ({
  onStateChange,
  initialMode = 'manual',
  showSensors = true,
  showBattery = true
}) => {
  const [robotState, setRobotState] = useState<RobotState>({
    position: { x: 50, y: 50 },
    rotation: 0,
    speed: 50,
    battery: 85,
    sensors: {
      front: 30,
      left: 25,
      right: 28,
      back: 35
    },
    mode: initialMode
  });

  const [isRunning, setIsRunning] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && robotState.mode === 'autonomous') {
      interval = setInterval(() => {
        setRobotState(prev => {
          const newState = { ...prev };
          
          // Simulate autonomous movement
          const angle = (prev.rotation * Math.PI) / 180;
          const speed = prev.speed / 100;
          
          newState.position.x += Math.cos(angle) * speed * simulationSpeed;
          newState.position.y += Math.sin(angle) * speed * simulationSpeed;
          
          // Boundary checking
          newState.position.x = Math.max(10, Math.min(90, newState.position.x));
          newState.position.y = Math.max(10, Math.min(90, newState.position.y));
          
          // Battery drain
          newState.battery = Math.max(0, prev.battery - 0.1);
          
          // Sensor updates
          newState.sensors.front = Math.random() * 50 + 10;
          newState.sensors.left = Math.random() * 50 + 10;
          newState.sensors.right = Math.random() * 50 + 10;
          newState.sensors.back = Math.random() * 50 + 10;
          
          return newState;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isRunning, robotState.mode, simulationSpeed]);

  useEffect(() => {
    onStateChange?.(robotState);
  }, [robotState, onStateChange]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setRobotState(prev => ({
      ...prev,
      position: { x: 50, y: 50 },
      rotation: 0,
      battery: 85
    }));
  };

  const handleManualControl = (direction: 'forward' | 'backward' | 'left' | 'right') => {
    if (robotState.mode === 'manual') {
      setRobotState(prev => {
        const newState = { ...prev };
        const speed = prev.speed / 100;
        
        switch (direction) {
          case 'forward':
            newState.position.y -= speed * 2;
            break;
          case 'backward':
            newState.position.y += speed * 2;
            break;
          case 'left':
            newState.position.x -= speed * 2;
            break;
          case 'right':
            newState.position.x += speed * 2;
            break;
        }
        
        newState.battery = Math.max(0, prev.battery - 0.5);
        return newState;
      });
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 60) return '#10b981';
    if (level > 30) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <Card className="card-hover">
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h3">
            Robot Simulator
          </Typography>
          <Chip 
            label={robotState.mode} 
            color={robotState.mode === 'autonomous' ? 'primary' : 'default'}
            size="small"
          />
        </Box>

        {/* Robot Visualization */}
        <Box sx={{ 
          position: 'relative', 
          width: '100%', 
          height: 200, 
          bgcolor: '#f8fafc', 
          border: '2px solid #e5e7eb',
          borderRadius: 2,
          mb: 2,
          overflow: 'hidden'
        }}>
          <motion.div
            style={{
              position: 'absolute',
              left: `${robotState.position.x}%`,
              top: `${robotState.position.y}%`,
              width: 20,
              height: 20,
              backgroundColor: '#2563eb',
              borderRadius: '50%',
              transform: `translate(-50%, -50%) rotate(${robotState.rotation}deg)`
            }}
            animate={{
              x: robotState.position.x * 4 - 40,
              y: robotState.position.y * 2 - 20,
            }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ 
              position: 'absolute', 
              top: -2, 
              left: '50%', 
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: '8px solid #1e40af'
            }} />
          </motion.div>

          {/* Sensor indicators */}
          {showSensors && (
            <>
              <Box sx={{
                position: 'absolute',
                left: `${robotState.position.x}%`,
                top: `${robotState.position.y - 15}%`,
                width: 4,
                height: 4,
                bgcolor: robotState.sensors.front > 20 ? '#10b981' : '#ef4444',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)'
              }} />
              <Box sx={{
                position: 'absolute',
                left: `${robotState.position.x - 15}%`,
                top: `${robotState.position.y}%`,
                width: 4,
                height: 4,
                bgcolor: robotState.sensors.left > 20 ? '#10b981' : '#ef4444',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)'
              }} />
              <Box sx={{
                position: 'absolute',
                left: `${robotState.position.x + 15}%`,
                top: `${robotState.position.y}%`,
                width: 4,
                height: 4,
                bgcolor: robotState.sensors.right > 20 ? '#10b981' : '#ef4444',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)'
              }} />
            </>
          )}
        </Box>

        {/* Controls */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              startIcon={isRunning ? <Stop /> : <PlayArrow />}
              onClick={isRunning ? handleStop : handleStart}
              fullWidth
              color={isRunning ? 'error' : 'primary'}
            >
              {isRunning ? 'Stop' : 'Start'}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={handleReset}
              fullWidth
            >
              Reset
            </Button>
          </Grid>
        </Grid>

        {/* Manual Controls */}
        {robotState.mode === 'manual' && (
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                onClick={() => handleManualControl('forward')}
                fullWidth
                sx={{ mb: 1 }}
              >
                Forward
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                onClick={() => handleManualControl('left')}
                fullWidth
              >
                Left
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                onClick={() => handleManualControl('right')}
                fullWidth
              >
                Right
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                onClick={() => handleManualControl('backward')}
                fullWidth
                sx={{ mt: 1 }}
              >
                Backward
              </Button>
            </Grid>
          </Grid>
        )}

        {/* Settings */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Speed
          </Typography>
          <Slider
            value={robotState.speed}
            onChange={(_: Event, value: number | number[]) => setRobotState(prev => ({ ...prev, speed: typeof value === 'number' ? value : prev.speed }))}
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Simulation Speed
          </Typography>
          <Slider
            value={simulationSpeed}
            onChange={(_: Event, value: number | number[]) => setSimulationSpeed(typeof value === 'number' ? value : simulationSpeed)}
            min={0.1}
            max={3}
            step={0.1}
            valueLabelDisplay="auto"
          />
        </Box>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Mode</InputLabel>
          <Select
            value={robotState.mode}
            label="Mode"
            onChange={(e) => setRobotState(prev => ({ ...prev, mode: e.target.value as any }))}
          >
            <MenuItem value="manual">Manual</MenuItem>
            <MenuItem value="autonomous">Autonomous</MenuItem>
            <MenuItem value="programmed">Programmed</MenuItem>
          </Select>
        </FormControl>

        {/* Status */}
        <Grid container spacing={2}>
          {showBattery && (
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Battery90 sx={{ color: getBatteryColor(robotState.battery) }} />
                <Typography variant="body2">
                  {Math.round(robotState.battery)}%
                </Typography>
              </Box>
            </Grid>
          )}
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Speed />
              <Typography variant="body2">
                {robotState.speed}%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}; 