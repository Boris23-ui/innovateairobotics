'use client';

import { ProgramLayout } from '@/components/programs/ProgramLayout';

export default function AIAvengersPage() {
  return (
    <ProgramLayout
      title="AI Avengers"
      subtitle="Explore the frontier of AI and robotics — for the next generation of innovators"
      ageRange="13-17 years old"
      ageBadge="Ages 13-17"
      accentColor="rgb(139, 92, 246)"
      accentGradient="linear-gradient(135deg, #8b5cf6, #7c3aed)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #312e81 100%)"
      description="Advanced AI, machine learning, and autonomous systems for ambitious teen engineers."
      introTitle="Shape the Future with AI"
      introText={[
        "AI Avengers is our flagship program for teens aged 13-17 who are ready to explore the intersection of artificial intelligence and robotics. Students work with cutting-edge technologies and tackle real-world engineering challenges.",
        "Through advanced projects, interactive labs, and engaging discussions, students learn programming, algorithm design, and the ethical considerations of AI — preparing them for careers in technology.",
      ]}
      introHighlights={[
        "Machine learning and neural network fundamentals",
        "Advanced Python and C++ programming",
        "Autonomous systems and computer vision",
        "Ethics in AI and responsible innovation",
      ]}
      introImage="/images/Palo-alto-classes-5.jpg"
      curriculum={[
        {
          icon: 'psychology',
          title: 'Artificial Intelligence',
          items: [
            'Machine learning fundamentals',
            'Neural networks and deep learning',
            'Natural language processing basics',
            'Computer vision and image recognition',
          ],
        },
        {
          icon: 'code',
          title: 'Advanced Programming',
          items: [
            'Python for AI and data science',
            'C++ for robotics control',
            'API integration and cloud services',
            'Version control with Git',
          ],
        },
        {
          icon: 'devices',
          title: 'Autonomous Systems',
          items: [
            'Sensor fusion and SLAM',
            'Path planning algorithms',
            'Real-time decision making',
            'Human-robot interaction design',
          ],
        },
      ]}
      sampleProjects={[
        'Self-driving robot',
        'Voice-controlled assistant',
        'Object recognition system',
        'AI game player',
        'Gesture-controlled drone',
        'Smart home prototype',
      ]}
      programDetails={[
        { label: 'Age Group', value: 'Ages 13-17' },
        { label: 'Session Length', value: '120 minutes' },
        { label: 'Class Size', value: 'Max 12 students' },
        { label: 'Format', value: 'In-Person & Online' },
        { label: 'Frequency', value: 'Weekly sessions' },
        { label: 'Prerequisites', value: 'Some coding experience' },
      ]}
      detailsImage="/images/building_drones.jpg"
      ctaTitle="Ready to Change the World?"
      ctaSubtitle="The technologies that will define the future are waiting for you. Start building them today."
    />
  );
}
