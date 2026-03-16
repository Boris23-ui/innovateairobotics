'use client';

import { ProgramLayout } from '@/components/programs/ProgramLayout';

export default function TinyTinkerersPage() {
  return (
    <ProgramLayout
      title="Tiny Tinkerers"
      subtitle="Where little hands build big dreams — robotics for our youngest learners"
      ageRange="5 & Under"
      ageBadge="Ages 5 & Under"
      accentColor="rgb(244, 114, 182)"
      accentGradient="linear-gradient(135deg, #f472b6, #ec4899)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #4a1942 100%)"
      description="A playful, age-appropriate introduction to robots, coding, and STEM thinking."
      introTitle="Meet Your Robot Friends"
      introText={[
        "Tiny Tinkerers is a magical introduction to the world of robots for children aged 5 and under. Through interactive play and colorful activities, little learners discover how robots think, move, and communicate.",
        "Our specially designed curriculum uses play-based learning to spark curiosity and build early STEM foundations. Children meet adorable robot friends, watch them dance, and even teach them tricks!",
      ]}
      introHighlights={[
        "Play-based learning with age-appropriate robots",
        "Introduction to cause-and-effect thinking",
        "Color and shape recognition through robotics",
        "Social skills and teamwork activities",
      ]}
      introImage="/images/Kids sorting kit components.jpg"
      curriculum={[
        {
          icon: 'smarttoy',
          title: 'Robot Play',
          items: [
            'Meet and interact with friendly robots',
            'Basic robot movements and sounds',
            'Simple cause and effect relationships',
            'Storytelling with robot characters',
          ],
        },
        {
          icon: 'science',
          title: 'Early STEM',
          items: [
            'Colors and shapes through robotics',
            'Counting and patterns with robots',
            'Simple problem-solving through play',
            'Exploring sensors and buttons',
          ],
        },
        {
          icon: 'person',
          title: 'Social Skills',
          items: [
            'Taking turns and sharing robots',
            'Working together on robot tasks',
            'Expressing ideas and creativity',
            'Building confidence through play',
          ],
        },
      ]}
      sampleProjects={[
        'Robot dance party',
        'Color sorting challenge',
        'Robot obstacle course',
        'Sound-making robot',
        'Draw with robots',
        'Robot storytelling',
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
      ctaSubtitle="The best time to spark a love for learning is right now. Give your child the gift of curiosity."
    />
  );
}
