import { CheckCircle } from "lucide-react";

const StoreDetails = ({ store, goBack }) => {
  return (
    <div className="[1100px] bg-white rounded-xl shadow-lg p-6 xl:p-8 2xl:p-10 gap-6 xl:gap-8 2xl:gap-10 w-full max-w-full mx-auto overflow-x-auto">
     
      {/* Store Header */}
      <div className="flex flex-col md:flex-row md:items-start md:jetify-between gap-4 xl:gap-6 2xl:gap-8">
        <div className="flex gap-6">
          <div className="w-32 h-32 bg-gray-200 rounded" />
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              {store.name}
              <span className="text-green-600 text-sm flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Verified
              </span>
            </h2>
            <p className="text-gray-500">{store.city}, Maharashtra</p>
            <p>{store.owner}</p>
            <p>+91 8348503243</p>
            <p>rahul@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          {[
            { label: "Offers Created", value: "12" },
            { label: "Total Bookings", value: "1" },
            { label: "Ad Spend", value: "₹0" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-100 px-4 py-3 rounded-md text-center flex-1 min-w-[120px]"
            >
              <p className="text-xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Graph + Documents */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 2xl:gap-10">
        <div className="bg-gray-100 min-h-[16rem] rounded-md flex items-center justify-center text-gray-400 col-span-1 md:col-span-1 xl:col-span-2 overflow-hidden">
          Graph (Last 30 days)
        </div>
        <div className="bg-gray-100 rounded-md p-4 col-span-1">
          <h3 className="font-semibold mb-3">Uploaded Documents</h3>
          <ul className="text-sm space-y-2">
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
          <div className="mt-4 flex gap-2">
            <button className="border px-4 py-2 rounded-md">Approve Verification</button>
            <button className="border px-4 py-2 rounded-md">Reject</button>
          </div>
        </div>
      </div>
      {/* Offers Table */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">Offers By This Store</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border rounded-md overflow-hidden">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 w-1/4">Offer Title</th>
                <th className="p-3 w-1/5">Type</th>
                <th className="p-3 w-1/5">Status</th>
                <th className="p-3 w-1/5">Valid Till</th>
                <th className="p-3 w-1/6">View</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { title: "Offer title", type: "Spotlight", status: "Scheduled", date: "10 May" },
                { title: "Offer title", type: "Happy Hours", status: "Active", date: "12 May" },
              ].map((offer, index) => (
                <tr key={index}>
                  <td className="p-3 w-1/4">{offer.title}</td>
                  <td className="p-3 w-1/5">{offer.type}</td>
                  <td className="p-3 w-1/5">{offer.status}</td>
                  <td className="p-3 w-1/5">{offer.date}</td>
                  <td className="p-3 w-1/6 text-blue-600 cursor-pointer">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;