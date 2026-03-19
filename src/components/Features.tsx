'use client';

import React, { useRef } from 'react';
import { SmartToy, Groups, MenuBook, EmojiObjects } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Hands-on Learning',
      description: 'Build real robots and AI systems from day one with our project-based curriculum.',
      icon: <SmartToy style={{ fontSize: 32 }} />,
    },
    {
      title: 'Expert Engineers',
      description: 'Learn from industry professionals with years of robotics and AI experience.',
      icon: <Groups style={{ fontSize: 32 }} />,
    },
    {
      title: 'Modern Curriculum',
      description: 'Stay ahead with cutting-edge technologies and industry-standard practices.',
      icon: <MenuBook style={{ fontSize: 32 }} />,
    },
    {
      title: 'Innovation First',
      description: 'Build an impressive portfolio of real-world robotics projects and patents.',
      icon: <EmojiObjects style={{ fontSize: 32 }} />,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="py-20 spx-particle-bg"
      style={{ background: 'var(--spx-bg-alt)' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-center text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--spx-text)' }}>
            Built for the <span className="gradient-text">Future</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="glass-card p-6 h-full flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    color: '#06b6d4',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--spx-text)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--spx-text-secondary)' }} className="text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
