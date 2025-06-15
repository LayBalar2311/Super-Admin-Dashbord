// src/components/ReportsAndAnalytics/UserBehaviorSection.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import AnalyticsCard from './AnalyticsCard';
import { COLORS, CustomPieLabel } from './ChartConfigs';

const UserBehaviorSection = ({ data }) => {
  if (!data) return null; // Or show a loading state/error

  const newSignupsLast30Days = data.newUsersOverTime.filter(d => new Date(d.date) >= new Date(new Date().setDate(new Date().getDate() - 30))).reduce((sum, d) => sum + d.value, 0);

  return (
    <>
      <AnalyticsCard title="Total Users" value="25,000" description="Registered users" />
      <AnalyticsCard title="Active Users Today" value={data.activeUsersOverTime[data.activeUsersOverTime.length - 1]?.value || 0} description="Last 24 hours" />
      <AnalyticsCard title="New Sign-ups (Last 30 Days)" value={newSignupsLast30Days} description="Growth rate" />
      <AnalyticsCard title="Avg. Session Duration" value="3m 45s" description="Time spent on platform" />

      <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">User Growth & Activity Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.newUsersOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" name="New Users" stroke="#BD10E0" strokeWidth={2} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="value" name="Active Users" stroke="#7ED321" strokeWidth={2} data={data.activeUsersOverTime} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">User Demographics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.userDemographics}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              label={CustomPieLabel}
            >
              {data.userDemographics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Device Usage</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.deviceUsage}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              label={CustomPieLabel}
            >
              {data.deviceUsage.map((entry, index) => (
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

export default UserBehaviorSection;