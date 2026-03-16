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
      heroGradient="linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)"
      description="Advanced robotics and coding for students ready to take their skills to the next level."
      introTitle="Engineer Your Future"
      introText={[
        "Tech Titans is designed for 10-12 year olds ready to dive into the cutting-edge world of AI and Robotics. Students design, build, and program intelligent robots through hands-on projects and exciting competitions.",
        "Through engaging challenges and real-world problem-solving, students learn coding, mechanical design, and teamwork skills that prepare them for the future of technology.",
      ]}
      introHighlights={[
        "Python and text-based programming",
        "Competition-ready robot design",
        "Advanced sensor integration and control",
        "Team-based engineering challenges",
      ]}
      introImage="/images/Mountain-view-classes-8.jpg"
      curriculum={[
        {
          icon: 'code',
          title: 'Programming',
          items: [
            'Python fundamentals and syntax',
            'Algorithm design and optimization',
            'Sensor-driven decision making',
            'Autonomous navigation programming',
          ],
        },
        {
          icon: 'build',
          title: 'Advanced Building',
          items: [
            'Complex mechanical assemblies',
            'Custom robot chassis design',
            'Multi-sensor integration',
            'Competition robot optimization',
          ],
        },
        {
          icon: 'science',
          title: 'Engineering Skills',
          items: [
            'Design thinking methodology',
            'Iterative prototyping process',
            'Data collection and analysis',
            'Presentation and documentation',
          ],
        },
      ]}
      sampleProjects={[
        'Sumo wrestling bot',
        'Autonomous delivery robot',
        'Robotic arm gripper',
        'Line-following racer',
        'Sensor fusion challenge',
        'Team competition bot',
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
