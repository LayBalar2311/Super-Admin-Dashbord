// src/components/StoreDetails.jsx
import React from "react";
import StoreHeader from "./StoreHeader";
import StoreStats from "./StoreStats";
import StoreDocuments from "../StoreDetails/StoreDocuments";
import StoreOffersTable from "../StoreDetails/StoreTable";

const StoreDetails = ({ store, goBack }) => {
  const {
    name = "N/A",
    city = "N/A",
    state = "N/A",
    owner = "N/A",
    phone = "N/A",
    email = "N/A",
    verified = false,
    offers = [],
  } = store || {};

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full mx-auto max-w-full overflow-x-hidden space-y-6 sm:space-y-8 bg-gray-50 min-h-screen">
      <div className="flex justify-start mb-4">
        <button
          onClick={goBack}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          &larr; Back to Stores
        </button>
      </div>
      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8">
        <StoreHeader
          name={name}
          city={city}
          state={state}
          owner={owner}
          phone={phone}
          email={email}
          verified={verified}
        />

        <StoreStats />

        {/* Graph + Documents */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Graph Placeholder */}
          <div className="bg-gray-100 min-h-[16rem] rounded-md flex items-center justify-center text-gray-400 text-lg md:col-span-1 lg:col-span-2 overflow-hidden shadow-sm">
            Graph (Last 30 days)
          </div>
          <StoreDocuments />
        </div>

        <StoreOffersTable offers={offers} />
      </div>
    </div>
  );
};

export default StoreDetails;