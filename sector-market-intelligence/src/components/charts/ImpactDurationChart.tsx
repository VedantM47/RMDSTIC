import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ImpactDurationChartProps {
  data: {
    shortTerm: number;
    mediumTerm: number;
    longTerm: number;
  };
}

const ImpactDurationChart: React.FC<ImpactDurationChartProps> = ({ data }) => {
  const chartData = [
    { name: 'Short-term', days: data.shortTerm, color: '#3b82f6' },
    { name: 'Medium-term', days: data.mediumTerm, color: '#a855f7' },
    { name: 'Long-term', days: data.longTerm, color: '#f97316' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-700 bg-dark-800 p-3 shadow-xl">
          <p className="text-sm font-medium text-white">{payload[0].payload.name}</p>
          <p className="mt-1 text-xs text-gray-400">
            Impact Duration: <span className="font-bold text-white">{payload[0].value} days</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">Impact Duration Analysis</h3>
        <p className="text-sm text-gray-400">Average persistence of sector effects</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2940" />
          <XAxis
            dataKey="name"
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tickMargin={10}
          />
          <YAxis
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${value}d`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="days" fill="#3b82f6" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Bar key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {chartData.map((item) => (
          <div key={item.name} className="rounded-lg bg-dark-700/50 p-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-xs text-gray-400">{item.name}</span>
            </div>
            <p className="mt-1 text-lg font-bold text-white">{item.days} days</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactDurationChart;
