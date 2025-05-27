import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Alerts from './components/Alerts';
import ManageStores from './components/ManageStores';
import StoreDetails from './components/StoreDetails';
import Dashboard from './components/Dashbord/dashbord';

// Placeholder components for unhandled menu items
const ReportsAnalytics = () => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-lg">
    Reports & Analytics Page (Placeholder)
  </div>
);
const ManageOffers = () => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-lg">
    Manage Offers Page (Placeholder)
  </div>
);
const SponsoredAds = () => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-lg">
    Sponsored Ads Page (Placeholder)
  </div>
);
const UserManagement = () => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-lg">
    User Management Page (Placeholder)
  </div>
);
const ModerationReports = () => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-lg">
    Moderation / Reports Page (Placeholder)
  </div>
);
const Settings = () => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-lg">
    Settings Page (Placeholder)
  </div>
);

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
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
      case "Dashboard":
        return <Dashboard />;
      case "Manage Stores":
        return <ManageStores onStoreClick={setSelectedStore} />;
      case "Reports & Analytics":
        return <ReportsAnalytics />;
      case "Manage Offers":
        return <ManageOffers />;
      case "Sponsored Ads":
        return <SponsoredAds />;
      case "User Management":
        return <UserManagement />;
      case "Moderation / Reports":
        return <ModerationReports />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-50 font-sans relative overflow-x-auto">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-30 bg-gradient-to-br from-white to-stone-50 shadow-sm">
        <Header toggleSidebar={toggleSidebar} toggleAlerts={toggleAlerts} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-white to-stone-50 shadow-md z-40 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Sidebar closeSidebar={closeSidebar} setActivePage={setActivePage} clearSelectedStore={() => setSelectedStore(null)} />
      </div>

      {/* Alerts */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-white to-stone-50 shadow-md z-40 transition-transform duration-300 ease-in-out ${
          isAlertsOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Alerts closeAlerts={closeAlerts} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full pt-[64px] md:pt-[80px] transition-all duration-300 ease-in-out">
        <div
          className={`w-full mx-auto ${
            isSidebarOpen ? 'md:ml-[260px] xl:ml-[200px]' : 'md:ml-[260px] xl:ml-[200px]'
          } ${isAlertsOpen ? 'md:mr-[260px] xl:mr-[200px]' : 'md:mr-0'}`}
        >
          <main className="pt-4 pr-4 pb-4 pl-6 md:pt-6 md:pr-6 md:pb-6 md:pl-0 overflow-y-auto overflow-x-auto flex-1">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}