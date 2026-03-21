'use client';

import { CurriculumLayout } from '@/components/programs/CurriculumLayout';

export default function LowerElementaryCurriculumPage() {
  return (
    <CurriculumLayout
      title="Lower Elementary Curriculum"
      subtitle="Hands-on mechanical engineering with LEGO — gear trains, pulleys, pistons, and CAM systems"
      gradeRange="Grades K-3 · Ages 5-8"
      accentColor="#10b981"
      accentGradient="linear-gradient(135deg, #10b981, #059669)"
      heroGradient="linear-gradient(135deg, #0f172a 0%, #052e16 100%)"
      description="Envision it. Engineer it. Make It Work."
      overview="The Lower Elementary curriculum introduces young engineers to the fundamentals of mechanical systems through hands-on LEGO Mindstorms building. Students progress from simple gear trains to complex compound mechanisms, learning how real machines work through building and experimentation. Each module culminates in a Show & Tell presentation where students demonstrate their creations and explain the engineering principles behind them."
      skillsGained={[
        'Understanding gear trains and gear ratios',
        'How pistons and crank mechanisms work',
        'Pulley systems and mechanical advantage',
        'CAM systems and intermittent motion',
        'Worm gears and bevel gears',
        'Compounding gears with pulleys',
        'Racking mechanisms and transmission systems',
        'Engineering Design Process methodology',
        'Presentation skills through Show & Tell',
      ]}
      modules={[
        {
          title: 'Module One — Introduction to Mechanisms',
          lessons: [
            { number: '01', title: 'Understanding Gear Trains' },
            { number: '02', title: 'Understanding How Pistons Work' },
            { number: '03', title: 'Gears vs. Pulleys' },
            { number: '04', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Two — Advanced Gear Systems',
          lessons: [
            { number: '05', title: 'Gearing Up or Down' },
            { number: '06', title: 'Understanding Bevel Gears: Cultivating Tractor' },
            { number: '07', title: 'Building a Pump' },
            { number: '08', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Three — CAM Systems',
          lessons: [
            { number: '09', title: 'Simple CAM System' },
            { number: '10', title: 'One-Phase Simple CAM System' },
            { number: '11', title: 'Compounding Gear Ratios' },
            { number: '12', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Four — Worm Gears & Drilling',
          lessons: [
            { number: '13', title: 'Understanding the Use of Worm Gears' },
            { number: '14', title: 'Orthogonal Drilling' },
            { number: '15', title: 'Compounding Gears Mixed with Pulleys' },
            { number: '16', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Five — Motion & Mechanisms',
          lessons: [
            { number: '17', title: 'Simple Angular Pendulum' },
            { number: '18', title: 'Intermittent Motion' },
            { number: '19', title: 'Vertical Drilling' },
            { number: '20', title: 'Show & Tell' },
          ],
        },
        {
          title: 'Module Six — Transmission & Integration',
          lessons: [
            { number: '21', title: 'Racking Mechanism' },
            { number: '22', title: 'Mixing Gears with CAM' },
            { number: '23', title: 'Understanding Transmission' },
            { number: '24', title: 'Show & Tell' },
          ],
        },
      ]}
      programLink="/programs/robot-explorers"
      programName="Robot Explorers Program"
    />
  );
}
