import React from "react";
import Overview from "./Overview";
import OffersCreated from "./OffersCreated";
import Bookings from "./Bookings";
import AdRevenue from "./AdRevenue";
import NewStores from "./NewStores";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 w-full mx-auto">
      <Overview />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 max-w-full">
        <OffersCreated />
        <Bookings />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 max-w-full">
        <AdRevenue />
        <NewStores />
      </div>
    </div>
  );
};

export default Dashboard;