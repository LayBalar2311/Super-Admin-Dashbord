// src/components/StoreFilter.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

export default function StoreFilter({
  categoryFilter,
  setCategoryFilter,
  verificationFilter,
  setVerificationFilter,
  locationSearch,
  setLocationSearch,
}) {
  const allCategories = [
    "All",
    "Grocery",
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
  ];
  const verificationStatuses = ["All", "Verified", "Pending"];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
        {/* Verification Status */}
        <div className="flex flex-col">
          <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
            Verification Status
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {verificationStatuses.map((status) => (
              <button
                key={status}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  verificationFilter === status
                    ? "bg-blue-100 text-blue-900 shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
                onClick={() => setVerificationFilter(status)}
              >
                {status === "Verified" ? (
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> Verified
                  </span>
                ) : (
                  status
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Location Input */}
        <div className="flex flex-col">
          <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
            Search by Location
          </h3>
          <input
            type="text"
            placeholder="Enter city or state"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-col">
          <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
            Category
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {allCategories.map((category) => (
              <button
                key={category}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  categoryFilter === category
                    ? "bg-blue-100 text-blue-900 shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}