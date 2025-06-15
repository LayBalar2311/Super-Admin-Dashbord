// components/Sidebar.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Sidebar = ({ closeSidebar, setActivePage, clearSelectedStore, activePage }) => {
  const { user, hasPageAccess, logout } = useContext(AuthContext); // Added logout

  const menus = [
    'Dashboard',
    'Verification',
    'Manage Stores',
    'Reports & Analytics',
    'Manage Offers',
    'Sponsored Ads',
    'User Management',
    'Moderation / Reports',
    'Settings',
    'UserAnalytics'
  ];

  // Filter menus based on user permissions
  const accessibleMenus = user?.role === 'admin' ? menus : menus.filter(menu => hasPageAccess(menu));

  const handleMenuClick = (menu) => {
    setActivePage(menu);
    clearSelectedStore();
    closeSidebar();
  };

  const handleLogout = () => {
    console.log('Logout clicked'); // Debug log
    logout(); // Call logout from AuthContext
    closeSidebar();
  };

  return (
    <div className="w-64 h-full bg-gradient-to-br from-white to-stone-50 border-r border-stone-200 p-4 relative transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 font-sans tracking-tight">Logo</h2>
        <button
          className="md:hidden text-gray-600 hover:text-amber-800 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            closeSidebar();
          }}
          aria-label="Close sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav>
        {accessibleMenus.map((menu, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-gray-900 hover:scale-[1.02] hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out mb-2
              ${activePage === menu ? 'bg-amber-100 text-gray-900 font-semibold shadow-md' : 'bg-stone-50'}`}
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </div>
        ))}
      </nav>
      <div
        className="absolute bottom-4 left-4 text-sm text-gray-600 hover:text-amber-800 hover:scale-[1.02] cursor-pointer transition-all duration-300 ease-in-out"
        onClick={handleLogout} // Fixed: Call handleLogout directly
      >
        Log Out
      </div>
    </div>
  );
};

export default Sidebar;