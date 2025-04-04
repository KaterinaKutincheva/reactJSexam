import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function GuestRoute({ children }) {
  const { auth } = useContext(AuthContext);

  if (auth.email) {
    return <Navigate to="/" />;
  }

  return children;
}