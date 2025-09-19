import React from 'react';

// Development version of ProtectedRoute that allows all access
const ProtectedRoute = ({ children }) => {
  console.log("Development mode: Allowing access to protected route");
  return children;
};

export default ProtectedRoute;
