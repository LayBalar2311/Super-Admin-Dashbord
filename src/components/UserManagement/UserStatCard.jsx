// src/components/UserManagement/UserStatCard.jsx
import React from 'react';

const UserStatCard = ({ label, value, change, icon, color }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-gray-600">{label}</h4>
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`text-sm ${color}`}>{change} this month</p>
    </div>
  );
};

export default UserStatCard;