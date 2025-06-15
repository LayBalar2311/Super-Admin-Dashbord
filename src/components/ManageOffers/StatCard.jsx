import React from 'react';

const StatCard = ({ title, value, change, changeType, icon }) => {
    const changeColorClass =
        changeType === 'increase' ? 'text-green-500' :
        changeType === 'decrease' ? 'text-red-500' : 'text-gray-500';

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

export default StatCard;
