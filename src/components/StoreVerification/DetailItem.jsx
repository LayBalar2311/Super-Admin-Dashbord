// src/components/StoreVerification/DetailItem.jsx
import React from 'react';

const DetailItem = ({ label, value }) => (
  <div className="flex flex-col">
    <p className="font-semibold text-gray-500 text-sm mb-1 uppercase tracking-wide">{label}:</p>
    {value ? (
      <p className="text-lg text-gray-800 font-medium break-words">{value}</p>
    ) : (
      <p className="text-lg text-gray-500 font-medium italic">N/A</p>
    )}
  </div>
);

export default DetailItem;