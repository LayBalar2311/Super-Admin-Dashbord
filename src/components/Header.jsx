import React from 'react';

const Header = ({ toggleSidebar, toggleAlerts }) => {
  return (
    <header className="flex items-center justify-between px-3 py-2 sm:px-5 sm:py-3 bg-white shadow-sm border-b border-gray-200">
      {/* Left Section: Sidebar Toggle + Breadcrumb */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
        {/* Sidebar Toggle (Visible on small/medium screens, hidden on larger desktops) */}
        <button
          className="md:hidden text-gray-600 hover:text-primary-600 focus:outline-none p-2 rounded-md transition-colors"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSidebar();
            console.log('[Header] Sidebar toggle button clicked');
          }}
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Breadcrumb or Page Title (Responsive visibility and font size) */}
        <span className="text-sm font-medium text-gray-700
                         hidden
                         xs:block xs:text-base
                         sm:text-lg">
          Dashboard / Default
        </span>
      </div>

      {/* Right Section: Search + Actions */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        {/* Search Bar - Responsive Width */}
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 bg-gray-50 text-xs sm:text-sm md:text-base rounded-md px-2 py-1.5 sm:py-2 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500
                     w-24 xs:w-32 sm:w-48 md:w-56 lg:w-72
                     transition-all duration-200 ease-in-out"
        />

        {/* Icon Buttons - Grouped for consistent spacing and responsive sizing */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          {/* Theme Button */}
          <button className="p-1.5 sm:p-2 rounded-md text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="Toggle theme">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          </button>

          {/* Notification Button */}
          <button className="p-1.5 sm:p-2 rounded-md text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="Notifications">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 00-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Profile Button */}
          <button className="p-1.5 sm:p-2 rounded-md text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="Profile">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7c-3 0-5.5 1.5-7 4h14c-1.5-2.5-4-4-7-4z" />
            </svg>
          </button>

          {/* Alerts Toggle - Re-using the notification icon for simplicity if alerts are a similar concept */}
          {/* If alerts are distinct, you might need a different SVG or a subtle visual differentiator */}
          <button
            className="p-1.5 sm:p-2 rounded-md text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleAlerts();
              console.log('[Header] Alerts toggle button clicked');
            }}
            aria-label="Toggle alerts"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 00-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;