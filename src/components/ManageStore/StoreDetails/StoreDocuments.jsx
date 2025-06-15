// src/components/StoreDetails/StoreDocuments.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

export default function StoreDocuments() {
  const documents = [
    "Trade License",
    "Store Photo",
    "GST Certificate",
  ];

  return (
    <div className="bg-gray-100 rounded-md p-4 shadow-sm md:col-span-1">
      <h3 className="font-semibold text-base sm:text-lg mb-3 text-gray-800">
        Uploaded Documents
      </h3>
      <ul className="text-sm space-y-2 text-gray-700">
        {documents.map((doc, index) => (
          <li key={index} className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-4 h-4" />
            {doc}
          </li>
        ))}
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
  );
}