// src/components/SponsoredDashboard/PerformanceChart.jsx
import React from 'react';

const PerformanceChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-96 flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Performance Over Time</h2>
        <div className="flex space-x-4 text-sm font-medium text-gray-600">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Impressions
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
            Clicks
          </div>
        </div>
      </div>
      {/* Placeholder for the actual chart */}
      <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-md">
        <p className="text-gray-400">Integrate your charting library here (e.g., Recharts, Chart.js)</p>
        {/* Simple visual representation for the spike */}
        <div className="relative w-full h-full flex items-end justify-center">
          <div className="absolute bottom-0 h-1/2 w-0.5 bg-orange-500 animate-pulse" style={{ left: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;