'use client';

import { ProgramLayout } from '@/components/programs/ProgramLayout';

export default function SeniorsPage() {
  return (
    <ProgramLayout
      title="Senior Innovators"
      subtitle="It's never too late to explore — AI and robotics for lifelong learners"
      ageRange="18+ years"
      ageBadge="Ages 18+"
      accentColor="rgb(20, 184, 166)"
      accentGradient="linear-gradient(135deg, #14b8a6, #0d9488)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #134e4a 100%)"
      description="A comprehensive introduction to AI and robotics in a supportive, engaging environment."
      introTitle="Your Tech Journey Starts Here"
      introText={[
        "Senior Innovators offers adults a unique opportunity to explore the fascinating world of artificial intelligence and robotics. Whether you're enhancing professional skills, pursuing a new hobby, or staying current with technology, this program is for you.",
        "Through practical projects and interactive discussions, you'll gain hands-on experience with cutting-edge technologies and understand how AI and robotics are shaping our future.",
      ]}
      introHighlights={[
        "No prior experience needed — we start from the basics",
        "Professional development and career enhancement",
        "Hands-on projects with real hardware and software",
        "Flexible scheduling for working professionals",
      ]}
      introImage="/images/palo-alto-classes-6.jpg"
      curriculum={[
        {
          icon: 'code',
          title: 'Programming Basics',
          items: [
            'Python fundamentals from scratch',
            'Logical thinking and algorithms',
            'Data analysis and visualization',
            'Web-based tools and APIs',
          ],
        },
        {
          icon: 'build',
          title: 'Robotics Essentials',
          items: [
            'Robot assembly and mechanics',
            'Sensor integration and control',
            'Autonomous navigation basics',
            'IoT and smart device programming',
          ],
        },
        {
          icon: 'psychology',
          title: 'AI & Industry',
          items: [
            'Understanding machine learning',
            'AI applications across industries',
            'Ethical considerations in AI',
            'Future trends and opportunities',
          ],
        },
      ]}
      sampleProjects={[
        'Personal robot assistant',
        'Smart garden monitor',
        'AI chatbot builder',
        'Home automation system',
        'Data dashboard project',
        'Robotics capstone project',
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
