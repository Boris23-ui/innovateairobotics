'use client';

import { ProgramLayout } from '@/components/programs/ProgramLayout';

export default function RobotExplorersPage() {
  return (
    <ProgramLayout
      title="Robot Explorers"
      subtitle="Build, code, and discover — where young engineers come alive"
      ageRange="6-9 years old"
      ageBadge="Ages 6-9"
      accentColor="rgb(16, 185, 129)"
      accentGradient="linear-gradient(135deg, #10b981, #059669)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #052e16 100%)"
      description="From block coding to building working robots — a complete beginner journey."
      introTitle="Your First Real Robot"
      introText={[
        "In Robot Explorers, 6-9 year olds dive into the exciting world of AI and Robotics. Through hands-on activities and guided projects, students learn to build and program their own robots using age-appropriate tools.",
        "Using sensors, algorithms, and mini-competitions, students develop critical thinking and problem-solving skills. Our internationally recognized curriculum ensures every child gets a solid foundation in STEM.",
      ]}
      introHighlights={[
        "LEGO Mindstorms and Scratch-based coding",
        "Real hardware — build robots from the ground up",
        "Small class sizes for personalized learning",
        "Project portfolios showcased to parents",
      ]}
      introImage="/images/Mountain-view-classes-4.jpg"
      curriculum={[
        {
          icon: 'code',
          title: 'Block Coding',
          items: [
            'Drag-and-drop visual programming',
            'Sequences, loops, and conditionals',
            'Event-driven programming concepts',
            'Debugging and testing your programs',
          ],
        },
        {
          icon: 'build',
          title: 'Robot Building',
          items: [
            'Mechanical assembly with guided kits',
            'Understanding gears, motors, and sensors',
            'Designing autonomous robot pathways',
            'Iterative build-test-improve cycles',
          ],
        },
        {
          icon: 'person',
          title: 'STEM Foundations',
          items: [
            'Physics of motion and forces',
            'Sensor data and measurement',
            'Mathematical thinking through coding',
            'Scientific method in engineering',
          ],
        },
      ]}
      sampleProjects={[
        'Line-following robot',
        'Obstacle avoider',
        'Maze solver',
        'Light-sensitive robot',
        'Sound-reactive toy',
        'Mini competition bot',
      ]}
      programDetails={[
        { label: 'Age Group', value: 'Ages 6-9' },
        { label: 'Session Length', value: '60-75 minutes' },
        { label: 'Class Size', value: 'Max 10 students' },
        { label: 'Format', value: 'In-Person & Online' },
        { label: 'Frequency', value: 'Weekly sessions' },
        { label: 'Prerequisites', value: 'None required' },
      ]}
      detailsImage="/images/young-robotics-engineers.jpg"
      ctaTitle="Start Your Robotics Journey"
      ctaSubtitle="Every great engineer started somewhere. This is your child's beginning."
    />
  );
}
