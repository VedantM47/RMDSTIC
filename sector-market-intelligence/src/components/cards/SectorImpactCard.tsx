import React from 'react';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import { SectorImpact } from '../../types';
import { formatPercent, getSectorColor } from '../../utils/formatters';
import Badge from '../ui/Badge';
import Tooltip from '../ui/Tooltip';

interface SectorImpactCardProps {
  data: SectorImpact;
}

const SectorImpactCard: React.FC<SectorImpactCardProps> = ({ data }) => {
  const TrendIcon = data.trend === 'up' ? ArrowUp : data.trend === 'down' ? ArrowDown : ArrowRight;
  const sectorColor = getSectorColor(data.name);

  return (
    <div className="group rounded-xl border border-gray-800 bg-dark-800/50 p-5 transition-all hover:border-gray-700 hover:bg-dark-800">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: sectorColor }}
            />
            <h3 className="font-semibold text-white">{data.name}</h3>
          </div>
          
          <div className="mt-3 flex items-baseline gap-2">
            <span
              className="text-3xl font-bold"
              style={{ color: data.currentImpact >= 0 ? '#10b981' : '#ef4444' }}
            >
              {formatPercent(data.currentImpact, 1)}
            </span>
            <TrendIcon
              size={18}
              className={
                data.trend === 'up'
                  ? 'text-success'
                  : data.trend === 'down'
                  ? 'text-danger'
                  : 'text-gray-400'
              }
            />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Tooltip content="Model confidence in this impact assessment">
              <Badge variant="info" size="sm">
                {(data.confidence * 100).toFixed(0)}% confidence
              </Badge>
            </Tooltip>
            <div className="text-xs text-gray-500">
              {data.dominance}% dominance
            </div>
          </div>
        </div>

        <div className="relative h-16 w-16">
          <svg className="h-16 w-16 -rotate-90 transform">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-dark-600"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke={sectorColor}
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={`${(data.dominance / 100) * 176} 176`}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-white">{data.dominance}%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      
      <div className="mt-3 text-xs text-gray-500">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default SectorImpactCard;
