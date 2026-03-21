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
      description="From gear trains to pulley systems — a complete hands-on engineering journey with LEGO Mindstorms."
      introTitle="Your First Real Robot"
      introText={[
        "In Robot Explorers, 6-9 year olds dive into the exciting world of robotics and engineering. Through hands-on building with LEGO Mindstorms kits, students learn how gear trains, pistons, pulleys, and CAM systems work — the same mechanisms used in real-world machines.",
        "Students follow the Engineering Design Process: envision, design, build, test, and improve. Each module concludes with a Show & Tell presentation where students demonstrate their builds to parents and peers.",
      ]}
      introHighlights={[
        "LEGO Mindstorms hands-on building",
        "Gear trains, pulleys, and CAM systems",
        "Engineering Design Process methodology",
        "Show & Tell presentations each module",
      ]}
      introImage="/images/Mountain-view-classes-4.jpg"
      curriculum={[
        {
          icon: 'code',
          title: 'Mechanical Systems',
          items: [
            'Gear trains and gear ratios',
            'Piston and crank mechanisms',
            'Pulley systems and mechanical advantage',
            'CAM systems and worm gears',
          ],
        },
        {
          icon: 'build',
          title: 'Robot Building',
          items: [
            'LEGO Mindstorms assembly and construction',
            'Understanding motors, axles, and frames',
            'Building structural supports and mechanisms',
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
        'Gear train mechanism',
        'Pulley lift system',
        'Piston-powered machine',
        'CAM follower device',
        'Worm gear assembly',
        'Show & Tell presentation',
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
