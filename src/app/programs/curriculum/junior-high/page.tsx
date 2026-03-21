'use client';

import { CurriculumLayout } from '@/components/programs/CurriculumLayout';

export default function JuniorHighCurriculumPage() {
  return (
    <CurriculumLayout
      title="Junior High Curriculum"
      subtitle="Sensor mastery, closed-loop control, and autonomous robot programming"
      gradeRange="Grades 7-9 · Ages 12-15"
      accentColor="#8b5cf6"
      accentGradient="linear-gradient(135deg, #8b5cf6, #7c3aed)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #312e81 100%)"
      description="Envision it. Engineer it. Make It Work."
      overview="The Junior High curriculum takes students into advanced sensor programming, control systems, and autonomous robotics. Students master open-loop and closed-loop control with color, ultrasonic, and touch sensors. They learn mathematical modeling using sensor data, including Reflected Light Intensity (RLI), proximity detection, and acceleration measurements. The curriculum culminates with programming autonomous robot cars with collision avoidance and maintenance signaling — skills directly applicable to FLL and WRO competitions."
      skillsGained={[
        'Open-loop and closed-loop control systems',
        'Color sensor operating modes and programming',
        'Ultrasonic sensor distance measurement',
        'Touch sensor activation and deactivation',
        'Mathematical modeling with sensor data (RLI, proximity, acceleration)',
        'Infrared sensor programming',
        'Multi-sensor decision making',
        'Anti-collision robot programming',
        'Remote control and autonomous mode switching',
      ]}
      modules={[
        {
          title: 'Module One — Locomotion & Control',
          lessons: [
            { number: '01', title: 'Basics of Locomotion' },
            { number: '02', title: 'Basics of Controlling Your Robot Actions Remotely' },
            { number: '03', title: 'Basics of Controlling Your Robot Actions with Programs' },
            { number: '04', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Two — Color Sensor Mastery',
          lessons: [
            { number: '05', title: 'The Basic Operating Modes of the Color Sensor' },
            { number: '06', title: 'Using Open Loop with a Color Sensor' },
            { number: '07', title: 'Using Closed Loop with a Color Sensor' },
            { number: '08', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Three — Ultrasonic Sensor Mastery',
          lessons: [
            { number: '09', title: 'The Basic Operating Modes of the Ultrasonic Sensor' },
            { number: '10', title: 'Using Open Loop with an Ultrasonic Sensor' },
            { number: '11', title: 'Using Closed Loop with an Ultrasonic Sensor' },
            { number: '12', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Four — Touch Sensor Mastery',
          lessons: [
            { number: '13', title: 'The Basic Operating Modes of the Touch Sensor' },
            { number: '14', title: 'Using Closed Loop with Touch Sensor to Activate Your Robot' },
            { number: '15', title: 'Using Closed Loop with Touch Sensor to Deactivate Your Robot' },
            { number: '16', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Five — Math Modeling with Sensors',
          lessons: [
            { number: '17', title: 'The Measure Mode of the Color Sensor Using Math Model (RLI)' },
            { number: '18', title: 'The Measure Mode of the Infrared Sensor Using Math Model (Proximity)' },
            { number: '19', title: 'The Measure Mode of the Ultrasonic Sensor Using Math Model (Acceleration)' },
            { number: '20', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Six — Autonomous Robot Car',
          lessons: [
            { number: '21', title: 'Programming Your Robot Car: Four Ways to Start' },
            { number: '22', title: 'Programming Your Robot for Anti-Collision Function' },
            { number: '23', title: 'Programming Your Robot to Signal Maintenance' },
            { number: '24', title: 'Show & Tell' },
          ],
        },
      ]}
      programLink="/programs/ai-avengers"
      programName="AI Avengers Program"
    />
  );
}
