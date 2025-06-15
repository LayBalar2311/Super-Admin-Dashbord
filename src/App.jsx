// src/App.jsx
import React, { useState, useCallback, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Alerts from './components/Alerts';
import ManageStores from './components/ManageStore/StoreDetails/ManageStores';
import StoreDetails from './components/ManageStore/StorePage/StoreDetails';
import Dashboard from './components/Dashbord/dashbord';
import ReportsAndAnalytics from './components/Reports/ReportsAndAnalytics';
import ManageOffers from './components/ManageOffers/ManageOffers';
import UserManagement from './components/UserManagement/Usermanagement';
import SponsoredDashboard from './components/SponserAds/SponsoredAdsDashboard';
import Verification from './components/StoreVerification/StoreVerificationPage';
import Login from '../src/Login'; 
import UserAnalytics from './components/UserAnalytics/useranalytical';

const placeholder = (name) => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-white rounded-3xl shadow-lg">
    {name} Page (Placeholder)
  </div>
);

const Unauthorized = ({ message }) => (
  <div className="p-6 text-gray-900 font-sans text-lg bg-white rounded-3xl shadow-lg">
    {message || 'Access Restricted: You do not have permission to view this page.'}
  </div>
);

export default function App() {
  const { user, hasPageAccess } = useContext(AuthContext);
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
    if (!user) {
      return <Login />;
    }

    if (selectedStore) {
      if (!hasPageAccess('Manage Stores') && !hasPageAccess('Verification')) {
        return <Unauthorized message="Access Restricted: You do not have permission to view store details." />;
      }
      return <StoreDetails store={selectedStore} goBack={() => setSelectedStore(null)} />;
    }

    if (!hasPageAccess(activePage)) {
      return <Unauthorized />;
    }

    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Manage Stores':
        return <ManageStores onStoreClick={setSelectedStore} />;
      case 'Reports & Analytics':
        return <ReportsAndAnalytics />;
      case 'Manage Offers':
        return <ManageOffers />;
      case 'Sponsored Ads':
        return <SponsoredDashboard />;
      case 'User Management':
        return <UserManagement />;
      case 'Moderation / Reports':
        return placeholder('Moderation / Reports');
      case 'Settings':
        return placeholder('Settings');
      case 'Verification':
        return <Verification />;
      case 'UserAnalytics'  :
        return <UserAnalytics/>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      {user ? (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-stone-50 font-sans relative">
          <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-sm">
            <Header toggleSidebar={toggleSidebar} toggleAlerts={toggleAlerts} />
          </div>
          <div className="flex flex-1 pt-[64px] md:pt-[80px]">
            <div
              className={`
                fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40
                transition-transform duration-300
                pt-[64px] md:pt-[80px]
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
              `}
            >
              <div className="h-full overflow-y-auto">
                <Sidebar
                  closeSidebar={closeSidebar}
                  setActivePage={setActivePage}
                  clearSelectedStore={() => setSelectedStore(null)}
                  activePage={activePage}
                />
              </div>
            </div>
            <div className="flex-1 flex overflow-hidden">
              <div className="hidden md:block md:w-64 flex-shrink-0" />
              <main className="flex-1 p-4 md:p-6 overflow-y-auto">{renderContent()}</main>
              <div
                className={`
                  fixed top-0 right-0 h-full w-[320px] bg-white shadow-md z-40
                  transition-transform duration-300
                  pt-[64px] md:pt-[80px]
                  ${isAlertsOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
              >
                <div className="h-full overflow-y-auto">
                  <Alerts closeAlerts={closeAlerts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        renderContent() // Render Login directly without wrapping
      )}
    </>
  );
}