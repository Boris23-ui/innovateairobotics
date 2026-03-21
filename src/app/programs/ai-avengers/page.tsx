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
      description="Advanced EV3 programming, Python, data logging, and intensive FLL/WRO competition preparation."
      introTitle="Compete at the World Level"
      introText={[
        "AI Avengers is our most advanced youth program for teens aged 13-17 ready to master robotics at a competitive level. Students work with advanced EV3 Mindstorms programming, Python, and data logging to build sophisticated autonomous systems.",
        "Through intensive preparation for First Lego League (FLL) and World Robotics Olympiad (WRO), students develop advanced sensor fusion techniques, data analytics skills, and the ability to present engineering solutions under pressure.",
      ]}
      introHighlights={[
        "Advanced Python and EV3 Mindstorms programming",
        "Data logging, analytics, and visualization",
        "Sensor fusion (color, ultrasonic, touch, infrared)",
        "FLL & WRO competition preparation",
      ]}
      introImage="/images/Palo-alto-classes-5.jpg"
      curriculum={[
        {
          icon: 'psychology',
          title: 'Advanced Programming',
          items: [
            'Python programming for robotics',
            'EV3 advanced block programming',
            'Data logging and sensor data analysis',
            'Algorithm design for autonomous behavior',
          ],
        },
        {
          icon: 'code',
          title: 'Sensor Fusion & Data',
          items: [
            'Multi-sensor fusion (IR, ultrasonic, color, touch)',
            'Data logging and real-time analytics',
            'Decision making with math models',
            'Infrared communication and remote control',
          ],
        },
        {
          icon: 'devices',
          title: 'Competition & Presentation',
          items: [
            'FLL challenge strategy and execution',
            'WRO competition rules and categories',
            'Engineering notebook documentation',
            'Presentation skills and judging prep',
          ],
        },
      ]}
      sampleProjects={[
        'FLL competition robot',
        'WRO challenge solution',
        'Data logging dashboard',
        'Multi-sensor autonomous navigator',
        'Infrared-controlled robot',
        'Engineering presentation portfolio',
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
