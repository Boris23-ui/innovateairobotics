'use client';

import { ProgramLayout } from '@/components/programs/ProgramLayout';

export default function SeniorsPage() {
  return (
    <ProgramLayout
      title="Senior Innovators"
      subtitle="Become a certified STEM Robotics Trainer — lead the next generation"
      ageRange="18+ years"
      ageBadge="Ages 18+"
      accentColor="rgb(20, 184, 166)"
      accentGradient="linear-gradient(135deg, #14b8a6, #0d9488)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #134e4a 100%)"
      description="Teacher training and certification, advanced EV3 programming, data analytics, and UAV/drone education."
      introTitle="Train, Certify, and Lead"
      introText={[
        "Senior Innovators is designed for educators, professionals, and lifelong learners who want to become certified STEM Robotics Trainers. Through comprehensive training on EV3 LEGO Mindstorms, curriculum delivery, and classroom management, participants gain the skills to teach robotics at any level.",
        "The program also covers advanced topics including data logging and analytics, UAV/drone fundamentals, and Python programming — preparing participants to lead STEM programs in schools, camps, and community organizations worldwide.",
      ]}
      introHighlights={[
        "STEM Robotics Trainer certification program",
        "Complete EV3 LEGO Mindstorms mastery",
        "UAV/drone education fundamentals",
        "Flexible scheduling for working professionals",
      ]}
      introImage="/images/senior_image.png"
      curriculum={[
        {
          icon: 'code',
          title: 'Teacher Certification',
          items: [
            'EV3 Mindstorms curriculum delivery training',
            'Classroom management for STEM labs',
            'Assessment and student progress tracking',
            'Certification exam preparation',
          ],
        },
        {
          icon: 'build',
          title: 'Advanced EV3 & Drones',
          items: [
            'Advanced EV3 programming and sensor integration',
            'UAV/drone principles and operation',
            'Robot design for all age groups',
            'Holiday camp and workshop planning',
          ],
        },
        {
          icon: 'psychology',
          title: 'Data & Analytics',
          items: [
            'Data logging with EV3 sensors',
            'Data visualization and analytics',
            'Python for data analysis',
            'Curriculum development for STEM programs',
          ],
        },
      ]}
      sampleProjects={[
        'Complete EV3 teaching module',
        'Student assessment rubric design',
        'UAV/drone demonstration flight',
        'Data logging lab exercise',
        'Holiday camp curriculum plan',
        'Certification capstone project',
      ]}
      programDetails={[
        { label: 'Age Group', value: 'Ages 18+' },
        { label: 'Session Length', value: '120 minutes' },
        { label: 'Class Size', value: 'Max 15 students' },
        { label: 'Format', value: 'In-Person & Online' },
        { label: 'Frequency', value: 'Weekly sessions' },
        { label: 'Prerequisites', value: 'None required' },
      ]}
      detailsImage="/images/mobile robot + gripper.jpg"
      ctaTitle="Never Stop Learning"
      ctaSubtitle="The future belongs to the curious. Join a community of lifelong learners and innovators."
    />
  );
}
