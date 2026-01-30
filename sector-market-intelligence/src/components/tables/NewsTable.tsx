import React, { useState } from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { NewsEvent } from '../../types';
import { formatDate, getSectorColor, formatPercent } from '../../utils/formatters';
import Badge from '../ui/Badge';

interface NewsTableProps {
  data: NewsEvent[];
}

const NewsTable: React.FC<NewsTableProps> = ({ data }) => {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  
  const filteredData = selectedSector === 'all'
    ? data
    : data.filter(item => item.sector === selectedSector);

  const getImpactVariant = (impact: number) => {
    if (impact > 30) return 'success';
    if (impact > 0) return 'info';
    if (impact > -30) return 'warning';
    return 'danger';
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-dark-800/50">
      <div className="border-b border-gray-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">News Intelligence Feed</h3>
            <p className="text-sm text-gray-400">Verified sector-specific market events</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedSector('all')}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedSector === 'all'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-gray-400 hover:bg-dark-700 hover:text-gray-200'
              }`}
            >
              All
            </button>
            {['Economics', 'Politics', 'Global Trade'].map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  selectedSector === sector
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-gray-400 hover:bg-dark-700 hover:text-gray-200'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800 bg-dark-700/30 text-left text-xs font-medium text-gray-400">
              <th className="px-6 py-3">Event</th>
              <th className="px-6 py-3">Sector</th>
              <th className="px-6 py-3">Impact</th>
              <th className="px-6 py-3">Confidence</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredData.map((news) => (
              <tr
                key={news.id}
                className="transition-colors hover:bg-dark-700/50"
              >
                <td className="px-6 py-4">
                  <div className="max-w-md">
                    <h4 className="text-sm font-medium text-white">{news.title}</h4>
                    <p className="mt-1 text-xs text-gray-400 line-clamp-2">{news.summary}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <span>{news.source}</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: getSectorColor(news.sector) }}
                    />
                    <span className="text-sm text-gray-300">{news.sector}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant={getImpactVariant(news.impact)} size="sm">
                    {formatPercent(news.impact)}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-dark-600">
                      <div
                        className="h-full rounded-full bg-blue-500 transition-all"
                        style={{ width: `${news.confidence * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{(news.confidence * 100).toFixed(0)}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-400">{formatDate(news.date)}</span>
                </td>
                <td className="px-6 py-4">
                  {news.verified && (
                    <div className="flex items-center gap-1 text-success">
                      <CheckCircle size={14} />
                      <span className="text-xs">Verified</span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-gray-400">No news events found for this sector</p>
        </div>
      )}
    </div>
  );
};

export default NewsTable;
