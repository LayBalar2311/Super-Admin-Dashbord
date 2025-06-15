// src/components/UserAnalytics/UserSentiment.jsx
import React from 'react';

const UserSentiment = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">User Sentiment Overview</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-4xl font-bold text-green-500">😊</p>
          <p className="text-xl font-semibold mt-2">75% Positive</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-yellow-500">😐</p>
          <p className="text-xl font-semibold mt-2">20% Neutral</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-red-500">😠</p>
          <p className="text-xl font-semibold mt-2">5% Negative</p>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">Based on recent survey and feedback analysis.</p>
    </div>
  );
};

export default UserSentiment;