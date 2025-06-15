// src/components/UserAnalytics/FeatureUsageList.jsx
import React from 'react';

const FeatureUsageList = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Feature Usage (Top 5)</h3>
      <ul className="space-y-3">
        {data.map((feature, idx) => (
          <li key={idx} className="flex justify-between items-center text-gray-700">
            <span>{feature.name}</span>
            <span className="font-semibold">{feature.usage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureUsageList;