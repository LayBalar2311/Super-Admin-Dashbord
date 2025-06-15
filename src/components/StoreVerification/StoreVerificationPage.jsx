// src/components/StoreVerificationPage.jsx
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // Ensure this path is correct

// Import the new sub-components
import AccessRestricted from './AccessRestricted';
import StoreList from './StoreList';
import StoreDetails from './StoreDetails';

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
    return <AccessRestricted />;
  }

  const fetchStoreList = async () => {
    setError(null);
    setLoading(true);
    try {
      // Simulate API call
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
          adminComments: '',
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
          adminComments: 'Missing business license document.',
        },
        {
          id: 's003',
          name: 'Urban Cafe',
          contactPerson: 'Charlie Green',
          email: 'charlie@urbancafe.com',
          phone: '+91 87654 33333',
          address: '303 Market Street, Dadar, Mumbai, Maharashtra, India',
          submittedDate: '2025-05-27',
          currentStatus: 'Verified',
          city: 'Mumbai',
          businessLicense: 'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf',
          photos: ['https://images.unsplash.com/photo-1504711432881-b6a6c8e0f9b3'],
          adminComments: 'All documents verified. Store is live.',
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
          adminComments: '',
        },
        {
            id: 's005',
            name: 'Spice Route Kitchen',
            contactPerson: 'Priya Sharma',
            email: 'priya@spiceroute.com',
            phone: '+91 99887 65432',
            address: '505 Spice Alley, Vastrapur, Ahmedabad, Gujarat, India',
            submittedDate: '2025-05-25',
            currentStatus: 'Rejected',
            city: 'Ahmedabad',
            businessLicense: 'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf',
            photos: ['https://images.unsplash.com/photo-1505253716333-fd237dd78248'],
            adminComments: 'Does not meet the minimum hygiene standards.',
          },
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
    fetchStoreList(); // Re-fetch list to show updated statuses
  };

  const handleUpdateStatus = async (newStatus) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call for status update
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`Store ${selectedStore.name} status updated to: ${newStatus} (UI only)`);
      // Update the local state
      setStoreRequests(prevRequests =>
        prevRequests.map(store =>
          store.id === selectedStore.id
            ? { ...store, currentStatus: newStatus, adminComments }
            : store
        )
      );
      // After update, go back to list view
      setSelectedStore(null);
      setCurrentView('list');
      fetchStoreList(); // Re-fetch list to ensure data consistency
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
          <StoreList
            user={user}
            loading={loading}
            error={error}
            filteredStores={filteredStores}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            handleViewDetails={handleViewDetails}
            getStatusColorClass={getStatusColorClass}
          />
        ) : (
          selectedStore && (
            <StoreDetails
              selectedStore={selectedStore}
              handleBackToList={handleBackToList}
              verificationStatus={verificationStatus}
              setAdminComments={setAdminComments}
              adminComments={adminComments}
              handleVerify={handleVerify}
              handleReject={handleReject}
              handleRequestMoreInfo={handleRequestMoreInfo}
              loading={loading}
              getStatusColorClass={getStatusColorClass}
            />
          )
        )}
      </div>
    </div>
  );
};

export default StoreVerificationDashboard;