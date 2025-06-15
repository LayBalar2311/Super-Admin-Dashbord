// src/components/UserAnalytics/UserAnalyticsDashboard.jsx
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Import sub-components
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import FeatureUsageList from './FeatureUsageList';
import UserSentiment from './UserSentiment';

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

const UserAnalyticsDashboard = () => {
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

  const featureUsageData = [
    { name: 'Search', usage: '85%' },
    { name: 'Profile Edit', usage: '70%' },
    { name: 'Messaging', usage: '60%' },
    { name: 'Notifications', usage: '55%' },
    { name: 'Settings', usage: '45%' },
  ];

  const deviceUsageData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [{
      data: [60, 35, 5],
      backgroundColor: ['#4BC0C0', '#FFCD56', '#FF6384'],
    }]
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
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="User Growth Over Time">
          <Line data={userGrowthData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'New Users per Month' } } }} />
        </ChartCard>

        <ChartCard title="Daily Active Sessions">
          <Bar data={userActivityData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Active Sessions per Day' } } }} />
        </ChartCard>
      </div>

      {/* Demographics and Geographical Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="User Age Distribution">
          <Pie data={userDemographicsData} options={{ responsive: true, plugins: { legend: { position: 'right' }, title: { display: true, text: 'Age Groups of Users' } } }} />
        </ChartCard>

        <ChartCard title="Top Cities by User Count">
          <Bar data={topCitiesData} options={{ indexAxis: 'y', responsive: true, plugins: { legend: { display: false }, title: { display: true, text: 'Number of Users per City' } } }} />
        </ChartCard>
      </div>

      {/* User Behavior and Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Top User Interests">
          <Pie data={userInterestsData} options={{ responsive: true, plugins: { legend: { position: 'right' }, title: { display: true, text: 'Distribution of User Interests' } } }} />
        </ChartCard>
        
        <ChartCard title="Device Usage">
          <Pie data={deviceUsageData} options={{ responsive: true, plugins: { legend: { position: 'right' } } }} />
        </ChartCard>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureUsageList data={featureUsageData} />
        <UserSentiment />
      </div>

    </div>
  );
};

export default UserAnalyticsDashboard;