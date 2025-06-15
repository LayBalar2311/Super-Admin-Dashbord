// src/components/ReportsAndAnalytics/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-48">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    <p className="ml-4 text-gray-600">Loading data...</p>
  </div>
);

export default LoadingSpinner;