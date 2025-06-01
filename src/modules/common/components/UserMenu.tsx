import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { mockTeacher, mockStudent } from '../services/mockData';

interface UserMenuProps {
  user?: {
    displayName: string;
    email: string;
    role: string;
  };
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    // If no user is provided, use mock data based on the current path
    if (!user) {
      const isTeacher = router.pathname.includes('/teacher/');
      setCurrentUser(isTeacher ? mockTeacher : mockStudent);
    } else {
      setCurrentUser(user);
    }
  }, [user, router.pathname]);

  const handleLogout = () => {
    // Mock logout
    router.push('/login');
  };

  const handleProfileClick = () => {
    setIsOpen(false);
    // Navigate to profile page
    router.push('/profile');
  };

  if (!currentUser) {
    return (
      <div className="flex items-center space-x-4">
        <button
          onClick={() => router.push('/login')}
          className="text-gray-600 hover:text-gray-900"
        >
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 focus:outline-none"
      >
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
          {currentUser.displayName.charAt(0)}
        </div>
        <span className="text-sm font-medium text-gray-700">{currentUser.displayName}</span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-700 border-b">
              <p className="font-medium">{currentUser.displayName}</p>
              <p className="text-gray-500">{currentUser.email}</p>
            </div>
            <button
              onClick={handleProfileClick}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                router.push('/settings');
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserMenu; 