import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
  const adminToken = localStorage.getItem('adminToken');
  const userRole = localStorage.getItem('userRole');

  // Check if user is authenticated as admin
  if (!adminToken || userRole !== 'admin') {
    // Redirect to admin login if not authenticated
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedAdminRoute;