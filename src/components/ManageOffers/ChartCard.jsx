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

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const ChartCard = ({ title, chartType, data }) => {
    const baseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    boxWidth: 12,
                    font: { size: 12 },
                    color: '#6B7280',
                },
            },
            tooltip: { enabled: true, mode: 'index', intersect: false },
        },
        scales: {
            x: {
                grid: { display: false, drawBorder: false },
                ticks: { display: false },
            },
            y: {
                grid: { drawBorder: false },
                ticks: {
                    padding: 10,
                    color: '#6B7280',
                    font: { size: 12 },
                },
            },
        },
    };

    const barChartOptions = {
        ...baseOptions,
        scales: {
            ...baseOptions.scales,
            y: {
                ...baseOptions.scales.y,
                beginAtZero: true,
                min: 75,
                max: 95,
                ticks: {
                    ...baseOptions.scales.y.ticks,
                    stepSize: 10,
                    callback: value => (value === 80 || value === 90 ? value : ''),
                    backdropPadding: 0,
                },
                grid: {
                    ...baseOptions.scales.y.grid,
                    color: context => (context.tick.value === 80 || context.tick.value === 90 ? 'rgba(0, 0, 0, 0.05)' : 'transparent'),
                },
            },
        },
    };

    const lineChartOptions = {
        ...baseOptions,
        scales: {
            ...baseOptions.scales,
            y: {
                ...baseOptions.scales.y,
                beginAtZero: false,
                min: 17.5,
                max: 20,
                ticks: {
                    ...baseOptions.scales.y.ticks,
                    stepSize: 1,
                    callback: value => ([18, 19, 20].includes(value) ? value : ''),
                },
                grid: {
                    ...baseOptions.scales.y.grid,
                    color: context => ([18, 19, 20].includes(context.tick.value) ? 'rgba(0, 0, 0, 0.05)' : 'transparent'),
                },
            },
        },
        elements: {
            line: { tension: 0.4, borderWidth: 2 },
            point: { radius: 0, hoverRadius: 5 },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-96 relative">
            <h2 className="text-md font-medium text-gray-500 mb-4">{title}</h2>
            <div className="h-full w-full">
                {chartType === 'bar' && <Bar data={data} options={barChartOptions} />}
                {chartType === 'line' && <Line data={data} options={lineChartOptions} />}
            </div>
        </div>
    );
};

export default ChartCard;
