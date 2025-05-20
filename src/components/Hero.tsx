import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Future Innovators Through Robotics & AI
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Join our cutting-edge programs designed to inspire and educate the next generation
            of robotics and AI enthusiasts. From beginners to advanced learners, we have
            something for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/programs"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-center"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 