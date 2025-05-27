import React from "react";
import { CheckCircle } from "lucide-react";

const stores = new Array(10).fill({
  name: "Janta Supermart",
  city: "Pune",
  owner: "Rahul Verma",
  offers: 12,
  status: "Active",
  verified: true,
  dateJoined: "02-Apr-2025",
});

export default function ManageStores({ onStoreClick }) {
  return (
    <div className="p-4 ml-0 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 w-full">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-4">
        {/* Verification Status */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-medium text-xs sm:text-sm">Verification Status:</span>
          <button className="px-3 py-1 rounded bg-black text-white text-xs">✔ Verified</button>
          <button className="px-3 py-1 rounded bg-gray-200 text-xs">Pending</button>
          <button className="px-3 py-1 rounded bg-gray-200 text-xs">Rejected</button>
        </div>

        {/* Location Input */}
        <input
          placeholder="Enter Location"
          className="px-3 py-1 border border-gray-300 rounded text-xs w-full sm:w-40"
        />

        {/* Store Type Dropdown */}
        <select className="px-3 py-1 border border-gray-300 rounded text-xs w-full sm:w-40">
          <option>Select Store Type</option>
        </select>

        {/* Store Status */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-medium text-xs sm:text-sm">Status:</span>
          <button className="px-3 py-1 rounded bg-black text-white text-xs">● Active</button>
          <button className="px-3 py-1 rounded bg-gray-200 text-xs">Suspended</button>
          <button className="px-3 py-1 rounded bg-gray-200 text-xs">Deleted</button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] text-xs sm:text-sm border rounded-md">
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-2 text-left">Store Name</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Owner Name</th>
              <th className="px-4 py-2 text-left">Offers</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Verification</th>
              <th className="px-4 py-2 text-left">Date Joined</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => onStoreClick?.(store)}
              >
                <td className="px-4 py-3">{store.name}</td>
                <td className="px-4 py-3">{store.city}</td>
                <td className="px-4 py-3">{store.owner}</td>
                <td className="px-4 py-3">{store.offers}</td>
                <td className="px-4 py-3">{store.status}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </div>
                </td>
                <td className="px-4 py-3">{store.dateJoined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
