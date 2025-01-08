// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ children }) => {
//   const user = useSelector((store) => store.user); // Access user state from Redux store

//   return user ? children : <Navigate to="/" replace />;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  // If no user, store the attempted path and redirect to login
  if (!user) {
    localStorage.setItem('redirectPath', location.pathname);
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
