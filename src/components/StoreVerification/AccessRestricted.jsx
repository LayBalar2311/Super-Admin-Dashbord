// src/components/StoreVerification/AccessRestricted.jsx
import React from 'react';

const AccessRestricted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white shadow-3xl rounded-3xl p-12 text-center text-gray-900">
        Access Restricted: You do not have permission to view this page.
      </div>
    </div>
  );
};

export default AccessRestricted;