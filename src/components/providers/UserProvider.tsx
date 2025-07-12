"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useUser } from '@clerk/nextjs';
import { UserRole, UserProfile, getUserProfile } from '@/utils/auth';

interface UserContextType {
  userProfile: UserProfile | null;
  isLoading: boolean;
  refetchProfile: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = async () => {
    if (!user) {
      setUserProfile(null);
      setIsLoading(false);
      return;
    }

    try {
      const profile = await getUserProfile();
      setUserProfile(profile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setUserProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  const refetchProfile = async () => {
    setIsLoading(true);
    await fetchProfile();
  };

  useEffect(() => {
    if (isLoaded) {
      fetchProfile();
    }
  }, [isLoaded, user]);

  return (
    <UserContext.Provider value={{ userProfile, isLoading, refetchProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserProfile() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProvider');
  }
  return context;
} 