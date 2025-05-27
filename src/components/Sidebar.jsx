import React from 'react';

const Sidebar = ({ closeSidebar, setActivePage, clearSelectedStore }) => {
  const menus = [
    'Dashboard',
    'Manage Stores',
    'Reports & Analytics',
    'Manage Offers',
    'Sponsored Ads',
    'User Management',
    'Moderation / Reports',
    'Settings',
  ];

  const handleMenuClick = (menu) => {
    setActivePage(menu);
    clearSelectedStore(); // Clear selectedStore to allow navigation
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
      {menus.map((menu, idx) => (
        <div
          key={idx}
          className="p-3 rounded-lg bg-stone-50 text-gray-700 hover:bg-amber-50 hover:text-gray-900 hover:scale-[1.02] hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => handleMenuClick(menu)}
        >
          {menu}
        </div>
      ))}
      <div className="absolute bottom-4 left-4 text-sm text-gray-600 hover:text-amber-800 hover:scale-[1.02] cursor-pointer transition-all duration-300 ease-in-out">
        Exit
      </div>
    </div>
  );
};

export default Sidebar;