import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            InnovateAI Robotics
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/programs" className="text-gray-600 hover:text-gray-900">
              Programs
            </Link>
            <Link href="/curriculum" className="text-gray-600 hover:text-gray-900">
              Curriculum
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 