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
  const [activePage, setActivePage] = useState('Dashboard'); // State to track active page
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
      // Pass the current active page to StoreDetails if needed for breadcrumbs or context
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
    // 1. Overall flex container for the app
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-stone-50 font-sans relative">
      {/* 2. Header - Fixed at the top */}
      <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-sm">
        <Header toggleSidebar={toggleSidebar} toggleAlerts={toggleAlerts} />
      </div>

      {/* 3. Main Layout Container (fills remaining vertical space below header) */}
      <div className="flex flex-1 pt-[64px] md:pt-[80px]"> {/* pt pushes content below fixed header */}

        {/* Sidebar - Fixed on the left, responsive hide/show */}
        <div
          // CORRECTED SYNTAX: All classes inside one template literal
          className={`
            fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40
            transition-transform duration-300
            pt-[64px] md:pt-[80px]
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <div className="h-full overflow-y-auto"> {/* Ensure content in sidebar scrolls */}
            <Sidebar
              closeSidebar={closeSidebar}
              setActivePage={setActivePage}
              clearSelectedStore={() => setSelectedStore(null)}
              activePage={activePage} // Pass activePage prop to Sidebar
            />
          </div>
        </div>

        {/* Main Content Area - Takes remaining horizontal space */}
        <div className="flex-1 flex overflow-hidden">
          {/* Spacer for Sidebar on larger screens (pushes content right) */}
          <div className="hidden md:block md:w-64 flex-shrink-0" />

          {/* Actual content area that will scroll vertically */}
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            {renderContent()}
          </main>

          {/* Alerts Panel - Fixed on the right, responsive hide/show */}
          <div
            // CORRECTED SYNTAX: All classes inside one template literal
            className={`
              fixed top-0 right-0 h-full w-[320px] bg-white shadow-md z-40
              transition-transform duration-300
              pt-[64px] md:pt-[80px]
              ${isAlertsOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="h-full overflow-y-auto"> {/* Ensure content in alerts scrolls */}
              <Alerts closeAlerts={closeAlerts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}