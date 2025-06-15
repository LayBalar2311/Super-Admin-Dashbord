// src/components/UserManagement/ChartPlaceholder.jsx
import React from 'react';

const ChartPlaceholder = ({ title }) => {
  return (
    <div className="bg-white shadow rounded-xl h-60 flex items-center justify-center text-gray-400 text-lg font-medium">
      {title}
    </div>
  );
};

export default ChartPlaceholder;