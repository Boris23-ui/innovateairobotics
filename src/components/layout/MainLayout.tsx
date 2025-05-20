import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
              InnovateAI Robotics
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href="/dashboard" 
                className={`text-gray-600 hover:text-gray-800 ${router.pathname === '/dashboard' ? 'text-blue-600 font-medium' : ''}`}
              >
                Dashboard
              </Link>
              <Link 
                href="/student" 
                className={`text-gray-600 hover:text-gray-800 ${router.pathname.startsWith('/student') ? 'text-blue-600 font-medium' : ''}`}
              >
                Student View
              </Link>
              <Link 
                href="/student/project-submission" 
                className={`text-gray-600 hover:text-gray-800 ${router.pathname === '/student/project-submission' ? 'text-blue-600 font-medium' : ''}`}
              >
                Submit Project
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout; 