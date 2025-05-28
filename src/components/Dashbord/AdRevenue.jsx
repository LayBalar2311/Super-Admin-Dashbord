import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { date: 'Mar 5', type2: 2, type3: 2 },
  { date: 'Mar 6', type2: 4, type3: 3 },
  { date: 'Mar 7', type2: 3, type3: 2 },
  { date: 'Mar 8', type2: 2, type3: 2 },
  { date: 'Mar 9', type2: 4, type3: 4 },
];

const AdRevenue = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg flex flex-col gap-4 w-full transition-all duration-300 ease-in-out hover:shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black font-sans tracking-tight">Ad Revenue</h2>
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-medium">
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 hover:text-black hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out">Ad Revenue</button>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-900 hover:to-gray-800 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out">Daily</button>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 hover:text-black hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out">Weekly</button>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 hover:text-black hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out">Monthly</button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Bar Chart */}
        <div className="flex-[3] h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="4 4" stroke="#d1d5db" vertical={false} />
              <XAxis dataKey="date" fontSize={10} sm:fontSize={12} stroke="#6b7280" tick={{ fill: '#6b7280' }} />
              <YAxis fontSize={10} sm:fontSize={12} stroke="#6b7280" tick={{ fill: '#6b7280' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  border: 'none',
                }}
              />
              <Bar dataKey="type2" stackId="a" fill="#97E8DAFF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="type3" stackId="a" fill="#B2F5EA" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Cards */}
        <div className="flex-[1] flex flex-col gap-3 sm:gap-4">
          <div className="bg-white rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-gray-600 font-medium transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-[1.02] hover:shadow-xl">
            <div>Ad Revenue (This Week)</div>
            <div className="text-xl sm:text-2xl text-black font-bold">8</div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-gray-600 font-medium transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-[1.02] hover:shadow-xl">
            <div>Ad Revenue from Type 2</div>
            <div className="text-xl sm:text-2xl text-black font-bold">3</div>
          </div>
          <div className="bg-gray-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-black font-medium transition-all duration-300 ease-in-out  hover:scale-[1.02] hover:shadow-xl">
            <div>Ad Revenue from Type 3</div>
            <div className="text-xl sm:text-2xl text-black font-bold">4</div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-gray-600 font-medium flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-[1.02] hover:shadow-xl">
            <div>
              <div>Ads for Approval</div>
              <div className="text-xl sm:text-2xl text-black font-bold">1</div>
            </div>
            <div className="text-lg sm:text-xl text-gray-400">›</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-right">
        <a
          href="#"
          className="text-xs sm:text-sm text-gray-600  font-medium tracking-wide transition-all duration-300 ease-in-out"
        >
          View Details →
        </a>
      </div>
    </div>
  );
};

export default AdRevenue;