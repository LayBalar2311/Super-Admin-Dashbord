import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// --- Component: Header ---
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
                    {/* Placeholder for user avatar */}
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
            </div>
        </div>
    );
};

// --- Component: StatCard ---
const StatCard = ({ title, value, change, changeType, icon }) => {
    const changeColorClass =
        changeType === 'increase'
            ? 'text-green-500'
            : changeType === 'decrease'
            ? 'text-red-500'
            : 'text-gray-500';

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-start justify-between">
            <div>
                <h2 className="text-md font-medium text-gray-500">{title}</h2>
                <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
                <p className={`text-sm mt-1 ${changeColorClass}`}>
                    <span className="mr-1">
                        {changeType === 'increase' ? '↑' : changeType === 'decrease' ? '↓' : ''}
                    </span>
                    {change}
                </p>
            </div>
            <div className="text-2xl text-gray-400">
                {icon}
            </div>
        </div>
    );
};

// --- Component: ChartCard ---
const ChartCard = ({ title, chartType, data }) => {
    // Base options for both chart types
    const baseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true, // Show legend for both charts as in the image
                position: 'top',
                align: 'end', // Align legend to the right
                labels: {
                    boxWidth: 12, // Small colored box
                    font: {
                        size: 12,
                    },
                    color: '#6B7280', // Gray text color
                },
            },
            title: {
                display: false, // Title is outside the chart area
            },
            tooltip: {
                enabled: true, // Enable tooltips
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // No vertical grid lines
                    drawBorder: false, // No X-axis line
                },
                ticks: {
                    display: false, // No X-axis labels (bottom labels)
                },
            },
            y: {
                grid: {
                    drawBorder: false, // No Y-axis line
                },
                ticks: {
                    padding: 10, // Padding for labels
                    color: '#6B7280', // Gray color for Y-axis labels
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    // Specific options for the Bar Chart (Offer Performance)
    const barChartOptions = {
        ...baseOptions,
        scales: {
            ...baseOptions.scales,
            y: {
                ...baseOptions.scales.y,
                beginAtZero: true,
                min: 75, // Adjust min to crop the bottom as in the image
                max: 95, // Adjust max to provide top space as in the image
                ticks: {
                    ...baseOptions.scales.y.ticks,
                    stepSize: 10, // Steps of 10
                    callback: function(value) {
                         // Only show 80 and 90, and hide others if they appear
                         if (value === 80 || value === 90) {
                             return value;
                         }
                         return '';
                    },
                    backdropPadding: 0, // No backdrop for ticks
                },
                grid: {
                    ...baseOptions.scales.y.grid,
                    color: (context) => {
                        // Only draw grid lines for 80 and 90
                        if (context.tick.value === 80 || context.tick.value === 90) {
                            return 'rgba(0, 0, 0, 0.05)'; // Light grey line
                        }
                        return 'transparent'; // Hide others
                    },
                },
            },
        },
    };

    // Specific options for the Line Chart (Redemption Trends)
    const lineChartOptions = {
        ...baseOptions,
        scales: {
            ...baseOptions.scales,
            y: {
                ...baseOptions.scales.y,
                beginAtZero: false,
                min: 17.5, // Match the lowest point on the Y-axis visible (below 18)
                max: 20, // Match the highest point on the Y-axis visible
                ticks: {
                    ...baseOptions.scales.y.ticks,
                    stepSize: 1, // Steps of 1
                    callback: function(value) {
                        // Only show 18, 19, 20
                        if (value === 18 || value === 19 || value === 20) {
                            return value;
                        }
                        return '';
                    },
                },
                grid: {
                    ...baseOptions.scales.y.grid,
                    color: (context) => {
                        // Only draw grid lines for 18, 19, 20
                        if (context.tick.value === 18 || context.tick.value === 19 || context.tick.value === 20) {
                            return 'rgba(0, 0, 0, 0.05)'; // Light grey line
                        }
                        return 'transparent'; // Hide others
                    },
                },
            },
        },
        elements: {
            line: {
                tension: 0.4, // Smooth curve
                borderWidth: 2, // Thicker line
            },
            point: {
                radius: 0, // Hide points
                hoverRadius: 5, // Show on hover
            }
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-96 relative">
            <h2 className="text-md font-medium text-gray-500 mb-4">{title}</h2>
            <div className="h-full w-full">
                {chartType === 'bar' && (
                    <Bar
                        data={data}
                        options={barChartOptions}
                        // If bars are not perfectly aligned or spaced, you might need to adjust
                        // `categoryPercentage` and `barPercentage` in the dataset or options.
                    />
                )}
                {chartType === 'line' && <Line data={data} options={lineChartOptions} />}
            </div>
        </div>
    );
};

// --- Main Component: ManageOffersDashboard ---
const ManageOffersDashboard = () => {
    // Dummy data for demonstration - adjusted to fit the visual
    const offerPerformanceData = {
        labels: Array(12).fill(''), // 12 empty labels for 12 potential months, as x-axis labels are hidden
        datasets: [
            {
                label: 'Redemptions',
                data: [0, 0, 0, 80, 0, 0, 0, 85, 0, 0, 0, 0], // Data points placed to simulate bars at 80 and 85
                backgroundColor: '#3B82F6', // Blue color
                barThickness: 10, // A fixed thickness to make bars thin and distinct
                categoryPercentage: 0.2, // Controls the width of the category space occupied by bars
                barPercentage: 0.9, // Controls the width of an individual bar relative to its category space
                borderRadius: 2, // Slightly rounded corners for bars
                minBarLength: 5, // Ensures very short bars are still visible
            },
        ],
    };

    const redemptionTrendsData = {
        labels: Array(7).fill(''), // Enough empty labels for the curve
        datasets: [
            {
                label: 'Redemption Rate',
                data: [18.2, 18.5, 18.8, 19.5, 19.2, 18.9, 19.8], // Data points to create the desired curve
                borderColor: '#F97316', // Orange color
                backgroundColor: 'transparent', // No fill under the line
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <Header />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <StatCard
                    title="Active Offers"
                    value="247"
                    change="12% from last month"
                    changeType="increase"
                    icon="📊"
                />
                <StatCard
                    title="Total Redemptions"
                    value="1,234"
                    change="8% from last month"
                    changeType="increase"
                    icon="📈"
                />
                <StatCard
                    title="Conversion Rate"
                    value="24.8%"
                    change="3% from last month"
                    changeType="decrease"
                    icon="🔄"
                />
                <StatCard
                    title="Revenue Generated"
                    value="$45.2K"
                    change="15% from last month"
                    changeType="increase"
                    icon="💰"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                <ChartCard
                    title="Offer Performance"
                    chartType="bar"
                    data={offerPerformanceData}
                />
                <ChartCard
                    title="Redemption Trends"
                    chartType="line"
                    data={redemptionTrendsData}
                />
            </div>
        </div>
    );
};

export default ManageOffersDashboard;