// src/components/StoreDetails/StoreHeader.jsx
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function StoreHeader({
  name,
  city,
  state,
  owner,
  phone,
  email,
  verified,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 lg:gap-10">
      {/* Store Info (Image + Details) */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex-shrink-0" />
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center flex-wrap gap-x-2 gap-y-1 mb-1">
            {name}
            {verified && (
              <span className="text-green-600 text-xs sm:text-sm flex items-center gap-1 mt-1 sm:mt-0">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                Verified
              </span>
            )}
            {!verified && (
              <span className="text-red-600 text-xs sm:text-sm flex items-center gap-1 mt-1 sm:mt-0">
                <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                Not Verified
              </span>
            )}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            {city}, {state}
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-2">{owner}</p>
          <p className="text-gray-700 text-sm sm:text-base">
            {phone || "+91 XXX-XXX-XXXX"}
          </p>
          <p className="text-gray-700 text-sm sm:text-base">{email || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}