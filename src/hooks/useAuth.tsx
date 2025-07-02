import { useState } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const login = (email: string, password: string) => {
    // Mock login - in a real app, this would make an API call
    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      email: email,
    };
    setUser(mockUser);
    setIsAuthModalOpen(false);
    return Promise.resolve(mockUser);
  };

  const signup = (name: string, email: string, password: string) => {
    // Mock signup - in a real app, this would make an API call
    const mockUser: User = {
      id: Date.now(),
      name: name,
      email: email,
    };
    setUser(mockUser);
    setIsAuthModalOpen(false);
    return Promise.resolve(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isAuthModalOpen,
    setIsAuthModalOpen,
    login,
    signup,
    logout,
  };
};