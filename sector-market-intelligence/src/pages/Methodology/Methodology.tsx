import React from 'react';
import { Shield, Database, TrendingUp, CheckCircle } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';

const Methodology: React.FC = () => {
  return (
    <PageContainer
      title="Methodology"
      subtitle="How we analyze sector-based market intelligence"
    >
      <div className="space-y-6">
        {/* Overview */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">System Overview</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            The Sector-Based Market Impact Intelligence Engine analyzes how macro sectors (Economics,
            Politics, Global Trade) influence stock markets over time. Unlike prediction systems, our
            approach focuses on interpretation and exploration of causal relationships using verified
            news and quantitative indices.
          </p>
        </div>

        {/* Core Components */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/20 p-3">
                <Database size={24} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Data Sources</h3>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-dark-700/50 p-3">
                <h4 className="text-sm font-semibold text-blue-400">Official Sources</h4>
                <p className="mt-1 text-xs text-gray-400">
                  Federal Reserve, BLS, Treasury, SEC filings, White House statements
                </p>
              </div>
              <div className="rounded-lg bg-dark-700/50 p-3">
                <h4 className="text-sm font-semibold text-purple-400">Market Data</h4>
                <p className="mt-1 text-xs text-gray-400">
                  Stock indices, bond yields, commodity prices, currency rates
                </p>
              </div>
              <div className="rounded-lg bg-dark-700/50 p-3">
                <h4 className="text-sm font-semibold text-orange-400">News Aggregation</h4>
                <p className="mt-1 text-xs text-gray-400">
                  Bloomberg, Reuters, WSJ, FT (verified and cross-referenced)
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-500/20 p-3">
                <TrendingUp size={24} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Analysis Pipeline</h3>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Event Collection</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Automated ingestion of news and data releases
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Verification</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Multi-source cross-referencing and fact-checking
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-400">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Impact Assessment</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Quantitative modeling of market effects
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-xs font-bold text-green-400">
                  4
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Presentation</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Visualization and interpretation for users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sector Definitions */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Sector Definitions</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-economics-500/30 bg-economics-500/5 p-4">
              <h4 className="text-sm font-semibold text-economics-400">Economics</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Macroeconomic indicators including monetary policy (Fed decisions), inflation (CPI, PPI),
                employment data (payrolls, unemployment), GDP growth, consumer spending, and central
                bank communications.
              </p>
            </div>
            <div className="rounded-lg border border-politics-500/30 bg-politics-500/5 p-4">
              <h4 className="text-sm font-semibold text-politics-400">Politics</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Political events and policy changes including elections, legislation, executive orders,
                regulatory decisions (SEC, FTC, EPA), Supreme Court rulings, and geopolitical
                developments affecting markets.
              </p>
            </div>
            <div className="rounded-lg border border-trade-500/30 bg-trade-500/5 p-4">
              <h4 className="text-sm font-semibold text-trade-400">Global Trade</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                International trade dynamics including tariff policies, trade negotiations, supply chain
                disruptions, currency movements, commodity price shocks, and international economic
                agreements.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Key Metrics Explained</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-white">Impact Score</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Ranges from -100 to +100, representing the estimated influence of a sector on market
                performance. Positive values indicate bullish influence, negative values bearish influence.
                Calculated using event magnitude, market response, and historical correlations.
              </p>
            </div>
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-white">Confidence Score</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Ranges from 0 to 1 (0% to 100%), reflecting our certainty in the impact assessment.
                Based on data quality, source reliability, model agreement, and historical precedent
                strength. Higher confidence scores indicate more reliable estimates.
              </p>
            </div>
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-white">Dominance Percentage</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Represents the relative importance of each sector at a given time. If Economics shows 45%
                dominance, it means 45% of current market movement is attributed to economic factors.
                Calculated using variance decomposition of market returns.
              </p>
            </div>
            <div className="rounded-lg bg-dark-700/50 p-4">
              <h4 className="text-sm font-semibold text-white">Spillover Strength</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Measures how events in one sector affect others. Values range from 0 to 1, with higher
                values indicating stronger cross-sector transmission. Estimated using Granger causality
                tests and vector autoregression models.
              </p>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="rounded-xl border border-yellow-800 bg-yellow-500/5 p-6">
          <div className="flex items-center gap-3">
            <Shield size={24} className="text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Important Limitations</h3>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-yellow-400" />
              <p className="text-sm text-gray-400">
                <span className="font-medium text-white">Not Predictive:</span> This system analyzes
                current and historical impacts, not future predictions. Do not use for trading decisions.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-yellow-400" />
              <p className="text-sm text-gray-400">
                <span className="font-medium text-white">Causality Inference:</span> Displayed causal
                relationships are model-based estimates, not definitive proof. Correlation does not
                imply causation.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-yellow-400" />
              <p className="text-sm text-gray-400">
                <span className="font-medium text-white">Model Uncertainty:</span> All metrics include
                confidence scores to reflect uncertainty. Lower confidence requires additional scrutiny.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-yellow-400" />
              <p className="text-sm text-gray-400">
                <span className="font-medium text-white">Data Dependencies:</span> System quality depends
                on timely, accurate input data. Delayed or incorrect data affects all downstream metrics.
              </p>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
          <h3 className="text-lg font-semibold text-white">Technical References</h3>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <p>• Vector Autoregression (VAR) for time series analysis</p>
            <p>• Granger Causality tests for spillover detection</p>
            <p>• Event study methodology for impact assessment</p>
            <p>• Natural Language Processing for news verification</p>
            <p>• Variance decomposition for dominance calculation</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Methodology;
