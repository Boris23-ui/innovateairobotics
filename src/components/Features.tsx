import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Hands-on Learning',
      description: 'Get practical experience with real robotics projects and AI applications.',
      icon: '🤖',
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in robotics and AI.',
      icon: '👨‍🏫',
    },
    {
      title: 'Modern Curriculum',
      description: 'Stay up-to-date with the latest technologies and industry practices.',
      icon: '📚',
    },
    {
      title: 'Project-Based',
      description: 'Build your portfolio with real-world projects and applications.',
      icon: '💡',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 