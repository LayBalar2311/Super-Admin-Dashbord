// src/components/ReportsAndAnalytics/AnalyticsCard.jsx
import React from 'react';

const AnalyticsCard = ({ title, value, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-4xl font-extrabold text-indigo-700">{value}</p>
    {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
  </div>
);

export default AnalyticsCard;