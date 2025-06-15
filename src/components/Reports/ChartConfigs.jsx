// src/components/ReportsAndAnalytics/ChartConfigs.js

export const COLORS = ['#4A90E2', '#50E3C2', '#F5A623', '#BD10E0', '#7ED321', '#FF4E50']; // Blue, Teal, Orange, Purple, Green, Red

export const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs">
      {`${name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};