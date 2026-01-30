import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SpilloverEffect } from '../../types';
import { getSectorColor } from '../../utils/formatters';
import Badge from '../ui/Badge';

interface SpilloverBarChartProps {
  data: SpilloverEffect[];
}

const SpilloverBarChart: React.FC<SpilloverBarChartProps> = ({ data }) => {
  return (
    <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Sector Spillover Effects</h3>
        <p className="text-sm text-gray-400">Cross-sector influence patterns and transmission lag</p>
      </div>

      <div className="space-y-4">
        {data.map((spillover, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-700/50 bg-dark-700/30 p-4 transition-all hover:border-gray-600 hover:bg-dark-700/50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: getSectorColor(spillover.fromSector) }}
                  />
                  <span className="text-sm font-medium text-white">{spillover.fromSector}</span>
                </div>

                <ArrowRight size={18} className="text-gray-500" />

                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: getSectorColor(spillover.toSector) }}
                  />
                  <span className="text-sm font-medium text-white">{spillover.toSector}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant="info" size="sm">
                  {spillover.lag}d lag
                </Badge>
                <Badge variant={spillover.confidence >= 0.8 ? 'success' : 'warning'} size="sm">
                  {(spillover.confidence * 100).toFixed(0)}% conf.
                </Badge>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Spillover Strength</span>
                <span className="font-semibold text-white">{(spillover.strength * 100).toFixed(0)}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-dark-600">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-economics-500 to-trade-500 transition-all duration-500"
                  style={{ width: `${spillover.strength * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg bg-dark-700/30 p-4">
        <p className="text-xs text-gray-400">
          <span className="font-semibold text-white">Interpretation:</span> Higher spillover strength
          indicates stronger cross-sector transmission. Lag represents the typical delay (in days) before
          effects manifest in the target sector.
        </p>
      </div>
    </div>
  );
};

export default SpilloverBarChart;
