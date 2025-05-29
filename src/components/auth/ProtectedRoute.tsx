import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { mockTeacher, mockStudent } from '../../services/mockData';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'teacher' | 'student';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if we're on the profile page
    const isProfilePage = router.pathname === '/profile';
    
    // For testing purposes, we'll use mock data
    // In a real app, this would check the actual auth state
    const mockUser = requiredRole === 'teacher' ? mockTeacher : mockStudent;
    
    if (mockUser) {
      setUser(mockUser);
      setIsLoading(false);
    } else {
      // If no user is found and we're not on the login page, redirect to login
      if (router.pathname !== '/login') {
        router.push('/login');
      }
    }
  }, [router.pathname, requiredRole]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If we have a user and either no role is required or the role matches, show the content
  if (user && (!requiredRole || user.role === requiredRole)) {
    return <>{children}</>;
  }

  // If we get here, either there's no user or the role doesn't match
  return null;
};

export default ProtectedRoute; 