// src/components/UserManagement/UserManagementDashboard.jsx
import React from 'react';
import UserStatCard from './UserStatCard';
import ChartPlaceholder from './ChartPlaceholder';
import RecentUsersTable from './RecentUsersTable';

const UserManagementDashboard = () => {
  const users = [
    {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      status: 'Active',
      joined: '2023-05-12',
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    {
      name: 'Michael Chen',
      email: 'm.chen@example.com',
      status: 'Active',
      joined: '2023-05-11',
      avatar: 'https://i.pravatar.cc/40?img=2',
    },
    {
      name: 'Emma Wilson',
      email: 'emma.w@example.com',
      status: 'Pending',
      joined: '2023-05-10',
      avatar: 'https://i.pravatar.cc/40?img=3',
    },
    {
      name: 'David Lee',
      email: 'david.l@example.com',
      status: 'Inactive',
      joined: '2023-05-09',
      avatar: 'https://i.pravatar.cc/40?img=4',
    },
    {
      name: 'Olivia White',
      email: 'olivia.w@example.com',
      status: 'Active',
      joined: '2023-05-08',
      avatar: 'https://i.pravatar.cc/40?img=5',
    },
  ];

  const statsData = [
    { label: 'Total Users', value: '24,567', change: '+12%', icon: '👥', color: 'text-green-600' },
    { label: 'Active Users', value: '18,234', change: '+8%', icon: '🧍', color: 'text-green-600' },
    { label: 'New Users', value: '1,234', change: '+24%', icon: '➕', color: 'text-green-600' },
    { label: 'Churn Rate', value: '2.4%', change: '-1.2%', icon: '📉', color: 'text-red-600' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, idx) => (
          <UserStatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartPlaceholder title="User Growth" />
        <ChartPlaceholder title="User Activity" />
      </div>

      {/* Recent Users */}
      <RecentUsersTable users={users} />
    </div>
  );
};

export default UserManagementDashboard;