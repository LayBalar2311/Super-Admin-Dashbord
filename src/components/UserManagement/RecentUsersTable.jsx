// src/components/UserManagement/RecentUsersTable.jsx
import React from 'react';
import UserRow from './UserRow';

const RecentUsersTable = ({ users }) => {
  return (
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
              <UserRow key={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentUsersTable;