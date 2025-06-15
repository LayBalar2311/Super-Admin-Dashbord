// src/components/StoreTable.jsx
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function StoreTable({ stores, onStoreClick }) {
  // Add this line to ensure 'stores' is always an array
  const safeStores = stores || [];

  return (
    <div className="hidden md:block w-full overflow-x-auto rounded-xl border border-gray-200 shadow-md bg-white">
      <table className="min-w-full text-sm border-collapse">
        <thead className="bg-gray-100 text-xs uppercase text-gray-500">
          <tr>
            <th className="px-4 py-3 text-left border-r border-gray-200">
              Store Name
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-200">
              City
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-200 lg:table-cell hidden">
              State
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-200 xl:table-cell hidden">
              Country
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-200">
              Category
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-200">
              Verification
            </th>
            <th className="px-4 py-3 text-left">Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {/* Use safeStores instead of stores */}
          {safeStores.length > 0 ? (
            safeStores.map((store, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => onStoreClick?.(store)}
              >
                <td className="px-4 py-3 border-r border-gray-200">
                  {store.name}
                </td>
                <td className="px-4 py-3 border-r border-gray-200">
                  {store.city}
                </td>
                <td className="px-4 py-3 border-r border-gray-200 lg:table-cell hidden">
                  {store.state}
                </td>
                <td className="px-4 py-3 border-r border-gray-200 xl:table-cell hidden">
                  {store.country}
                </td>
                <td className="px-4 py-3 border-r border-gray-200">
                  {store.category}
                </td>
                <td className="px-4 py-3 border-r border-gray-200">
                  <div
                    className={`flex items-center gap-1 ${
                      store.verified ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {store.verified ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    <span className="text-xs sm:text-sm">
                      {store.verified ? "Verified" : "Not Verified"}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs sm:text-sm">
                  {store.dateJoined}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-8 text-gray-500">
                No stores found matching your criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}