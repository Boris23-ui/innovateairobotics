import React from 'react';
import Link from 'next/link';

const Programs: React.FC = () => {
  const programs = [
    {
      title: 'Introduction to Robotics',
      description: 'Learn the basics of robotics, including mechanics, electronics, and programming.',
      level: 'Beginner',
      duration: '8 weeks',
    },
    {
      title: 'Advanced AI & Machine Learning',
      description: 'Deep dive into artificial intelligence, neural networks, and machine learning algorithms.',
      level: 'Advanced',
      duration: '12 weeks',
    },
    {
      title: 'Robotics Engineering',
      description: 'Master the art of building and programming complex robotic systems.',
      level: 'Intermediate',
      duration: '10 weeks',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Level: {program.level}</span>
                  <span>Duration: {program.duration}</span>
                </div>
                <Link
                  href="/programs"
                  className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs; 