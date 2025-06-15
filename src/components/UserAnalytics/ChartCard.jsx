// src/components/UserAnalytics/ChartCard.jsx
import React from 'react';

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default ChartCard;