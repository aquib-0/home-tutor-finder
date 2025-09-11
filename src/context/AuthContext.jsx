// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);   // will store user data
  const [isAuthenticated, setIsAuthenticated]  = useState(false);
  const [loading, setLoading] = useState(true); // prevent flickering

  const login = (userData)=>{
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, setLoading ,login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};