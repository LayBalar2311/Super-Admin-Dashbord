// src/components/ReportsAndAnalytics.jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell,
} from 'recharts';
import {
  offerPerformanceData,
  storePerformanceData,
  userBehaviorData,
  systemHealthData,
} from '../../data/mockData'; // Make sure this path is correct based on your project structure

// Reusable Chart Components (for better organization in a real project)
// For simplicity, I'm embedding them here, but you'd typically extract these
// into src/components/charts/LineChartCard.jsx, etc.

// Adjusted COLORS for a slightly more professional palette
const COLORS = ['#4A90E2', '#50E3C2', '#F5A623', '#BD10E0', '#7ED321', '#FF4E50']; // Blue, Teal, Orange, Purple, Green, Red

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs"> {/* Smaller text for labels */}
      {`${name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-48">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    <p className="ml-4 text-gray-600">Loading data...</p>
  </div>
);

// Main ReportsAndAnalytics Component
const ReportsAndAnalytics = () => {
  const [activeTab, setActiveTab] = useState('offerPerformance');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedStore, setSelectedStore] = useState(''); // New state for store filter
  const [selectedCategory, setSelectedCategory] = useState(''); // New state for category filter
  const [filteredOfferData, setFilteredOfferData] = useState(offerPerformanceData);
  const [filteredStoreData, setFilteredStoreData] = useState(storePerformanceData);
  const [filteredUserData, setFilteredUserData] = useState(userBehaviorData);
  const [loading, setLoading] = useState(true); // New loading state

  // Simulate data filtering based on date range and filters
  useEffect(() => {
    setLoading(true); // Set loading to true when filters change
    const timer = setTimeout(() => {
      // In a real app, you'd make API calls here with startDate, endDate, selectedStore, selectedCategory
      // For now, we'll just re-use the mock data
      setFilteredOfferData(offerPerformanceData);
      setFilteredStoreData(storePerformanceData);
      setFilteredUserData(userBehaviorData);
      setLoading(false); // Set loading to false after data is "fetched"
    }, 700); // Simulate network delay

    return () => clearTimeout(timer); // Cleanup timer
  }, [startDate, endDate, selectedStore, selectedCategory]); // Dependencies for useEffect

  const handleDateChange = (type, e) => {
    if (type === 'start') {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  const Card = ({ title, value, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"> {/* Sharper corners, slightly larger shadow, subtle lift on hover */}
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-4xl font-extrabold text-indigo-700">{value}</p> {/* Larger, bolder value */}
      {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans"> {/* Lighter background, better font stack */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 tracking-tight"> {/* Larger title, tighter tracking */}
        Admin Dashboard
      </h1>

      {/* Date Range and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 flex flex-wrap gap-6 items-center"> {/* Larger shadow, increased gap, rounded-xl */}
        <div className="flex flex-col">
          <label htmlFor="startDate" className="text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => handleDateChange('start', e)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200" // Sharper borders, focus ring, no default outline
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endDate" className="text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => handleDateChange('end', e)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="storeFilter" className="text-sm font-medium text-gray-700 mb-1">Filter by Store</label>
          <select
            id="storeFilter"
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white appearance-none pr-8 cursor-pointer transition-all duration-200" // Added appearance-none for custom arrow
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em' }}
          >
            <option value="">All Stores</option>
            {/* Populate dynamically in real app */}
            <option value="Coffee Shop A">Coffee Shop A</option>
            <option value="Grocery Mart B">Grocery Mart B</option>
            <option value="Pizza Place C">Pizza Place C</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="categoryFilter" className="text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white appearance-none pr-8 cursor-pointer transition-all duration-200"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em' }}
          >
            <option value="">All Categories</option>
            {/* Populate dynamically in real app */}
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex space-x-3 bg-white p-2 rounded-xl shadow-sm"> {/* Tabs within a subtle card */}
        <button
          onClick={() => setActiveTab('offerPerformance')}
          className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${ // Stronger font, larger text, faster transition
            activeTab === 'offerPerformance' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Offer Performance
        </button>
        <button
          onClick={() => setActiveTab('storePerformance')}
          className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeTab === 'storePerformance' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Store Performance
        </button>
        <button
          onClick={() => setActiveTab('userBehavior')}
          className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeTab === 'userBehavior' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          User Behavior
        </button>
        <button
          onClick={() => setActiveTab('systemHealth')}
          className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeTab === 'systemHealth' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          System Health
        </button>
      </div>

      {/* Conditional Content with Loading State */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {/* Added xl column for larger screens */}
          {activeTab === 'offerPerformance' && (
            <>
              <Card title="Total Claims" value={filteredOfferData.claimsOverTime.reduce((sum, d) => sum + d.value, 0).toLocaleString()} description="Across all offers" />
              <Card title="Avg. Redemption Rate" value={`${(filteredOfferData.claimsOverTime.reduce((sum, d) => sum + d.value, 0) / filteredOfferData.viewsOverTime.reduce((sum, d) => sum + d.value, 0) * 100 || 0).toFixed(1)}%`} description="Claims per view" />
              <Card title="Offers Expired Unclaimed" value="45" description="Last 30 days" />
              <Card title="Avg. Offer Value Claimed" value="$7.50" description="Estimated average savings" /> {/* New card for value */}

              <div className="col-span-full bg-white p-6 rounded-xl shadow-lg"> {/* Full width chart, larger shadow */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">Offer Claims & Views Over Time</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={filteredOfferData.claimsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" name="Claims" stroke="#4A90E2" strokeWidth={2} activeDot={{ r: 6 }} /> {/* Thicker line, new color */}
                    <Line type="monotone" dataKey="value" name="Views" stroke="#50E3C2" strokeWidth={2} data={filteredOfferData.viewsOverTime} /> {/* Thicker line, new color */}
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Top 5 Performing Offers (by Claims)</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={filteredOfferData.topOffers}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" angle={-30} textAnchor="end" height={80} interval={0} /> {/* Rotated labels, more height */}
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="claims" fill="#4A90E2" radius={[5, 5, 0, 0]} /> {/* Rounded top corners */}
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="col-span-1 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Offer Type Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={filteredOfferData.offerTypeDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      labelLine={false}
                      label={CustomPieLabel}
                    >
                      {filteredOfferData.offerTypeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {activeTab === 'storePerformance' && (
            <>
              <Card title="Total Stores" value="150" description="Currently active" />
              <Card title="New Stores (Last 30 Days)" value={storePerformanceData.newStoresAdded.filter(d => new Date(d.date) >= new Date(new Date().setDate(new Date().getDate() - 30))).reduce((sum, d) => sum + d.value, 0)} description="Growth rate" />
              <Card title="Avg. Claims per Store" value={`${(storePerformanceData.claimsByStore.reduce((sum, d) => sum + d.claims, 0) / storePerformanceData.claimsByStore.length).toFixed(0)}`} description="Across active stores" />
              <Card title="Top Performing Category" value="Food & Beverages" description="Based on claim volume" /> {/* New card */}


              <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Store Performance (by Claims)</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={filteredStoreData.claimsByStore}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" angle={-30} textAnchor="end" height={80} interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="claims" fill="#50E3C2" radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">New Stores Added Over Time</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={filteredStoreData.newStoresAdded}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" name="New Stores" stroke="#F5A623" strokeWidth={2} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {activeTab === 'userBehavior' && (
            <>
              <Card title="Total Users" value="25,000" description="Registered users" />
              <Card title="Active Users Today" value={userBehaviorData.activeUsersOverTime[userBehaviorData.activeUsersOverTime.length - 1].value} description="Last 24 hours" />
              <Card title="New Sign-ups (Last 30 Days)" value={userBehaviorData.newUsersOverTime.filter(d => new Date(d.date) >= new Date(new Date().setDate(new Date().getDate() - 30))).reduce((sum, d) => sum + d.value, 0)} description="Growth rate" />
              <Card title="Avg. Session Duration" value="3m 45s" description="Time spent on platform" /> {/* New card */}

              <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">User Growth & Activity Over Time</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={filteredUserData.newUsersOverTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" name="New Users" stroke="#BD10E0" strokeWidth={2} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="value" name="Active Users" stroke="#7ED321" strokeWidth={2} data={filteredUserData.activeUsersOverTime} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">User Demographics</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={filteredUserData.userDemographics}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      labelLine={false}
                      label={CustomPieLabel}
                    >
                      {filteredUserData.userDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-lg"> {/* Adjusted to md:col-span-2 for better layout */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">Device Usage</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={filteredUserData.deviceUsage}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      labelLine={false}
                      label={CustomPieLabel}
                    >
                      {filteredUserData.deviceUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {activeTab === 'systemHealth' && (
            <>
              <Card title="Active Offers" value={systemHealthData.activeOffers} description="Currently live on platform" />
              <Card title="Pending Approvals" value={systemHealthData.pendingApprovals} description="Offers awaiting review" />
              <Card title="User Reports" value={systemHealthData.userReports} description="Awaiting moderation" />
              <Card title="Avg. Response Time" value={`${systemHealthData.averageResponseTimeMs} ms`} description="API latency" />
              <Card title="Server Uptime" value="99.99%" description="Last 30 days" /> {/* New card */}


              <div className="col-span-full bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">System Status Overview</h2>
                <div className="flex flex-wrap gap-6 text-gray-700 text-lg"> {/* Increased gap and font size */}
                  <p><span className="font-semibold">Database Status:</span> <span className="text-green-600 font-bold">Operational</span></p>
                  <p><span className="font-semibold">API Gateway:</span> <span className="text-green-600 font-bold">Healthy</span></p>
                  <p><span className="font-semibold">Email Service:</span> <span className="text-green-600 font-bold">Operational</span></p>
                  <p><span className="font-semibold">Last Backup:</span> <span className="text-blue-600 font-bold">2 hours ago</span></p>
                  <p><span className="font-semibold">CDN Status:</span> <span className="text-green-600 font-bold">Optimal</span></p> {/* New status */}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ReportsAndAnalytics;