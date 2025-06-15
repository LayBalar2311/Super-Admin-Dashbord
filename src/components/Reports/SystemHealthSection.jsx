// src/components/ReportsAndAnalytics/SystemHealthSection.jsx
import React from 'react';
import AnalyticsCard from './AnalyticsCard';

const SystemHealthSection = ({ data }) => {
  if (!data) return null; // Or show a loading state/error

  return (
    <>
      <AnalyticsCard title="Active Offers" value={data.activeOffers} description="Currently live on platform" />
      <AnalyticsCard title="Pending Approvals" value={data.pendingApprovals} description="Offers awaiting review" />
      <AnalyticsCard title="User Reports" value={data.userReports} description="Awaiting moderation" />
      <AnalyticsCard title="Avg. Response Time" value={`${data.averageResponseTimeMs} ms`} description="API latency" />
      <AnalyticsCard title="Server Uptime" value="99.99%" description="Last 30 days" />

      <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">System Status Overview</h2>
        <div className="flex flex-wrap gap-6 text-gray-700 text-lg">
          <p><span className="font-semibold">Database Status:</span> <span className="text-green-600 font-bold">Operational</span></p>
          <p><span className="font-semibold">API Gateway:</span> <span className="text-green-600 font-bold">Healthy</span></p>
          <p><span className="font-semibold">Email Service:</span> <span className="text-green-600 font-bold">Operational</span></p>
          <p><span className="font-semibold">Last Backup:</span> <span className="text-blue-600 font-bold">2 hours ago</span></p>
          <p><span className="font-semibold">CDN Status:</span> <span className="text-green-600 font-bold">Optimal</span></p>
        </div>
      </div>
    </>
  );
};

export default SystemHealthSection;