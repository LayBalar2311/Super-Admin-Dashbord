import React from 'react';

const stats = [
  { label: 'Total Offers (This Week)', value: '5,620' },
  { label: 'Total Stores', value: '43,53,456' },
  { label: 'Total Active Users (Since Last Week)', value: '↓ 430', error: true },
  { label: 'Offer Bookings (This Week)', value: '54,53,456' },
  { label: 'Total Paid Ads Running', value: '124' },
  { label: 'New Requests', value: '↓ 15%', error: true },
];

const Overview = () => {
  return (
    <div className="bg-gradient-to-br from-white to-stone-50 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-lg w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-3 sm:p-4 rounded-lg shadow-md text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out hover:bg-amber-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-opacity-50 ${
              stat.error ? 'bg-amber-100 text-gray-700' : 'bg-stone-50 text-gray-700'
            } hover:scale-[1.02]`}
          >
            <div className="text-gray-600 truncate">{stat.label}</div>
            <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;