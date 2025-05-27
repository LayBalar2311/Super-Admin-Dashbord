import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Alerts from './components/Alerts';
import ManageStores from './components/ManageStore/ManageStores';
import StoreDetails from './components/ManageStore/StoreDetails';
import Dashboard from './components/Dashbord/dashbord';

const placeholder = (name) => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-white rounded-3xl shadow-lg">
    {name} Page (Placeholder)
  </div>
);

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');
  const [selectedStore, setSelectedStore] = useState(null);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
    if (isAlertsOpen) setIsAlertsOpen(false);
  }, [isAlertsOpen]);

  const toggleAlerts = useCallback(() => {
    setIsAlertsOpen((prev) => !prev);
    if (isSidebarOpen) setIsSidebarOpen(false);
  }, [isSidebarOpen]);

  const closeSidebar = () => setIsSidebarOpen(false);
  const closeAlerts = () => setIsAlertsOpen(false);

  const renderContent = () => {
    if (selectedStore) {
      return <StoreDetails store={selectedStore} goBack={() => setSelectedStore(null)} />;
    }

    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Manage Stores':
        return <ManageStores onStoreClick={setSelectedStore} />;
      case 'Reports & Analytics':
        return placeholder('Reports & Analytics');
      case 'Manage Offers':
        return placeholder('Manage Offers');
      case 'Sponsored Ads':
        return placeholder('Sponsored Ads');
      case 'User Management':
        return placeholder('User Management');
      case 'Moderation / Reports':
        return placeholder('Moderation / Reports');
      case 'Settings':
        return placeholder('Settings');
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-50 font-sans relative overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-sm">
        <Header toggleSidebar={toggleSidebar} toggleAlerts={toggleAlerts} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Sidebar
          closeSidebar={closeSidebar}
          setActivePage={setActivePage}
          clearSelectedStore={() => setSelectedStore(null)}
        />
      </div>

      {/* Alerts */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-md z-40 transition-transform duration-300 ${
          isAlertsOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Alerts closeAlerts={closeAlerts} />
      </div>

      {/* Main Content */}
      <div className="pt-[64px] md:pt-[80px] transition-all">
        <div className="flex">
          {/* Spacer for Sidebar */}
          <div className="hidden md:block md:w-64" />
          
          <div className="flex-1 px-4 md:px-6 overflow-hidden">
            <main className="overflow-y-auto max-h-[calc(100vh-80px)] pb-6">{renderContent()}</main>
          </div>

          {/* Spacer for Alerts Panel */}
          {isAlertsOpen && <div className="w-[320px] hidden md:block" />}
        </div>
      </div>
    </div>
  );
}
