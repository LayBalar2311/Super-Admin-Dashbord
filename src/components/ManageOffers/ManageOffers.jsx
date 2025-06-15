import React from 'react';
import Header from '../ManageOffers/Header';
import StatCard from '../ManageOffers/StatCard';
import ChartCard from '../ManageOffers/ChartCard';

const ManageOffersDashboard = () => {
    const offerPerformanceData = {
        labels: Array(12).fill(''),
        datasets: [
            {
                label: 'Redemptions',
                data: [0, 0, 0, 80, 0, 0, 0, 85, 0, 0, 0, 0],
                backgroundColor: '#3B82F6',
                barThickness: 10,
                categoryPercentage: 0.2,
                barPercentage: 0.9,
                borderRadius: 2,
                minBarLength: 5,
            },
        ],
    };

    const redemptionTrendsData = {
        labels: Array(7).fill(''),
        datasets: [
            {
                label: 'Redemption Rate',
                data: [18.2, 18.5, 18.8, 19.5, 19.2, 18.9, 19.8],
                borderColor: '#F97316',
                backgroundColor: 'transparent',
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <StatCard title="Active Offers" value="247" change="12% from last month" changeType="increase" icon="📊" />
                <StatCard title="Total Redemptions" value="1,234" change="8% from last month" changeType="increase" icon="📈" />
                <StatCard title="Conversion Rate" value="24.8%" change="3% from last month" changeType="decrease" icon="🔄" />
                <StatCard title="Revenue Generated" value="$45.2K" change="15% from last month" changeType="increase" icon="💰" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                <ChartCard title="Offer Performance" chartType="bar" data={offerPerformanceData} />
                <ChartCard title="Redemption Trends" chartType="line" data={redemptionTrendsData} />
            </div>
        </div>
    );
};

export default ManageOffersDashboard;
