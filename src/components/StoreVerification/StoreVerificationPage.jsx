// src/components/StoreVerificationPage.jsx
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

// Reusable component for displaying a detail item
const DetailItem = ({ label, value }) => (
  <div className="flex flex-col">
    <p className="font-semibold text-gray-500 text-sm mb-1 uppercase tracking-wide">{label}:</p>
    {value ? (
      <p className="text-lg text-gray-800 font-medium break-words">{value}</p>
    ) : (
      <p className="text-lg text-gray-500 font-medium italic">N/A</p>
    )}
  </div>
);

const StoreVerificationDashboard = () => {
  const { user, hasPageAccess, hasStoreAccess } = useContext(AuthContext);
  const [currentView, setCurrentView] = useState('list');
  const [storeRequests, setStoreRequests] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [adminComments, setAdminComments] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('Pending');
  const [searchTerm, setSearchTerm] = useState('');

  // Check if user has access to Verification page
  if (!user || !hasPageAccess('Verification')) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 font-sans">
        <div className="max-w-7xl mx-auto bg-white shadow-3xl rounded-3xl p-12 text-center text-gray-900">
          Access Restricted: You do not have permission to view this page.
        </div>
      </div>
    );
  }

  const fetchStoreList = async () => {
    setError(null);
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const dummyData = [
        {
          id: 's001',
          name: 'Elite Bistro',
          contactPerson: 'Alice Chen',
          email: 'alice@elitebistro.com',
          phone: '+91 98765 11111',
          address: '101 Promenade Lane, Bandra, Mumbai, Maharashtra, India',
          submittedDate: '2025-05-29',
          currentStatus: 'Pending',
          city: 'Mumbai',
          businessLicense: 'https://www.africau.edu/images/default/sample.pdf',
          photos: ['https://images.unsplash.com/photo-1542838132-92c53300491e'],
        },
        {
          id: 's002',
          name: 'Azure Boutiques',
          contactPerson: 'Bob Johnson',
          email: 'bob@azure.com',
          phone: '+91 91234 22222',
          address: '202 Ocean Drive, Colaba, Mumbai, Maharashtra, India',
          submittedDate: '2025-05-28',
          currentStatus: 'Needs More Info',
          city: 'Mumbai',
          businessLicense: null,
          photos: ['https://images.unsplash.com/photo-1595188812674-e86663ce9516'],
        },
        {
          id: 's004',
          name: 'Golden Harvest Grocers',
          contactPerson: 'Mr. Rajesh Patel',
          email: 'rajesh@goldenharvest.com',
          phone: '+91 76543 44444',
          address: '404 Farmhouse Road, Paldi, Ahmedabad, Gujarat, India',
          submittedDate: '2025-05-26',
          currentStatus: 'Pending',
          city: 'Ahmedabad',
          businessLicense: 'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf',
          photos: ['https://images.unsplash.com/photo-1563266224-b1531633512b'],
        },
        // ... other stores
      ];
      setStoreRequests(dummyData);
    } catch (err) {
      setError('Failed to fetch store requests.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoreList();
  }, []);

  const handleViewDetails = (store) => {
    if (!hasStoreAccess(store)) {
      alert('You do not have permission to view this store.');
      return;
    }
    setSelectedStore(store);
    setVerificationStatus(store.currentStatus);
    setAdminComments(store.adminComments || '');
    setCurrentView('details');
  };

  const handleBackToList = () => {
    setSelectedStore(null);
    setCurrentView('list');
    fetchStoreList();
  };

  const handleUpdateStatus = async (newStatus) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`Store ${selectedStore.name} status updated to: ${newStatus} (UI only)`);
      setStoreRequests(prevRequests =>
        prevRequests.map(store =>
          store.id === selectedStore.id
            ? { ...store, currentStatus: newStatus, adminComments }
            : store
        )
      );
      setSelectedStore(null);
      setCurrentView('list');
      fetchStoreList();
    } catch (err) {
      setError('Failed to update store status.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = () => handleUpdateStatus('Verified');
  const handleReject = () => handleUpdateStatus('Rejected');
  const handleRequestMoreInfo = () => handleUpdateStatus('Needs More Info');

  const filteredStores = storeRequests.filter(store => {
    const matchesStatus = filterStatus === 'All' || store.currentStatus === filterStatus;
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.city.toLowerCase().includes(searchTerm.toLowerCase());
    const hasAccess = hasStoreAccess(store);
    return matchesStatus && matchesSearch && hasAccess;
  });

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700 animate-pulse border border-yellow-200';
      case 'Needs More Info': return 'bg-blue-100 text-blue-700 border border-blue-200';
      case 'Verified': return 'bg-green-100 text-green-700 border border-green-200';
      case 'Rejected': return 'bg-red-100 text-red-700 border border-red-200';
      default: return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white shadow-3xl rounded-3xl p-12 transition-all duration-500 ease-in-out hover:shadow-4xl">
        {currentView === 'list' ? (
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
        ) : (
          selectedStore && (
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
              {/* Store Details Section */}
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
          )
        )}
      </div>
    </div>
  );
};

export default StoreVerificationDashboard;