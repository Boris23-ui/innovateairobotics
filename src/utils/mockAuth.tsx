import { createContext, useContext, useState, ReactNode } from 'react';
import { mockUsers } from './mockData';

type User = typeof mockUsers.teacher | typeof mockUsers.student | null;

interface AuthContextType {
  user: User;
  isLoaded: boolean;
  signIn: (email: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function MockAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoaded, setIsLoaded] = useState(true);

  const signIn = (email: string) => {
    if (email === mockUsers.teacher.email) {
      setUser(mockUsers.teacher);
    } else if (email === mockUsers.student.email) {
      setUser(mockUsers.student);
    }
  };

  const signOut = () => {
    setUser(null);
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
    throw new Error('useAuth must be used within a MockAuthProvider');
  }
  return context;
} 