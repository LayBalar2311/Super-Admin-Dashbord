// src/components/UserAnalytics/StatCard.jsx
import React from 'react';

const StatCard = ({ label, value, change, icon, color, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100 transform hover:scale-105 transition duration-300">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-gray-600">{label}</h4>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-extrabold text-gray-900 mb-1">{value}</p>
      <p className={`text-sm ${color} flex items-center`}>
        {change} <span className="ml-1 text-gray-500 text-xs">{description}</span>
      </p>
    </div>
  );
};

export default StatCard;