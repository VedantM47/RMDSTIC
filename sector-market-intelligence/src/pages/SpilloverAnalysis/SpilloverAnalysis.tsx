import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import SpilloverBarChart from '../../components/charts/SpilloverBarChart';
import Loader from '../../components/ui/Loader';
import Badge from '../../components/ui/Badge';
import { SpilloverEffect, CausalityInsight } from '../../types';
import { dataService } from '../../services/dataService';

const SpilloverAnalysis: React.FC = () => {
  const [spilloverData, setSpilloverData] = useState<SpilloverEffect[]>([]);
  const [causalityData, setCausalityData] = useState<CausalityInsight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [spillovers, causality] = await Promise.all([
        dataService.getSpilloverData(),
        dataService.getCausalityInsights(),
      ]);
      setSpilloverData(spillovers);
      setCausalityData(causality);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex h-96 items-center justify-center">
          <Loader size="lg" text="Loading spillover analysis..." />
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="Spillover Analysis"
      subtitle="Cross-sector influence patterns and causal relationships"
    >
      <div className="space-y-6">
        {/* Overview */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Understanding Spillover Effects</h3>
          <p className="mt-2 text-sm text-gray-400">
            Spillover analysis examines how events in one macro sector influence other sectors over time.
            These cross-sector transmission patterns help identify systemic risks and opportunities that
            may not be immediately apparent from single-sector analysis.
          </p>
        </div>

        {/* Spillover Chart */}
        <SpilloverBarChart data={spilloverData} />

        {/* Causality Insights */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Causal Mechanisms</h3>
          <p className="mt-1 text-sm text-gray-400">
            Understanding the mechanisms behind sector interactions
          </p>

          <div className="mt-6 space-y-4">
            {causalityData.map((insight, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-700/50 bg-dark-700/30 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-economics-500/20 px-3 py-1 text-sm font-medium text-economics-400">
                        Cause
                      </div>
                      <span className="text-sm font-semibold text-white">{insight.cause}</span>
                    </div>

                    <div className="my-3 flex items-center gap-2">
                      <div className="h-px flex-1 bg-gray-700" />
                      <ArrowRight size={16} className="text-gray-500" />
                      <div className="h-px flex-1 bg-gray-700" />
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-trade-500/20 px-3 py-1 text-sm font-medium text-trade-400">
                        Effect
                      </div>
                      <span className="text-sm font-semibold text-white">{insight.effect}</span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="rounded-lg bg-dark-600/50 p-3">
                        <p className="text-xs font-medium text-gray-400">Explanation</p>
                        <p className="mt-1 text-sm text-gray-300">{insight.explanation}</p>
                      </div>
                      <div className="rounded-lg bg-dark-600/50 p-3">
                        <p className="text-xs font-medium text-gray-400">Transmission Mechanism</p>
                        <p className="mt-1 text-sm text-gray-300">{insight.mechanism}</p>
                      </div>
                    </div>
                  </div>

                  <Badge
                    variant={insight.confidence >= 0.8 ? 'success' : 'warning'}
                    size="sm"
                  >
                    {(insight.confidence * 100).toFixed(0)}% conf.
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Visualization Placeholder */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Sector Interconnection Network</h3>
          <p className="mt-1 text-sm text-gray-400">
            Visualizing the strength and direction of cross-sector influences
          </p>
          
          <div className="mt-6 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-700 bg-dark-700/30">
            <div className="text-center">
              <p className="text-sm text-gray-400">Network visualization coming soon</p>
              <p className="mt-1 text-xs text-gray-500">
                Interactive graph showing sector relationships and influence strength
              </p>
            </div>
          </div>
        </div>

        {/* Interpretation Guide */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Interpretation Guidelines</h3>
          <div className="mt-4 space-y-3">
            <div className="flex gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
                1
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Spillover Strength</h4>
                <p className="mt-1 text-xs text-gray-400">
                  Values above 0.7 indicate strong transmission, 0.4-0.7 moderate, and below 0.4 weak.
                  Strong spillovers suggest events in the source sector will likely affect the target sector.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">
                2
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Transmission Lag</h4>
                <p className="mt-1 text-xs text-gray-400">
                  Lag represents the typical delay before effects manifest. Shorter lags indicate more
                  immediate transmission, while longer lags suggest structural or indirect pathways.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-400">
                3
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Confidence Scores</h4>
                <p className="mt-1 text-xs text-gray-400">
                  Higher confidence scores indicate more reliable estimates based on historical data and
                  model consistency. Use lower-confidence spillovers as hypotheses requiring monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default SpilloverAnalysis;
