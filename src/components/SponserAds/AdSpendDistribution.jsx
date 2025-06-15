// src/components/SponsoredDashboard/AdSpendDistribution.jsx
import React from 'react';

const AdSpendDistribution = () => {
  const categories = [
    { name: 'Search Ads', color: 'bg-blue-500' },
    { name: 'Display Ads', color: 'bg-orange-500' },
    { name: 'Social Ads', color: 'bg-green-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-96 flex-1 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Ad Spend Distribution</h2>
      <div className="flex space-x-4 text-sm font-medium text-gray-600 mb-4">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center">
            <span className={`w-3 h-3 ${cat.color} rounded-full mr-2`}></span>
            {cat.name}
          </div>
        ))}
      </div>
      {/* Placeholder for the actual distribution chart (e.g., a pie chart) */}
      <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-md">
        <p className="text-gray-400">Integrate your distribution chart here (e.g., Pie chart)</p>
      </div>
    </div>
  );
};

export default AdSpendDistribution;