// src/components/SponsoredDashboard.jsx
import React from 'react';
import StatCard from '../SponserAds/StatCard';
import PerformanceChart from '../SponserAds/PerformanceChart';
import AdSpendDistribution from '../SponserAds/AdSpendDistribution';

const SponsoredDashboard = () => {
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