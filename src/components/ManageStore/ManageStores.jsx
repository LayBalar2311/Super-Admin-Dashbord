import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react"; // Assuming lucide-react is installed

const stores = [
  {
    name: "Janta Supermart",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    category: "Grocery",
    verified: true,
    dateJoined: "02-Apr-2025",
  },
  {
    name: "TechTrend Electronics",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "Electronics",
    verified: true,
    dateJoined: "15-Mar-2025",
  },
  {
    name: "Fashion Hub",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    category: "Clothing",
    verified: false,
    dateJoined: "10-Feb-2025",
  },
  {
    name: "Fresh Mart",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    category: "Grocery",
    verified: true,
    dateJoined: "20-Jan-2025",
  },
  {
    name: "Gadget Zone",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    category: "Electronics",
    verified: true,
    dateJoined: "05-Apr-2025",
  },
  {
    name: "Style Street",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    category: "Clothing",
    verified: false,
    dateJoined: "12-Mar-2025",
  },
  {
    name: "Home Essentials",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    category: "Home & Kitchen",
    verified: true,
    dateJoined: "25-Feb-2025",
  },
  {
    name: "Book Nook",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    category: "Books",
    verified: true,
    dateJoined: "30-Jan-2025",
  },
  {
    name: "Healthy Bites",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    category: "Grocery",
    verified: false,
    dateJoined: "18-Mar-2025",
  },
  {
    name: "Tech Haven",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "Electronics",
    verified: true,
    dateJoined: "01-Apr-2025",
  },
];

export default function ManageStores({ onStoreClick }) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [verificationFilter, setVerificationFilter] = useState("All");
  const [locationSearch, setLocationSearch] = useState(""); // State for location search

  const filteredStores = stores.filter((store) => {
    const matchesCategory = categoryFilter === "All" || store.category === categoryFilter;
    const matchesVerification =
      verificationFilter === "All" ||
      (verificationFilter === "Verified" && store.verified) ||
      (verificationFilter === "Pending" && !store.verified); // Adjusted to handle "Pending"
    // Note: "Rejected" filter isn't directly supported by `store.verified` boolean
    // If you need "Rejected" as a separate status, you'd need a 'status' field in your data.

    const matchesLocation =
      locationSearch.trim() === "" ||
      store.city.toLowerCase().includes(locationSearch.toLowerCase()) ||
      store.state.toLowerCase().includes(locationSearch.toLowerCase());

    return matchesCategory && matchesVerification && matchesLocation;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full max-w-full overflow-x-hidden space-y-6">
      {/* Filter Section */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
          {/* Verification Status */}
          <div className="flex flex-col">
            <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
              Verification Status
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["All", "Verified", "Pending"].map((status) => ( // Removed "Rejected" as it's not in data model
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
            <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2">Category</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["All", "Grocery", "Electronics", "Clothing", "Home & Kitchen", "Books"].map(
                (category) => (
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
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Table (visible on larger screens) */}
      <div className="hidden md:block w-full overflow-x-auto rounded-xl border border-gray-200 shadow-md bg-white">
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left border-r border-gray-200">Store Name</th>
              <th className="px-4 py-3 text-left border-r border-gray-200">City</th>
              <th className="px-4 py-3 text-left border-r border-gray-200 lg:table-cell hidden">
                State
              </th>
              <th className="px-4 py-3 text-left border-r border-gray-200 xl:table-cell hidden">
                Country
              </th>
              <th className="px-4 py-3 text-left border-r border-gray-200">Category</th>
              <th className="px-4 py-3 text-left border-r border-gray-200">Verification</th>
              <th className="px-4 py-3 text-left">Date Joined</th>
            </tr>
          </thead>
          <tbody>
            {filteredStores.length > 0 ? (
              filteredStores.map((store, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => onStoreClick?.(store)}
                >
                  <td className="px-4 py-3 border-r border-gray-200">{store.name}</td>
                  <td className="px-4 py-3 border-r border-gray-200">{store.city}</td>
                  <td className="px-4 py-3 border-r border-gray-200 lg:table-cell hidden">
                    {store.state}
                  </td>
                  <td className="px-4 py-3 border-r border-gray-200 xl:table-cell hidden">
                    {store.country}
                  </td>
                  <td className="px-4 py-3 border-r border-gray-200">{store.category}</td>
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
                  <td className="px-4 py-3 text-xs sm:text-sm">{store.dateJoined}</td>
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

      {/* Card View (visible on small screens) */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {filteredStores.length > 0 ? (
          filteredStores.map((store, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onStoreClick?.(store)}
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2">{store.name}</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium text-gray-600">City:</span> {store.city}
                </p>
                <p>
                  <span className="font-medium text-gray-600">State:</span> {store.state}
                </p>
                <p>
                  <span className="font-medium text-gray-600">Country:</span> {store.country}
                </p>
                <p>
                  <span className="font-medium text-gray-600">Category:</span> {store.category}
                </p>
                <div className="flex items-center gap-1 col-span-2">
                  <span className="font-medium text-gray-600">Verification:</span>
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
                    <span>{store.verified ? "Verified" : "Not Verified"}</span>
                  </div>
                </div>
                <p className="col-span-2">
                  <span className="font-medium text-gray-600">Joined:</span> {store.dateJoined}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 bg-white rounded-xl shadow-md border border-gray-200">
            No stores found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}