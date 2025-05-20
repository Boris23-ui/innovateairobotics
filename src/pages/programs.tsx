import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      title: 'Introduction to Robotics',
      description: 'Learn the fundamentals of robotics, including mechanics, electronics, and programming.',
      duration: '8 weeks',
      level: 'Beginner',
      topics: [
        'Basic electronics and circuits',
        'Microcontroller programming',
        'Sensor integration',
        'Basic robot movement',
        'Project-based learning',
      ],
    },
    {
      title: 'Advanced AI & Machine Learning',
      description: 'Deep dive into artificial intelligence, neural networks, and machine learning algorithms.',
      duration: '12 weeks',
      level: 'Advanced',
      topics: [
        'Neural networks and deep learning',
        'Computer vision',
        'Natural language processing',
        'Reinforcement learning',
        'AI project development',
      ],
    },
    {
      title: 'Robotics Engineering',
      description: 'Master the art of building and programming complex robotic systems.',
      duration: '10 weeks',
      level: 'Intermediate',
      topics: [
        'Advanced mechanics',
        'Control systems',
        'Robot kinematics',
        'Sensor fusion',
        'Autonomous navigation',
      ],
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Our Programs</h1>
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {program.level}
                      </span>
                      <p className="text-gray-600">Duration: {program.duration}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Topics Covered:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 text-center">
                    <button className="btn-primary">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgramsPage; 