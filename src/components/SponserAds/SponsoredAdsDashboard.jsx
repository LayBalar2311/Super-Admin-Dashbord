// src/components/SponsoredDashboard.jsx
import React from 'react';

const SponsoredDashboard = () => {
  // --- StatCard Sub-component (inline) ---
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

  // --- PerformanceChart Sub-component (inline) ---
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

  // --- AdSpendDistribution Sub-component (inline) ---
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

  // --- Main SponsoredDashboard Render ---
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 font-sans">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Sponsored Ads Dashboard</h1>
          <p className="text-gray-500 text-sm">Overview of your advertising performance</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {/* Placeholder for notification icon */}
          <div className="text-gray-600 text-xl cursor-pointer">🔔</div>
          {/* Placeholder for user avatar */}
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
            JD
          </div>
        </div>
      </header>

      {/* Stat Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Spend"
          value="$24,590"
          percentageChange="12.5%"
          isPositive={true}
        />
        <StatCard
          title="Impressions"
          value="1.2M"
          percentageChange="8.2%"
          isPositive={true}
        />
        <StatCard
          title="Clicks"
          value="48.2K"
          percentageChange="3.1%"
          isPositive={false}
        />
        <StatCard
          title="CTR"
          value="4.02%"
          percentageChange="1.2%"
          isPositive={true}
        />
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <AdSpendDistribution />
      </section>
    </div>
  );
};

export default SponsoredDashboard;