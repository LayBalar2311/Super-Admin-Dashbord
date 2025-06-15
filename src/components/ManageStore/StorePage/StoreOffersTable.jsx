// src/components/StoreDetails/StoreOffersTable.jsx
import React from "react";

export default function StoreOffersTable({ offers }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
        Offers By This Store
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-[600px] md:min-w-full text-sm w-full border-collapse">
          <thead className="bg-gray-100 text-left text-xs sm:text-sm uppercase text-gray-500">
            <tr>
              <th className="p-3">Offer Title</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Valid Till</th>
              <th className="p-3">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {offers && offers.length > 0 ? (
              offers.map((offer, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-sm">{offer.title}</td>
                  <td className="p-3 text-sm">{offer.type}</td>
                  <td className="p-3 text-sm">{offer.status}</td>
                  <td className="p-3 text-sm">{offer.date}</td>
                  <td className="p-3 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                    View
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No offers created by this store.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}