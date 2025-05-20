import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: 'Learning Materials',
      items: [
        {
          title: 'Robotics Fundamentals Guide',
          description: 'Comprehensive guide covering the basics of robotics and programming.',
          type: 'PDF',
          link: '#',
        },
        {
          title: 'AI & Machine Learning Tutorials',
          description: 'Step-by-step tutorials for implementing AI algorithms in robotics.',
          type: 'Video Series',
          link: '#',
        },
        {
          title: 'Programming Cheat Sheets',
          description: 'Quick reference guides for Python, C++, and robotics frameworks.',
          type: 'PDF',
          link: '#',
        },
      ],
    },
    {
      category: 'Development Tools',
      items: [
        {
          title: 'Robot Simulator',
          description: 'Virtual environment for testing and developing robot behaviors.',
          type: 'Software',
          link: '#',
        },
        {
          title: 'AI Development Kit',
          description: 'Collection of tools and libraries for AI development.',
          type: 'Software',
          link: '#',
        },
        {
          title: 'Circuit Design Tool',
          description: 'Interactive tool for designing and testing electronic circuits.',
          type: 'Web App',
          link: '#',
        },
      ],
    },
    {
      category: 'Community Resources',
      items: [
        {
          title: 'Discussion Forum',
          description: 'Connect with other students and instructors.',
          type: 'Forum',
          link: '#',
        },
        {
          title: 'Project Showcase',
          description: 'Browse and share robotics projects.',
          type: 'Gallery',
          link: '#',
        },
        {
          title: 'Weekly Webinars',
          description: 'Live sessions with industry experts.',
          type: 'Events',
          link: '#',
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Resources</h1>
          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <a
                          href={item.link}
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          Access Resource
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
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

export default ResourcesPage; 