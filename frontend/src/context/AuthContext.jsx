// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(authService.getCurrentUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          setUser(authService.getCurrentUser());
        }
      } catch (error) {
        console.error('Error verifying auth:', error);
        authService.logout();
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const login = async (email, password) => {
    const response = await authService.login(email, password);
    setUser(response.user);
    return response;
  };

  const register = async (userData) => {
    const response = await authService.register(userData);
    return response;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};