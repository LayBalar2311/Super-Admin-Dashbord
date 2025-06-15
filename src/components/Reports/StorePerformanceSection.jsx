// src/components/ReportsAndAnalytics/StorePerformanceSection.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import AnalyticsCard from './AnalyticsCard';

const StorePerformanceSection = ({ data }) => {
  if (!data) return null; // Or show a loading state/error

  const totalClaimsByStore = data.claimsByStore.reduce((sum, d) => sum + d.claims, 0);
  const avgClaimsPerStore = data.claimsByStore.length > 0 ? (totalClaimsByStore / data.claimsByStore.length).toFixed(0) : 0;
  const newStoresLast30Days = data.newStoresAdded.filter(d => new Date(d.date) >= new Date(new Date().setDate(new Date().getDate() - 30))).reduce((sum, d) => sum + d.value, 0);


  return (
    <>
      <AnalyticsCard title="Total Stores" value="150" description="Currently active" />
      <AnalyticsCard title="New Stores (Last 30 Days)" value={newStoresLast30Days} description="Growth rate" />
      <AnalyticsCard title="Avg. Claims per Store" value={avgClaimsPerStore} description="Across active stores" />
      <AnalyticsCard title="Top Performing Category" value="Food & Beverages" description="Based on claim volume" />

      <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Store Performance (by Claims)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.claimsByStore}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" angle={-30} textAnchor="end" height={80} interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="claims" fill="#50E3C2" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">New Stores Added Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.newStoresAdded}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" name="New Stores" stroke="#F5A623" strokeWidth={2} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default StorePerformanceSection;