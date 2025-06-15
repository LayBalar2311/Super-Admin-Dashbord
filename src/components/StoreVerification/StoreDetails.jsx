// src/components/StoreVerification/StoreDetails.jsx
import React from 'react';
import DetailItem from './DetailItem'; // Import the reusable DetailItem

const StoreDetails = ({
  selectedStore,
  handleBackToList,
  verificationStatus,
  setAdminComments,
  adminComments,
  handleVerify,
  handleReject,
  handleRequestMoreInfo,
  loading,
  getStatusColorClass,
}) => {
  return (
    <>
      <button
        onClick={handleBackToList}
        className="mb-8 inline-flex items-center text-gray-600 hover:text-indigo-800 transition-colors duration-200 font-medium px-4 py-2 rounded-lg bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Requests List
      </button>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 border-b-2 border-gray-100 pb-6">
        <span className="text-indigo-800">Store</span> Details for {selectedStore.name}
      </h1>

      {/* Store Information Section */}
      <section className="mb-12 p-8 bg-gray-50 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-600 pl-4">
          Store Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 text-gray-700">
          <DetailItem label="Store Name" value={selectedStore.name} />
          <DetailItem label="Submitted On" value={selectedStore.submittedDate} />
          <DetailItem label="Contact Person" value={selectedStore.contactPerson} />
          <DetailItem label="Email" value={selectedStore.email} />
          <DetailItem label="Phone" value={selectedStore.phone} />
          <DetailItem label="Address" value={selectedStore.address} />
          <div className="md:col-span-2 lg:col-span-3">
            <DetailItem label="City" value={selectedStore.city} />
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="font-semibold text-gray-500 text-sm mb-1 uppercase tracking-wide">Business License:</p>
            {selectedStore.businessLicense ? (
              <a
                href={selectedStore.businessLicense}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-700 hover:text-blue-900 hover:underline transition-colors duration-200 font-medium"
              >
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.414L14.586 5A2 2 0 0115 6.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                View Business License
              </a>
            ) : (
              <p className="text-gray-500 italic">Not provided</p>
            )}
          </div>
        </div>
      </section>

      {/* Store Photos Section */}
      <section className="mb-12 p-8 bg-gray-50 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-600 pl-4">
          Store Photos
        </h2>
        {selectedStore.photos.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {selectedStore.photos.map((photo, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <img
                  src={photo}
                  alt={`Store Photo ${index + 1}`}
                  className="w-full h-44 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => window.open(photo, '_blank')}
                    className="text-white bg-indigo-700 hover:bg-indigo-800 px-5 py-2 rounded-full text-sm font-semibold shadow-lg"
                  >
                    View Full
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No photos provided for this store.</p>
        )}
      </section>

      {/* Verification Status & Admin Comments Section */}
      <section className="p-10 bg-indigo-50 rounded-2xl shadow-xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-600 pl-4">
          Verification Actions
        </h2>
        <div className="mb-8">
          <label htmlFor="currentStatus" className="block text-base font-medium text-gray-700 mb-2">
            Current Verification Status:
          </label>
          <span
            className={`inline-flex items-center px-5 py-2 rounded-full text-base font-bold tracking-wide ${getStatusColorClass(verificationStatus)} shadow-sm`}
          >
            {verificationStatus}
          </span>
        </div>
        <div className="mb-10">
          <label htmlFor="adminComments" className="block text-base font-medium text-gray-700 mb-2">
            Admin Comments:
          </label>
          <textarea
            id="adminComments"
            rows="6"
            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 transition-colors duration-200 text-base resize-y"
            placeholder="Add your detailed verification notes or reasons here. Be clear and concise."
            value={adminComments}
            onChange={(e) => setAdminComments(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 justify-end">
          <button
            onClick={handleVerify}
            disabled={loading}
            className={`inline-flex items-center justify-center py-3.5 px-9 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white ${loading ? 'bg-green-500 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {loading ? 'Verifying...' : 'Verify Store'}
          </button>
          <button
            onClick={handleReject}
            disabled={loading}
            className={`inline-flex items-center justify-center py-3.5 px-9 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white ${loading ? 'bg-red-500 cursor-not-allowed' : 'bg-red-700 hover:bg-red-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {loading ? 'Rejecting...' : 'Reject Store'}
          </button>
          <button
            onClick={handleRequestMoreInfo}
            disabled={loading}
            className={`inline-flex items-center justify-center py-3.5 px-9 border border-gray-300 rounded-xl shadow-lg text-lg font-semibold text-gray-800 ${loading ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {loading ? 'Requesting...' : 'Request More Info'}
          </button>
        </div>
      </section>
    </>
  );
};

export default StoreDetails;