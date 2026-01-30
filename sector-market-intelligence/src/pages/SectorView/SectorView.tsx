import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import SectorLineChart from '../../components/charts/SectorLineChart';
import ImpactDurationChart from '../../components/charts/ImpactDurationChart';
import NewsTable from '../../components/tables/NewsTable';
import Loader from '../../components/ui/Loader';
import Badge from '../../components/ui/Badge';
import { SectorDetailData } from '../../types';
import { dataService } from '../../services/dataService';
import { getSectorColor } from '../../utils/formatters';

const SectorView: React.FC = () => {
  const { sectorName } = useParams<{ sectorName: string }>();
  const [data, setData] = useState<SectorDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!sectorName) return;
      
      setLoading(true);
      const result = await dataService.getSectorData(sectorName);
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [sectorName]);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex h-96 items-center justify-center">
          <Loader size="lg" text="Loading sector data..." />
        </div>
      </PageContainer>
    );
  }

  if (!data) {
    return (
      <PageContainer>
        <div className="text-center text-gray-400">Sector not found</div>
      </PageContainer>
    );
  }

  const sectorColor = getSectorColor(data.name);

  return (
    <PageContainer>
      <div className="space-y-6">
        {/* Header */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl" style={{ backgroundColor: sectorColor }} />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">{data.name} Sector</h1>
              <p className="mt-2 text-sm text-gray-400">{data.description}</p>
            </div>
          </div>
        </div>

        {/* Key Drivers */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Key Drivers</h3>
          <p className="mt-1 text-sm text-gray-400">Primary factors influencing this sector's market impact</p>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.keyDrivers.map((driver, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-gray-700/50 bg-dark-700/30 p-3"
              >
                <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: sectorColor }} />
                <span className="text-sm text-gray-300">{driver}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ImpactDurationChart data={data.impactDuration} />
          
          <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
            <h3 className="text-lg font-semibold text-white">Impact Metrics</h3>
            <p className="mt-1 text-sm text-gray-400">Statistical analysis of sector influence</p>
            
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Short-term Impact</span>
                  <Badge variant="info" size="sm">{data.impactDuration.shortTerm} days</Badge>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Immediate market reactions to sector events
                </p>
              </div>

              <div className="h-px bg-gray-800" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Medium-term Impact</span>
                  <Badge variant="warning" size="sm">{data.impactDuration.mediumTerm} days</Badge>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Sustained effects through market adjustment period
                </p>
              </div>

              <div className="h-px bg-gray-800" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Long-term Impact</span>
                  <Badge variant="success" size="sm">{data.impactDuration.longTerm} days</Badge>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Structural changes and policy implementation effects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <SectorLineChart data={data.timeline} showMarketReturn={false} />

        {/* Recent Events */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Recent Events</h3>
          <p className="mt-1 text-sm text-gray-400">Latest verified news affecting this sector</p>
          <div className="mt-4">
            <NewsTable data={data.recentEvents} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default SectorView;
