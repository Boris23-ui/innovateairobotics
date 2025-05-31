"use client";

import React, { createContext, useContext, useState } from "react";
import { mockUsers } from "../utils/mockData";
import { User, AuthContextType, UserRole } from "@/modules/common/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    setIsLoaded(false);
    setError(null);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const foundUser = Object.values(mockUsers).find(
        (u) => u.email === email && (password === 'password' || u.id === 'user_teacher')
      );

      if (foundUser) {
        setUser(foundUser as User);
      } else {
        setError("Invalid email or password");
        throw new Error("Invalid email or password");
      }
    } catch (err: any) {
      console.error("Sign in error:", err);
      setError(err.message || "Sign in failed");
      throw err;
    } finally {
      setIsLoaded(true);
    }
  };

  const signOut = async () => {
    setIsLoaded(false);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUser(null);
    } catch (err: any) {
      console.error("Sign out error:", err);
      setError(err.message || "Sign out failed");
      throw err;
    } finally {
      setIsLoaded(true);
    }
  };

  const signUp = async (email: string, password: string, name: string, role: UserRole) => {
    setIsLoaded(false);
    setError(null);
    try {
      // Simulate API call for sign up
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Mock sign up successful:", { email, name, role });

      const foundUser = Object.values(mockUsers).find(
        (u) => u.email === email
      );
      if (foundUser) {
         setError("User with this email already exists");
         throw new Error("User with this email already exists");
      } else {
        // Simulate creating a new user object
        const newUser: User = {
          id: `user_${Date.now()}`,
          email,
          name,
          role,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(/\s+/g, '')}`,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        setUser(newUser);
      }
    } catch (err: any) {
      console.error("Mock sign up error:", err);
      setError(err.message || "Sign up failed");
      throw err;
    } finally {
      setIsLoaded(true);
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    setIsLoaded(false);
    setError(null);
    try {
      // Simulate API call for profile update
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Mock profile update successful:", data);
      setUser(prevUser => {
        if (!prevUser) return null;
        return { ...prevUser, ...data } as User;
      });
    } catch (err: any) {
      console.error("Mock profile update error:", err);
      setError(err.message || "Profile update failed");
      throw err;
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoaded, signIn, signOut, signUp, updateProfile, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext }; // Export AuthContext for the hook
