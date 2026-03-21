'use client';

import { ProgramLayout } from '@/components/programs/ProgramLayout';

export default function TinyTinkerersPage() {
  return (
    <ProgramLayout
      title="Tiny Tinkerers"
      subtitle="Where little hands discover big engineering ideas"
      ageRange="5 & Under"
      ageBadge="Ages 5 & Under"
      accentColor="rgb(244, 114, 182)"
      accentGradient="linear-gradient(135deg, #f472b6, #ec4899)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #4a1942 100%)"
      description="A playful, age-appropriate introduction to early engineering, simple machines, and LEGO construction."
      introTitle="Build Your First Machines"
      introText={[
        "Tiny Tinkerers introduces children aged 5 and under to the exciting world of engineering through hands-on play with LEGO bricks. Little learners discover how simple machines work — levers, wheels, and basic structures — while building their very first creations.",
        "Our curriculum uses play-based learning to build early STEM foundations. Children construct their first machines, explore cause-and-effect relationships, and present their creations in fun Show & Tell sessions!",
      ]}
      introHighlights={[
        "LEGO brick building and early construction",
        "Simple machines: levers, wheels, and ramps",
        "Cause-and-effect exploration",
        "Show & Tell presentations to parents",
      ]}
      introImage="/images/Kids sorting kit components.jpg"
      curriculum={[
        {
          icon: 'smarttoy',
          title: 'Early Building',
          items: [
            'Build structures with LEGO bricks',
            'Explore wheels, axles, and ramps',
            'Simple lever and balance activities',
            'Storytelling about machines and inventions',
          ],
        },
        {
          icon: 'science',
          title: 'Early STEM',
          items: [
            'Shapes and structures in building',
            'Counting gears and wheels',
            'Simple problem-solving through construction',
            'Exploring how things move and connect',
          ],
        },
        {
          icon: 'person',
          title: 'Social Skills',
          items: [
            'Taking turns and sharing materials',
            'Working together on building tasks',
            'Show & Tell presentation practice',
            'Building confidence through play',
          ],
        },
      ]}
      sampleProjects={[
        'LEGO tower challenge',
        'Simple ramp and ball run',
        'Lever seesaw build',
        'Wheel and axle car',
        'Bridge building challenge',
        'Show & Tell presentation',
      ]}
      programDetails={[
        { label: 'Age Group', value: 'Ages 3-5' },
        { label: 'Session Length', value: '45 minutes' },
        { label: 'Class Size', value: 'Max 8 students' },
        { label: 'Format', value: 'In-Person only' },
        { label: 'Frequency', value: 'Weekly sessions' },
        { label: 'Prerequisites', value: 'None required' },
      ]}
      detailsImage="/images/kids getting ready for class.jpg"
      ctaTitle="Start Their STEM Journey Early"
      ctaSubtitle="The best time to spark a love for engineering is right now. Give your child the gift of curiosity."
    />
  );
}
