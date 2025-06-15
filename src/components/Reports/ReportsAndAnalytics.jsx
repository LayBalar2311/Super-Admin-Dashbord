// src/components/ReportsAndAnalytics/ReportsAndAnalytics.jsx
import React, { useState, useEffect } from 'react';
import {
  offerPerformanceData,
  storePerformanceData,
  userBehaviorData,
  systemHealthData,
} from '../../data/mockData'; // Verify this path

// Import the new components
import OfferPerformanceSection from './OfferPerformanceSection';
import StorePerformanceSection from './StorePerformanceSection';
import UserBehaviorSection from './UserBehaviorSection';
import SystemHealthSection from './SystemHealthSection';
import LoadingSpinner from './LoadingSpinner';
import AnalyticsCard from './AnalyticsCard'; // Keep AnalyticsCard if you have common usage outside sections

const ReportsAndAnalytics = () => {
  const [activeTab, setActiveTab] = useState('offerPerformance');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredOfferData, setFilteredOfferData] = useState(offerPerformanceData);
  const [filteredStoreData, setFilteredStoreData] = useState(storePerformanceData);
  const [filteredUserData, setFilteredUserData] = useState(userBehaviorData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      // In a real app, you'd make API calls here with startDate, endDate, selectedStore, selectedCategory
      // For now, we'll just re-use the mock data
      setFilteredOfferData(offerPerformanceData);
      setFilteredStoreData(storePerformanceData);
      setFilteredUserData(userBehaviorData);
      setLoading(false);
    }, 700); // Simulate network delay

    return () => clearTimeout(timer);
  }, [startDate, endDate, selectedStore, selectedCategory]);

  const handleDateChange = (type, e) => {
    if (type === 'start') {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 tracking-tight">
        Admin Dashboard
      </h1>

      {/* Date Range and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 flex flex-wrap gap-6 items-center">
        <div className="flex flex-col">
          <label htmlFor="startDate" className="text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => handleDateChange('start', e)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endDate" className="text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => handleDateChange('end', e)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="storeFilter" className="text-sm font-medium text-gray-700 mb-1">Filter by Store</label>
          <select
            id="storeFilter"
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white appearance-none pr-8 cursor-pointer transition-all duration-200"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em' }}
          >
            <option value="">All Stores</option>
            {/* Populate dynamically in real app */}
            <option value="Coffee Shop A">Coffee Shop A</option>
            <option value="Grocery Mart B">Grocery Mart B</option>
            <option value="Pizza Place C">Pizza Place C</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="categoryFilter" className="text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white appearance-none pr-8 cursor-pointer transition-all duration-200"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em' }}
          >
            <option value="">All Categories</option>
            {/* Populate dynamically in real app */}
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex space-x-3 bg-white p-2 rounded-xl shadow-sm">
        <button
          onClick={() => setActiveTab('offerPerformance')}
          className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeTab === 'offerPerformance' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Offer Performance
        </button>
        <button
          onClick={() => setActiveTab('storePerformance')}
          className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeTab === 'storePerformance' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Store Performance
        </button>
        <button
          onClick={() => setActiveTab('userBehavior')}
          className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeTab === 'userBehavior' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          User Behavior
        </button>
        <button
          onClick={() => setActiveTab('systemHealth')}
          className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeTab === 'systemHealth' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          System Health
        </button>
      </div>

      {/* Conditional Content with Loading State */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeTab === 'offerPerformance' && <OfferPerformanceSection data={filteredOfferData} />}
          {activeTab === 'storePerformance' && <StorePerformanceSection data={filteredStoreData} />}
          {activeTab === 'userBehavior' && <UserBehaviorSection data={filteredUserData} />}
          {activeTab === 'systemHealth' && <SystemHealthSection data={systemHealthData} />}
        </div>
      )}
    </div>
  );
};

export default ReportsAndAnalytics;