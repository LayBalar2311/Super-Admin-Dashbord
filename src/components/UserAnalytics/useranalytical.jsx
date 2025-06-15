import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2'; // Assuming you'll use react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const UserAnalytics = () => {
  // --- Placeholder Data for Analytics ---
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [300, 450, 600, 500, 750, 900],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const userActivityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Sessions',
        data: [1200, 1500, 1300, 1700, 1600, 1000, 800],
        backgroundColor: 'rgba(153,102,255,0.6)',
      },
    ],
  };

  const userDemographicsData = {
    labels: ['25-34', '35-44', '18-24', '45-54', '55+'],
    datasets: [
      {
        label: 'User Age Distribution',
        data: [30, 25, 20, 15, 10], // percentages
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const topCitiesData = {
    labels: ['New York', 'London', 'Mumbai', 'Tokyo', 'Paris'],
    datasets: [
      {
        label: 'Users by City',
        data: [2500, 1800, 1500, 1200, 900],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  const userInterestsData = {
    labels: ['Tech', 'Sports', 'Travel', 'Food', 'Fashion'],
    datasets: [
      {
        label: 'User Interests',
        data: [40, 20, 15, 15, 10], // percentages
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Analytics Overview Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '24,567', change: '+12%', icon: '👥', color: 'text-green-600', description: 'compared to last month' },
          { label: 'Avg. Session Duration', value: '05:30 min', change: '+5%', icon: '⏳', color: 'text-green-600', description: 'compared to last month' },
          { label: 'Bounce Rate', value: '35%', change: '-3%', icon: '📉', color: 'text-green-600', description: 'compared to last month' },
          { label: 'Conversion Rate', value: '4.2%', change: '+0.5%', icon: '📈', color: 'text-green-600', description: 'compared to last month' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl p-5 border border-gray-100 transform hover:scale-105 transition duration-300">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-600">{stat.label}</h4>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
            <p className={`text-sm ${stat.color} flex items-center`}>
              {stat.change} <span className="ml-1 text-gray-500 text-xs">{stat.description}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">User Growth Over Time</h3>
          <Line data={userGrowthData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'New Users per Month' } } }} />
        </div>

        {/* User Activity Chart */}
        <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Active Sessions</h3>
          <Bar data={userActivityData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Active Sessions per Day' } } }} />
        </div>
      </div>

      {/* Demographics and Geographical Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Demographics */}
        <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">User Age Distribution</h3>
          <Pie data={userDemographicsData} options={{ responsive: true, plugins: { legend: { position: 'right' }, title: { display: true, text: 'Age Groups of Users' } } }} />
        </div>

        {/* Users by City/Area */}
        <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Cities by User Count</h3>
          <Bar data={topCitiesData} options={{ indexAxis: 'y', responsive: true, plugins: { legend: { display: false }, title: { display: true, text: 'Number of Users per City' } } }} />
        </div>
      </div>

      {/* User Behavior and Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Interests */}
        <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top User Interests</h3>
          <Pie data={userInterestsData} options={{ responsive: true, plugins: { legend: { position: 'right' }, title: { display: true, text: 'Distribution of User Interests' } } }} />
        </div>

        
      </div>

      {/* Engagement Metrics (Could be combined with activity or separate) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Feature Usage (Top 5)</h3>
          <ul className="space-y-3">
            {[
              { name: 'Search', usage: '85%' },
              { name: 'Profile Edit', usage: '70%' },
              { name: 'Messaging', usage: '60%' },
              { name: 'Notifications', usage: '55%' },
              { name: 'Settings', usage: '45%' },
            ].map((feature, idx) => (
              <li key={idx} className="flex justify-between items-center text-gray-700">
                <span>{feature.name}</span>
                <span className="font-semibold">{feature.usage}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Device Usage</h3>
          <Pie data={{
            labels: ['Mobile', 'Desktop', 'Tablet'],
            datasets: [{
              data: [60, 35, 5],
              backgroundColor: ['#4BC0C0', '#FFCD56', '#FF6384'],
            }]
          }} options={{ responsive: true, plugins: { legend: { position: 'right' } } }} />
        </div>
      </div>

      {/* User Feedback/Sentiment (if you collect it) */}
      <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">User Sentiment Overview</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-4xl font-bold text-green-500">😊</p>
            <p className="text-xl font-semibold mt-2">75% Positive</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-500">😐</p>
            <p className="text-xl font-semibold mt-2">20% Neutral</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-500">😠</p>
            <p className="text-xl font-semibold mt-2">5% Negative</p>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">Based on recent survey and feedback analysis.</p>
      </div>

    </div>
  );
};

export default UserAnalytics;