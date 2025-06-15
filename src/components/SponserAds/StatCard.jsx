// src/components/SponsoredDashboard/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, percentageChange, isPositive }) => {
  const percentageColor = isPositive ? 'text-green-500' : 'text-red-500';
  const arrow = isPositive ? '▲' : '▼'; // Unicode arrows

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex-1 min-w-[200px]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        {/* Placeholder for info icon */}
        <div className="text-gray-400 text-sm">ℹ️</div>
      </div>
      <div className="flex items-end mb-1">
        <p className="text-3xl font-semibold text-gray-800">{value}</p>
        <span className={`ml-2 text-sm ${percentageColor}`}>
          {arrow} {percentageChange}
        </span>
      </div>
    </div>
  );
};

export default StatCard;