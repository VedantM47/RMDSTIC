import React, { useEffect, useState } from 'react';
import { TrendingUp, Activity, Target } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import SectorImpactCard from '../../components/cards/SectorImpactCard';
import SectorLineChart from '../../components/charts/SectorLineChart';
import SummaryCard from '../../components/cards/SummaryCard';
import Loader from '../../components/ui/Loader';
import { DashboardData } from '../../types';
import { dataService } from '../../services/dataService';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await dataService.getDashboardData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex h-96 items-center justify-center">
          <Loader size="lg" text="Loading dashboard data..." />
        </div>
      </PageContainer>
    );
  }

  if (!data) {
    return (
      <PageContainer>
        <div className="text-center text-gray-400">Failed to load dashboard data</div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="Market Intelligence Dashboard"
      subtitle="Real-time sector impact analysis and market insights"
    >
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <SummaryCard
            title="Dominant Sector"
            value={data.marketSummary.dominantSector}
            subtitle="Currently leading market influence"
            icon={<Target size={20} />}
          />
          <SummaryCard
            title="Average Confidence"
            value={`${(data.marketSummary.avgConfidence * 100).toFixed(1)}%`}
            subtitle="Model confidence across sectors"
            icon={<Activity size={20} />}
          />
          <SummaryCard
            title="Volatility Index"
            value={data.marketSummary.volatilityIndex.toFixed(1)}
            subtitle="Current market uncertainty"
            icon={<TrendingUp size={20} />}
          />
        </div>

        {/* Sector Impact Cards */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {data.sectors.map((sector) => (
            <SectorImpactCard key={sector.name} data={sector} />
          ))}
        </div>

        {/* Timeline Chart */}
        <SectorLineChart data={data.timeline} />

        {/* Additional Info */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">About This Dashboard</h3>
          <p className="mt-2 text-sm text-gray-400">
            This dashboard displays real-time sector-level intelligence derived from verified news events,
            economic indicators, and quantitative market analysis. The impact scores represent the estimated
            influence of each macro sector on overall market performance, with confidence intervals provided
            for transparency.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-economics-500">Economics</h4>
              <p className="mt-1 text-xs text-gray-400">
                Monetary policy, inflation, employment, GDP growth
              </p>
            </div>
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-politics-500">Politics</h4>
              <p className="mt-1 text-xs text-gray-400">
                Policy changes, regulations, elections, geopolitical events
              </p>
            </div>
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-trade-500">Global Trade</h4>
              <p className="mt-1 text-xs text-gray-400">
                Tariffs, supply chains, currency movements, commodities
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
