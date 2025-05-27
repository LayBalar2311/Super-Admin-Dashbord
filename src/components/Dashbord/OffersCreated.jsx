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
  { date: 'Mar 5', OffersCreated: 400 },
  { date: 'Mar 6', OffersCreated: 700 },
  { date: 'Mar 7', OffersCreated: 500 },
  { date: 'Mar 8', OffersCreated: 450 },
  { date: 'Mar 9', OffersCreated: 900 },
];

const OffersCreated = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6 w-full">
      {/* Main Chart Section */}
      <div className="flex-[3]">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">Offers Created</h2>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-800">Offers Created</h2>
          <div className="text-xs sm:text-sm text-gray-600">
            <span className="text-black bg-gray-100 font-medium m-1 sm:m-2 p-1 sm:p-1.5 rounded">• Daily</span>
            <span className="bg-gray-100 m-1 sm:m-2 p-1 sm:p-1.5 rounded">Weekly</span>
            <span className="bg-gray-100 m-1 sm:m-2 p-1 sm:p-1.5 rounded">Monthly</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250} sm:height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} sm:tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 10 }} sm:tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="OffersCreated" fill="#B2F5EA" radius={[8, 8, 0, 0]} barSize={40} sm:barSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sidebar */}
      <div className="flex-[1] space-y-3">
        <div className="bg-gray-100 rounded-md p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-gray-600">Offer Creation Rate</p>
          <p className="text-lg sm:text-xl font-bold text-gray-800">68%</p>
        </div>
        <div className="bg-gray-100 rounded-md p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-gray-600">Offer Open Rate</p>
          <p className="text-lg sm:text-xl font-bold text-gray-800">80%</p>
        </div>
        <div className="bg-gray-100 rounded-md p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-gray-600">Offer Click-Through Rate</p>
          <p className="text-lg sm:text-xl font-bold text-gray-800">70%</p>
        </div>
        <div className="bg-yellow-100 rounded-md p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-yellow-800 font-medium">Offer Errors</p>
          <p className="text-lg sm:text-xl font-bold text-yellow-900">75</p>
        </div>
        <div className="pt-2 text-right">
          <span className="text-xs sm:text-sm text-gray-600 tracking-wide">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default OffersCreated;