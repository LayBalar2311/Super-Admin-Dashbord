// src/components/StoreVerification/StoreList.jsx
import React from 'react';

const StoreList = ({
  user,
  loading,
  error,
  filteredStores,
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
  handleViewDetails,
  getStatusColorClass,
}) => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 border-b-2 border-gray-100 pb-6">
        <span className="text-indigo-800">Store</span> Verification Dashboard
      </h1>
      <p className="text-lg font-medium text-gray-700 mb-6">
        Logged in as: <span className="font-semibold text-indigo-700">{user.name || user.email}</span> ({user.role})<br />
        Reviewing cities: <span className="font-semibold text-indigo-700">{user.permissions.stores.join(', ')}</span>
      </p>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <label htmlFor="search" className="sr-only">Search</label>
          <input
            type="text"
            id="search"
            placeholder="Search by store, contact, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base transition-colors duration-200"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <label htmlFor="statusFilter" className="sr-only">Filter by Status</label>
          <select
            id="statusFilter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="block w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base appearance-none bg-white transition-colors duration-200"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Needs More Info">Needs More Info</option>
            <option value="Rejected">Rejected</option>
            <option value="Verified">Verified</option> {/* Added Verified status for filter */}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading store requests...</p>
        </div>
      ) : error ? (
        <p className="text-center text-red-600 py-16 text-lg">{error}</p>
      ) : filteredStores.length === 0 ? (
        <p className="text-center text-gray-500 py-16 text-2xl italic font-light">
          No matching store verification requests found for your assigned cities or current filters.
        </p>
      ) : (
        <div className="overflow-hidden shadow-xl rounded-xl border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-indigo-50 to-blue-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Store Name
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Contact Person
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Submitted On
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredStores.map((store) => (
                <tr key={store.id} className="hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base font-medium text-gray-900">{store.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{store.city}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">{store.contactPerson}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-600">{store.submittedDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusColorClass(store.currentStatus)}`}>
                      {store.currentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewDetails(store)}
                      className="text-indigo-600 hover:text-indigo-800 font-semibold hover:underline transition-colors duration-200"
                    >
                      Review Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default StoreList;