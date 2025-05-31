"use client";

import React, { createContext, useContext, useState } from "react";
import { mockUsers } from "./mockData";

type User = typeof mockUsers.teacher | typeof mockUsers.student | null;

interface AuthContextType {
  user: User;
  isLoaded: boolean;
  signIn: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoaded, setIsLoaded] = useState(true);

  const signIn = async (email: string) => {
    setIsLoaded(false);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const foundUser = Object.values(mockUsers).find(
        (u) => u.email === email
      ) as User;

      if (foundUser) {
        setUser(foundUser);
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
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
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoaded, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a MockAuthProvider");
  }
  return context;
} 