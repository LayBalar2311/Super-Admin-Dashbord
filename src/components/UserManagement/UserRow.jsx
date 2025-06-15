// src/components/UserManagement/UserRow.jsx
import React from 'react';

const UserRow = ({ user }) => {
  return (
    <tr className="border-b">
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
  );
};

export default UserRow;