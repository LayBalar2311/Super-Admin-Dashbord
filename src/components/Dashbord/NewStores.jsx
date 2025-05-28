import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Week 1', value: 45 },
  { name: 'Week 2', value: 50 },
  { name: 'Week 3', value: 75 },
  { name: 'Week 4', value: 55 },
  { name: 'Week 5', value: 48 },
];

const NewStores = () => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm flex flex-col gap-4 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
        <h2 className="text-base sm:text-lg font-medium text-gray-800">New Stores Onboarded</h2>
        <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
          <button className="text-gray-500 hover:text-black px-2 py-1">New Stores</button>
          <button className="text-gray-500 hover:text-black px-2 py-1">Last 7 Days</button>
          <button className="bg-gray-200 text-gray-800 rounded-full px-2 py-1">Last 5 Weeks</button>
          <button className="text-gray-500 hover:text-black px-2 py-1">Last 6 months</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        {/* Graph */}
        <div className="flex-[3] h-56 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000000" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#000000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" fontSize={10} sm:fontSize={12} stroke="#ccc" />
              <YAxis fontSize={10} sm:fontSize={12} stroke="#ccc" tickFormatter={(val) => `${val}%`} />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#B2F5EA"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="flex-[1] flex flex-col gap-2 sm:gap-3">
          <div className="bg-gray-100 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-gray-600 font-medium">
            <div>New store requests</div>
            <div className="text-base sm:text-lg text-black font-bold">76%</div>
          </div>
          <div className="bg-gray-100 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-gray-600 font-medium">
            <div>Stores Approved</div>
            <div className="text-base sm:text-lg text-black font-bold">20%</div>
          </div>
          <div className="bg-gray-100 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-gray-600 font-medium">
            <div>Stores Rejected</div>
            <div className="text-base sm:text-lg text-black font-bold">85%</div>
          </div>
          <div className="bg-yellow-100 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-gray-600 font-medium flex justify-between items-center">
            <div>
              <div>Stores for Approval</div>
              <div className="text-base sm:text-lg text-black font-bold">40</div>
            </div>
            <div className="text-base sm:text-lg text-gray-400">›</div>
          </div>
        </div>
      </div>

      <div className="pt-2 text-right">
        <span className="text-xs sm:text-sm text-gray-600 tracking-wide">
          View Details →
        </span>
      </div>
    </div>
  );
};

export default NewStores;