import { useUser } from '@clerk/nextjs';
import {
  mockTeacherStats,
  mockStudentStats,
  mockActivities,
  mockAssignments,
  mockClasses,
  type MockAssignment
} from './mockData';

// Types
export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'teacher' | 'student';
  bio?: string;
  phoneNumber?: string;
  imageUrl?: string;
}

export interface TeacherStats {
  totalClasses: number;
  activeStudents: number;
  pendingAssignments: number;
  averageScore: number;
}

export interface StudentStats {
  enrolledClasses: number;
  pendingAssignments: number;
  averageGrade: number;
  attendance: number;
}

export type UserStats = TeacherStats | StudentStats;

export interface Activity {
  id: string;
  type: 'assignment' | 'class' | 'student';
  title: string;
  description: string;
  timestamp: Date;
}

export interface Class {
  id: string;
  name: string;
  teacher: string;
  students: UserProfile[];
  schedule: string;
  description: string;
  room: string;
  nextSession: Date;
}

// Helper function to get user role from Clerk metadata
export const getUserRole = (metadata: any): 'teacher' | 'student' => {
  return metadata?.role || 'student';
};

// Data Service Hooks
export const useUserProfile = () => {
  const { user, isLoaded } = useUser();
  
  if (!isLoaded || !user) {
    return { profile: null, isLoading: true };
  }

  const profile: UserProfile = {
    id: user.id,
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.primaryEmailAddress?.emailAddress || '',
    role: getUserRole(user.publicMetadata),
    bio: user.publicMetadata?.bio as string,
    phoneNumber: user.publicMetadata?.phoneNumber as string,
    imageUrl: user.imageUrl
  };

  return { profile, isLoading: false };
};

// Mock Data Service Functions
export const useUserStats = (role: 'teacher' | 'student') => {
  const stats: UserStats = role === 'teacher' ? mockTeacherStats : mockStudentStats;
  return {
    stats,
    isLoading: false
  };
};

export const useActivities = () => {
  return {
    activities: mockActivities,
    isLoading: false
  };
};

export const useAssignments = () => {
  return {
    assignments: mockAssignments,
    isLoading: false
  };
};

export const useClasses = () => {
  return {
    classes: mockClasses,
    isLoading: false
  };
};

// Data Mutation Functions
export const updateUserProfile = async (profile: Partial<UserProfile>) => {
  // In a real app, this would update the user's metadata in Clerk
  console.log('Updating profile:', profile);
  return Promise.resolve(true);
};

export const submitAssignment = async (assignmentId: string, submission: any) => {
  // In a real app, this would save to a database
  console.log('Submitting assignment:', { assignmentId, submission });
  return Promise.resolve(true);
};

export const updateClassSchedule = async (classId: string, schedule: string) => {
  // In a real app, this would update the class schedule in a database
  console.log('Updating class schedule:', { classId, schedule });
  return Promise.resolve(true);
}; 