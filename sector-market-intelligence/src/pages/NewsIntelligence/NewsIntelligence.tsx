import React, { useEffect, useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import NewsTable from '../../components/tables/NewsTable';
import Loader from '../../components/ui/Loader';
import { NewsEvent } from '../../types';
import { dataService } from '../../services/dataService';

const NewsIntelligence: React.FC = () => {
  const [data, setData] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await dataService.getNewsData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex h-96 items-center justify-center">
          <Loader size="lg" text="Loading news intelligence..." />
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="News Intelligence"
      subtitle="Verified market-moving events across all sectors"
    >
      <div className="space-y-6">
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Intelligence Feed</h3>
              <p className="mt-1 text-sm text-gray-400">
                All news events are verified through multiple sources and analyzed for market impact
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{data.length}</p>
              <p className="text-xs text-gray-400">Total Events</p>
            </div>
          </div>
        </div>

        <NewsTable data={data} />

        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Methodology</h3>
          <p className="mt-2 text-sm text-gray-400">
            Our news intelligence system processes events through multiple verification layers:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-blue-400">Source Verification</h4>
              <p className="mt-1 text-xs text-gray-400">
                Events are cross-referenced with official government sources, major financial news outlets,
                and regulatory filings to ensure accuracy.
              </p>
            </div>
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-purple-400">Impact Assessment</h4>
              <p className="mt-1 text-xs text-gray-400">
                Each event is analyzed for its potential market impact using quantitative models and
                historical precedent analysis.
              </p>
            </div>
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-orange-400">Confidence Scoring</h4>
              <p className="mt-1 text-xs text-gray-400">
                Confidence scores reflect the certainty of our impact assessment based on data quality,
                source reliability, and model agreement.
              </p>
            </div>
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-green-400">Sector Classification</h4>
              <p className="mt-1 text-xs text-gray-400">
                Events are categorized into Economics, Politics, or Global Trade based on their primary
                domain of influence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default NewsIntelligence;
