// src/components/StoreCardList.jsx
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function StoreCardList({ stores, onStoreClick }) {
  return (
    <div className="md:hidden grid grid-cols-1 gap-4">
      {stores.length > 0 ? (
        stores.map((store, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onStoreClick?.(store)}
          >
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              {store.name}
            </h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-600">City:</span>{" "}
                {store.city}
              </p>
              <p>
                <span className="font-medium text-gray-600">State:</span>{" "}
                {store.state}
              </p>
              <p>
                <span className="font-medium text-gray-600">Country:</span>{" "}
                {store.country}
              </p>
              <p>
                <span className="font-medium text-gray-600">Category:</span>{" "}
                {store.category}
              </p>
              <div className="flex items-center gap-1 col-span-2">
                <span className="font-medium text-gray-600">
                  Verification:
                </span>
                <div
                  className={`flex items-center gap-1 ${
                    store.verified ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {store.verified ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <XCircle className="w-4 h-4" />
                  )}
                  <span>{store.verified ? "Verified" : "Not Verified"}</span>
                </div>
              </div>
              <p className="col-span-2">
                <span className="font-medium text-gray-600">Joined:</span>{" "}
                {store.dateJoined}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8 text-gray-500 bg-white rounded-xl shadow-md border border-gray-200">
          No stores found matching your criteria.
        </div>
      )}
    </div>
  );
}