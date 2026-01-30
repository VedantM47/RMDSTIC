import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'stable';
  icon?: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, subtitle, trend, icon }) => {
  const trendColor = trend === 'up' ? 'text-success' : trend === 'down' ? 'text-danger' : 'text-gray-400';

  return (
    <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-400">{title}</p>
          <p className="mt-2 text-2xl font-bold text-white">{value}</p>
          {subtitle && <p className={`mt-1 text-sm ${trendColor}`}>{subtitle}</p>}
        </div>
        {icon && <div className="text-gray-500">{icon}</div>}
      </div>
    </div>
  );
};

export default SummaryCard;
