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
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 w-full">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-3 sm:gap-4">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-medium text-xs sm:text-sm">Verification Status:</span>
          <button className="px-2 sm:px-3 py-1 rounded bg-black text-white text-xs">✔ Verified</button>
          <button className="px-2 sm:px-3 py-1 rounded bg-gray-200 text-xs">Pending</button>
          <button className="px-2 sm:px-3 py-1 rounded bg-gray-200 text-xs">Rejected</button>
        </div>
        <input
          placeholder="Enter Location"
          className="px-2 sm:px-3 py-1 border border-gray-300 rounded text-xs w-full sm:w-40"
        />
        <select className="px-2 sm:px-3 py-1 border border-gray-300 rounded text-xs w-full sm:w-40">
          <option>Select Store Type</option>
        </select>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-medium text-xs sm:text-sm">Status:</span>
          <button className="px-2 sm:px-3 py-1 rounded bg-black text-white text-xs">● Active</button>
          <button className="px-2 sm:px-3 py-1 rounded bg-gray-200 text-xs">Suspended</button>
          <button className="px-2 sm:px-3 py-1 rounded bg-gray-200 text-xs">Deleted</button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] text-xs sm:text-sm border rounded-md overflow-hidden">
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-3 sm:px-4 py-2 whitespace-nowrap">Store Name</th>
              <th className="px-3 sm:px-4 py-2 whitespace-nowrap">City</th>
              <th className="px-3 sm:px-4 py-2 whitespace-nowrap">Owner Name</th>
              <th className="px-3 sm:px-4 py-2 whitespace-nowrap">Offers</th>
              <th className="px-3 sm:px-4 py-2 whitespace-nowrap">Status</th>
              <th className="px-3 sm:px-4 py-2 whitespace-nowrap">Verification</th>
              <th className="px-3 sm:px-4 py-2 whitespace-nowrap">Date Joined</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => onStoreClick?.(store)}
              >
                <td className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{store.name}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{store.city}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{store.owner}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{store.offers}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{store.status}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap flex items-center gap-1 text-green-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" /> Verified
                </td>
                <td className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{store.dateJoined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}