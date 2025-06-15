// src/components/StoreDetails/StoreStats.jsx
import React from "react";

export default function StoreStats() {
  const stats = [
    { label: "Offers Created", value: "12" },
    { label: "Total Bookings", value: "1" },
    { label: "Ad Spend", value: "₹0" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-auto gap-3 md:gap-4 flex-wrap">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-gray-100 px-3 py-2 sm:px-4 sm:py-3 rounded-md text-center flex-1 min-w-[120px] shadow-sm"
        >
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            {item.value}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}