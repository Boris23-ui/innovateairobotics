import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const CurriculumPage: React.FC = () => {
  const curriculum = [
    {
      level: 'Beginner',
      courses: [
        {
          title: 'Introduction to Robotics',
          description: 'Learn the basics of robotics and programming.',
          modules: [
            {
              title: 'Module 1: Robotics Fundamentals',
              topics: ['Basic electronics', 'Simple circuits', 'Introduction to programming'],
            },
            {
              title: 'Module 2: Basic Programming',
              topics: ['Python basics', 'Control structures', 'Functions and modules'],
            },
            {
              title: 'Module 3: First Robot Project',
              topics: ['Building a simple robot', 'Basic sensors', 'Movement control'],
            },
          ],
        },
      ],
    },
    {
      level: 'Intermediate',
      courses: [
        {
          title: 'Advanced Robotics',
          description: 'Deep dive into robotics engineering and control systems.',
          modules: [
            {
              title: 'Module 1: Advanced Mechanics',
              topics: ['Robot kinematics', 'Motion planning', 'Control systems'],
            },
            {
              title: 'Module 2: Sensor Integration',
              topics: ['Multiple sensors', 'Sensor fusion', 'Data processing'],
            },
            {
              title: 'Module 3: Autonomous Systems',
              topics: ['Navigation algorithms', 'Path planning', 'Obstacle avoidance'],
            },
          ],
        },
      ],
    },
    {
      level: 'Advanced',
      courses: [
        {
          title: 'AI & Machine Learning in Robotics',
          description: 'Master AI and ML techniques for robotics applications.',
          modules: [
            {
              title: 'Module 1: Machine Learning Basics',
              topics: ['Supervised learning', 'Unsupervised learning', 'Neural networks'],
            },
            {
              title: 'Module 2: Computer Vision',
              topics: ['Image processing', 'Object detection', 'Feature recognition'],
            },
            {
              title: 'Module 3: Advanced AI Applications',
              topics: ['Reinforcement learning', 'Natural language processing', 'AI project development'],
            },
          ],
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Curriculum</h1>
          <div className="space-y-16">
            {curriculum.map((level, levelIndex) => (
              <div key={levelIndex}>
                <h2 className="text-3xl font-semibold mb-8 text-center">{level.level} Level</h2>
                <div className="space-y-8">
                  {level.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
                        <p className="text-gray-600 mb-6">{course.description}</p>
                        <div className="space-y-6">
                          {course.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="border-l-4 border-blue-500 pl-4">
                              <h4 className="text-lg font-semibold mb-3">{module.title}</h4>
                              <ul className="space-y-2">
                                {module.topics.map((topic, topicIndex) => (
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
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CurriculumPage; 