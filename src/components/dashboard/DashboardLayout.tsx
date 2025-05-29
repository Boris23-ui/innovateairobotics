import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import UserMenu from '../auth/UserMenu';
import { mockTeacher, mockStudent } from '../../services/mockData';

interface DashboardLayoutProps {
  children: React.ReactNode;
  user?: {
    displayName: string;
    email: string;
    role: string;
  };
  role?: 'teacher' | 'student';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, user, role }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Use the provided user or fall back to mock data based on the role
  const currentUser = user || (role === 'teacher' ? mockTeacher : mockStudent);

  const teacherNavItems = [
    { name: 'Dashboard', href: '/teacher/dashboard', icon: '📊' },
    { name: 'Classes', href: '/teacher/classes', icon: '👨‍🏫' },
    { name: 'Assignments', href: '/teacher/assignments', icon: '📝' },
    { name: 'Students', href: '/teacher/students', icon: '👨‍🎓' },
  ];

  const studentNavItems = [
    { name: 'Dashboard', href: '/student/dashboard', icon: '📊' },
    { name: 'Classes', href: '/student/classes', icon: '👨‍🏫' },
    { name: 'Assignments', href: '/student/assignments', icon: '📝' },
  ];

  const navItems = role === 'teacher' ? teacherNavItems : studentNavItems;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">
                  EduTech
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <UserMenu user={currentUser} />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ width: isSidebarOpen ? 240 : 0 }}
          animate={{ width: isSidebarOpen ? 240 : 0 }}
          className="hidden lg:block bg-white shadow-sm"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    router.pathname === item.href
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 