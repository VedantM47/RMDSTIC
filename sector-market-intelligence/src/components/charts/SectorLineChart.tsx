import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TimelineDataPoint } from '../../types';
import { formatDate } from '../../utils/formatters';

interface SectorLineChartProps {
  data: TimelineDataPoint[];
  showMarketReturn?: boolean;
}

const SectorLineChart: React.FC<SectorLineChartProps> = ({ data, showMarketReturn = true }) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-700 bg-dark-800 p-3 shadow-xl">
          <p className="text-xs text-gray-400">{formatDate(label)}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="mt-1 flex items-center justify-between gap-4">
              <span className="text-xs font-medium" style={{ color: entry.color }}>
                {entry.name}:
              </span>
              <span className="text-xs font-bold text-white">
                {entry.value.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">Sector Impact Timeline</h3>
        <p className="text-sm text-gray-400">Historical sector influence on market performance</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2940" />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => formatDate(value, 'MMM dd')}
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tickMargin={10}
          />
          <YAxis
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="economics"
            name="Economics"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="politics"
            name="Politics"
            stroke="#a855f7"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="globalTrade"
            name="Global Trade"
            stroke="#f97316"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          {showMarketReturn && (
            <Line
              type="monotone"
              dataKey="marketReturn"
              name="Market Return"
              stroke="#10b981"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 6 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SectorLineChart;
