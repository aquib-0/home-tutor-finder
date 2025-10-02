// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);   // will store user data
  const [isAuthenticated, setIsAuthenticated]  = useState(false);
  const [loading, setLoading] = useState(true); // prevent flickering

  useEffect(() => {
  try {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user'));

    if (token && userData) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        logout();
      } else {
        setIsAuthenticated(true);
        setUser(userData);
      }
    } else {
      setIsAuthenticated(false);
    }
  } catch (err) {
    console.error(err);
    setIsAuthenticated(false);
  } finally {
    setLoading(false);
  }
}, []);

  const login = (token, userData) => {
  setUser(userData);
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(userData));
  console.log(userData);
  setIsAuthenticated(true);
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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