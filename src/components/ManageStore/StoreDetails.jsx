import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const StoreDetails = ({ store, goBack }) => {
  const {
    name = "N/A",
    city = "N/A",
    state = "N/A",
    owner = "N/A",
    phone = "N/A",
    email = "N/A",
    verified = false,
  } = store || {};

  return (
    // Add min-h-screen to the outermost div
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full mx-auto max-w-full overflow-x-hidden space-y-6 sm:space-y-8 bg-gray-50 min-h-screen">
      
      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8">
        {/* Store Header */}
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
              <p className="text-gray-700 text-sm sm:text-base">{phone || "+91 XXX-XXX-XXXX"}</p>
              <p className="text-gray-700 text-sm sm:text-base">{email || "N/A"}</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-auto gap-3 md:gap-4 flex-wrap">
            {[
              { label: "Offers Created", value: "12" },
              { label: "Total Bookings", value: "1" },
              { label: "Ad Spend", value: "₹0" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-100 px-3 py-2 sm:px-4 sm:py-3 rounded-md text-center flex-1 min-w-[120px] shadow-sm"
              >
                <p className="text-lg sm:text-xl font-bold text-gray-800">{item.value}</p>
                <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Graph + Documents */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Graph Placeholder */}
          <div className="bg-gray-100 min-h-[16rem] rounded-md flex items-center justify-center text-gray-400 text-lg md:col-span-1 lg:col-span-2 overflow-hidden shadow-sm">
            Graph (Last 30 days)
          </div>
          {/* Uploaded Documents */}
          <div className="bg-gray-100 rounded-md p-4 shadow-sm md:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 text-gray-800">
              Uploaded Documents
            </h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                Trade License
              </li>
              <li className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                Store Photo
              </li>
              <li className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                GST Certificate
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="flex-1 min-w-[120px] border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors shadow-sm">
                Approve Verification
              </button>
              <button className="flex-1 min-w-[120px] border border-red-400 bg-red-50 text-red-700 hover:bg-red-100 px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors shadow-sm">
                Reject
              </button>
            </div>
          </div>
        </div>

        {/* Offers Table */}
        <div className="mt-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            Offers By This Store
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-[600px] md:min-w-full text-sm w-full border-collapse">
              <thead className="bg-gray-100 text-left text-xs sm:text-sm uppercase text-gray-500">
                <tr>
                  <th className="p-3">Offer Title</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Valid Till</th>
                  <th className="p-3">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { title: "Offer title", type: "Spotlight", status: "Scheduled", date: "10 May" },
                  { title: "Offer title", type: "Happy Hours", status: "Active", date: "12 May" },
                ].map((offer, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 text-sm">{offer.title}</td>
                    <td className="p-3 text-sm">{offer.type}</td>
                    <td className="p-3 text-sm">{offer.status}</td>
                    <td className="p-3 text-sm">{offer.date}</td>
                    <td className="p-3 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                      View
                    </td>
                  </tr>
                ))}
                {/* Fallback for no offers */}
                {store.offers && store.offers.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      No offers created by this store.
                    </td>
                  </tr>
                )}
                {/* Fallback for missing offers data */}
                {!store.offers && (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      Offers data not available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;