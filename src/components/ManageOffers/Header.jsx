import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div>
                <h1 className="text-2xl font-semibold text-gray-800">Manage Offers</h1>
                <p className="text-sm text-gray-500">Overview of all active and upcoming offers</p>
            </div>
            <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    <span className="text-lg mr-2">+</span> New Offer
                </button>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold overflow-hidden">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;
