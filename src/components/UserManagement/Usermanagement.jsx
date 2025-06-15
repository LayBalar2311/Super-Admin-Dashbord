import React from 'react';

const UserManagement = () => {
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
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '24,567', change: '+12%', icon: '👥', color: 'text-green-600' },
          { label: 'Active Users', value: '18,234', change: '+8%', icon: '🧍', color: 'text-green-600' },
          { label: 'New Users', value: '1,234', change: '+24%', icon: '➕', color: 'text-green-600' },
          { label: 'Churn Rate', value: '2.4%', change: '-1.2%', icon: '📉', color: 'text-red-600' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white shadow rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-600">{stat.label}</h4>
              <span className="text-xl">{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className={`text-sm ${stat.color}`}>{stat.change} this month</p>
          </div>
        ))}
      </div>

      {/* Charts Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-xl h-60 flex items-center justify-center text-gray-400 text-lg font-medium">
          User Growth
        </div>
        <div className="bg-white shadow rounded-xl h-60 flex items-center justify-center text-gray-400 text-lg font-medium">
          User Activity
        </div>
      </div>

      {/* Recent Users */}
      <div className="bg-white shadow rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Users</h3>
          <button className="text-blue-600 hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2 px-4">User</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Joined</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 flex items-center gap-2">
                    <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                    {user.name}
                  </td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{user.joined}</td>
                  <td className="py-2 px-4 text-gray-500">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
