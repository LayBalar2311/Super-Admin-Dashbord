// src/components/ReportsAndAnalytics/OfferPerformanceSection.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import AnalyticsCard from './AnalyticsCard';
import { COLORS, CustomPieLabel } from './ChartConfigs';

const OfferPerformanceSection = ({ data }) => {
  if (!data) return null; // Or show a loading state/error

  const totalClaims = data.claimsOverTime.reduce((sum, d) => sum + d.value, 0);
  const totalViews = data.viewsOverTime.reduce((sum, d) => sum + d.value, 0);
  const avgRedemptionRate = (totalViews > 0 ? (totalClaims / totalViews * 100) : 0).toFixed(1);

  return (
    <>
      <AnalyticsCard title="Total Claims" value={totalClaims.toLocaleString()} description="Across all offers" />
      <AnalyticsCard title="Avg. Redemption Rate" value={`${avgRedemptionRate}%`} description="Claims per view" />
      <AnalyticsCard title="Offers Expired Unclaimed" value="45" description="Last 30 days" />
      <AnalyticsCard title="Avg. Offer Value Claimed" value="$7.50" description="Estimated average savings" />

      <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Offer Claims & Views Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.claimsOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" name="Claims" stroke="#4A90E2" strokeWidth={2} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="value" name="Views" stroke="#50E3C2" strokeWidth={2} data={data.viewsOverTime} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Top 5 Performing Offers (by Claims)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.topOffers}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" angle={-30} textAnchor="end" height={80} interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="claims" fill="#4A90E2" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-1 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Offer Type Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.offerTypeDistribution}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              label={CustomPieLabel}
            >
              {data.offerTypeDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default OfferPerformanceSection;