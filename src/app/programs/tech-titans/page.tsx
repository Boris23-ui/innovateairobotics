'use client';

import { ProgramLayout } from '@/components/programs/ProgramLayout';

export default function TechTitansPage() {
  return (
    <ProgramLayout
      title="Tech Titans"
      subtitle="Design, build, and compete — where innovation meets engineering"
      ageRange="10-12 years old"
      ageBadge="Ages 10-12"
      accentColor="rgb(59, 130, 246)"
      accentGradient="linear-gradient(135deg, #3b82f6, #2563eb)"
      heroGradient="linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)"
      description="EV3 Mindstorms programming, sensor integration, and competition-ready robot design."
      introTitle="Engineer Your Future"
      introText={[
        "Tech Titans is designed for 10-12 year olds ready to program intelligent robots using EV3 LEGO Mindstorms. Students integrate color sensors, ultrasonic sensors, and touch sensors with their robot builds while mastering gear ratios and locomotion systems.",
        "Through Scratch and EV3 Mindstorms software, students program autonomous behaviors and begin preparing for First Lego League (FLL) competitions — developing the skills and confidence for real engineering challenges.",
      ]}
      introHighlights={[
        "EV3 Mindstorms programming (Scratch & EV3 software)",
        "Color, ultrasonic, and touch sensor integration",
        "Gear ratios and locomotion systems",
        "First Lego League (FLL) competition prep",
      ]}
      introImage="/images/Mountain-view-classes-8.jpg"
      curriculum={[
        {
          icon: 'code',
          title: 'Programming',
          items: [
            'EV3 Mindstorms block programming',
            'Scratch-based visual programming',
            'Sensor-driven decision making',
            'Autonomous navigation programming',
          ],
        },
        {
          icon: 'build',
          title: 'Advanced Building',
          items: [
            'Gear ratio calculation and optimization',
            'Locomotion systems (wheeled, tracked, walking)',
            'Multi-sensor robot integration',
            'Competition-ready robot design',
          ],
        },
        {
          icon: 'science',
          title: 'Engineering Skills',
          items: [
            'Engineering Design Process mastery',
            'Iterative prototyping process',
            'Data collection from sensors',
            'FLL challenge strategy and Show & Tell',
          ],
        },
      ]}
      sampleProjects={[
        'Line-following robot',
        'Ultrasonic obstacle avoider',
        'Color-sorting robot',
        'FLL challenge robot',
        'Gear ratio speed test',
        'Show & Tell competition demo',
      ]}
      programDetails={[
        { label: 'Age Group', value: 'Ages 10-12' },
        { label: 'Session Length', value: '90 minutes' },
        { label: 'Class Size', value: 'Max 12 students' },
        { label: 'Format', value: 'In-Person & Online' },
        { label: 'Frequency', value: 'Weekly sessions' },
        { label: 'Prerequisites', value: 'Basic coding helpful' },
      ]}
      detailsImage="/images/kids_designing_simple_machines.jpg"
      ctaTitle="Ready to Build Something Amazing?"
      ctaSubtitle="Join the next generation of engineers, innovators, and problem-solvers."
    />
  );
}
