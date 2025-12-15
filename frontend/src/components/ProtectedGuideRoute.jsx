import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedGuideRoute = ({ children }) => {
  const guideToken = localStorage.getItem('guideToken');
  const userRole = localStorage.getItem('userRole');

  // Check if user is authenticated as guide
  if (!guideToken || userRole !== 'guide') {
    // Redirect to guide login if not authenticated
    return <Navigate to="/guide/login" replace />;
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedGuideRoute;