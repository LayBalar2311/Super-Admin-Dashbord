import React from 'react';

const alerts = [
  { label: 'Offers Flagged', time: 'Just now' },
  { label: 'Booking Error', time: '59 minutes ago' },
  { label: 'Stores Flagged', time: '12 hours ago' },
];

const Alerts = ({ closeAlerts }) => {
  return (
    <div className="w-full h-full bg-white p-5 sm:p-7 rounded-lg shadow-md border-l border-gray-200 flex flex-col pointer-events-auto">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="font-semibold text-base sm:text-lg text-gray-800">Critical Alerts</div>
        <button
          className="text-gray-600 hover:text-primary-600 active:text-primary-800 transition-colors focus:outline-none p-1 rounded-lg"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            closeAlerts();
            console.log('[Alerts] Close button clicked'); // Debugging
          }}
          aria-label="Close alerts"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {alerts.map((alert, idx) => (
          <div key={idx} className="flex justify-between text-sm sm:text-base py-1 border-b border-gray-200 last:border-none">
            <span>{alert.label}</span>
            <span className="text-gray-500">{alert.time}</span>
          </div>
        ))}
      </div>
      <div className="pt-2 text-left">
        <span className="text-sm sm:text-[15px] font-bold text-gray-800 tracking-wide">
          Activities →
        </span>
      </div>
    </div>
  );
};

export default Alerts;