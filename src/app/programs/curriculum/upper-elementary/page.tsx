'use client';

import { CurriculumLayout } from '@/components/programs/CurriculumLayout';

export default function UpperElementaryCurriculumPage() {
  return (
    <CurriculumLayout
      title="Upper Elementary Curriculum"
      subtitle="From gear ratios to sensor programming — building intelligent robots with EV3 Mindstorms"
      gradeRange="Grades 4-6 · Ages 9-12"
      accentColor="#3b82f6"
      accentGradient="linear-gradient(135deg, #3b82f6, #2563eb)"
      heroGradient="linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)"
      description="Envision it. Engineer it. Make It Work."
      overview="The Upper Elementary curriculum bridges mechanical building with programming and sensor integration. Students start with advanced gear ratios and locomotion systems, then progress to EV3 Mindstorms programming using Scratch. They learn to integrate touch, color, and ultrasonic sensors to create intelligent, autonomous robots. This level prepares students for FLL competition challenges through hands-on engineering and programming mastery."
      skillsGained={[
        'Advanced gear ratio calculation',
        'CAM systems and locomotion design',
        'Gripper mechanics and manipulation',
        'EV3 Mindstorms block programming',
        'Straight and curve movement control',
        'Touch, color, and ultrasonic sensor integration',
        'Steering vs. tank drive systems',
        'Pivoting and spinning techniques',
        'FLL competition readiness',
      ]}
      modules={[
        {
          title: 'Module One — Gear Ratios & Motion',
          lessons: [
            { number: '01', title: 'Understanding Gear Ratios' },
            { number: '02', title: 'Basics of CAM Systems' },
            { number: '03', title: 'Basics of Locomotion' },
            { number: '04', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Two — Pumps & Worm Gears',
          lessons: [
            { number: '05', title: 'Understanding Worm Gears' },
            { number: '06', title: 'The Basics of Pumps' },
            { number: '07', title: 'Locomotion with Pumps' },
            { number: '08', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Three — Grippers & Advanced CAM',
          lessons: [
            { number: '09', title: 'Gripper Basics' },
            { number: '10', title: 'Understanding One-Phase CAM Systems' },
            { number: '11', title: 'Moving Without Wheels: Hopping' },
            { number: '12', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Four — Introduction to Programming',
          lessons: [
            { number: '13', title: 'Basics of Programming' },
            { number: '14', title: 'Straight Move with Steering' },
            { number: '15', title: 'Straight Move with Tank Drive' },
            { number: '16', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Five — Advanced Movement',
          lessons: [
            { number: '17', title: 'Curve Move with Steering' },
            { number: '18', title: 'Curve Move with Tank Drive' },
            { number: '19', title: 'Understanding Pivoting vs. Spinning' },
            { number: '20', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Six — Sensor Integration',
          lessons: [
            { number: '21', title: 'Understanding the Use of the Touch Sensor' },
            { number: '22', title: 'Understanding the Use of the Color Sensor' },
            { number: '23', title: 'Understanding the Use of the Ultrasonic Sensor' },
            { number: '24', title: 'Show & Tell' },
          ],
        },
      ]}
      programLink="/programs/tech-titans"
      programName="Tech Titans Program"
    />
  );
}
