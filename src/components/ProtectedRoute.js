import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user); // Access user state from Redux store

  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
