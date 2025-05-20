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
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200">
              InnovateAI Robotics
            </Link>
            <div className="flex items-center space-x-6">
              <Link 
                href="/dashboard" 
                className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 ${
                  router.pathname === '/dashboard' ? 'text-blue-600 font-medium' : ''
                }`}
              >
                Dashboard
              </Link>
              <Link 
                href="/student" 
                className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 ${
                  router.pathname.startsWith('/student') && !router.pathname.includes('project-submission') 
                    ? 'text-blue-600 font-medium' 
                    : ''
                }`}
              >
                Student View
              </Link>
              <Link 
                href="/student/project-submission" 
                className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 ${
                  router.pathname === '/student/project-submission' ? 'text-blue-600 font-medium' : ''
                }`}
              >
                Submit Project
              </Link>
              <Link 
                href="/donate" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-4">{children}</main>
    </div>
  );
};

export default MainLayout; 