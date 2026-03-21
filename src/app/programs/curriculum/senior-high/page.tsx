'use client';

import { CurriculumLayout } from '@/components/programs/CurriculumLayout';

export default function SeniorHighCurriculumPage() {
  return (
    <CurriculumLayout
      title="Senior High Curriculum"
      subtitle="Data logging, analytics, regression analysis, and advanced autonomous systems"
      gradeRange="Grades 10-12 · Ages 15-18"
      accentColor="#f59e0b"
      accentGradient="linear-gradient(135deg, #f59e0b, #d97706)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #422006 100%)"
      description="Envision it. Engineer it. Make It Work."
      overview="The Senior High curriculum covers advanced data logging, analytics, and autonomous decision-making with EV3 robots. Students learn to measure the reflection index of objects, perform data sampling and visualization, build mathematical models using sensor data, and create decision-making systems using logic gates. They tackle real-world applications like mining robotics, blood drawing simulation, and autonomous mineral searching — building the analytical and programming skills needed for engineering careers and world-class robotics competitions."
      skillsGained={[
        'Reflection index measurement and analysis',
        'Sensor data sampling and display',
        'Mathematical function modeling with robot data',
        'OR gate decision making with multiple sensors',
        'Data reporting at high frequency intervals',
        'Regression analysis with color sensors and variables',
        'Trigger-point programming for environmental monitoring',
        'Value storage and retrieval in programs',
        'Autonomous navigation with cliff avoidance',
        'Random search algorithms for object detection',
      ]}
      modules={[
        {
          title: 'Module One — Measurement & Applications',
          lessons: [
            { number: '01', title: 'Measuring the Reflection Index of Different Objects' },
            { number: '02', title: 'Mining with Robotics' },
            { number: '03', title: 'Blood Drawing Simulation' },
            { number: '04', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Two — Data Modeling & Logic',
          lessons: [
            { number: '05', title: 'Sampling Sensor Readings and Displaying Data' },
            { number: '06', title: 'Robot Data Modeling: The Math Function' },
            { number: '07', title: 'Decision Making Based on Two Inputs: The OR Gate with Two Sensors' },
            { number: '08', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Three — Advanced Data Analysis',
          lessons: [
            { number: '09', title: 'Decision Making with the OR Gate: Motor and Sensor' },
            { number: '10', title: 'Data Reporting on a Quarter-Second Frequency' },
            { number: '11', title: 'Regression Analysis with Color Sensor, Math Blocks, and Variables' },
            { number: '12', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Four — Triggers & Storage',
          lessons: [
            { number: '13', title: 'Setting Up a Trigger Point in Brightness and Giving Warning' },
            { number: '14', title: 'Store a Value and Use It Later' },
            { number: '15', title: 'Drive Until a Black Line Is Reached: Open Loop Using Color Mode' },
            { number: '16', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Five — Autonomous Navigation',
          lessons: [
            { number: '17', title: 'Drive Until a Black Line Is Reached Using Reflected Light Intensity Mode' },
            { number: '18', title: 'Moving on the Table Avoiding the Cliffs' },
            { number: '19', title: 'Decision Loop with Color Sensors' },
            { number: '20', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Six — Advanced Autonomy',
          lessons: [
            { number: '21', title: 'Setting a Range of Change Before Taking Action' },
            { number: '22', title: 'Display a Reflected Light Meter: How Bright Is It in the Room?' },
            { number: '23', title: 'Going Around Randomly Searching for a Gold Mineral' },
            { number: '24', title: 'Show & Tell' },
          ],
        },
      ]}
      programLink="/programs/ai-avengers"
      programName="AI Avengers Program"
    />
  );
}
