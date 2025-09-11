import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

export default function PrivateRoutes({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
        return <div>Loading...</div>; // Or a spinner component
    }

  return isAuthenticated ? children : <Navigate to='/student-login' />;
}
