import { SpilloverEffect, CausalityInsight } from '../types';

export const spilloverData: SpilloverEffect[] = [
  {
    fromSector: 'Economics',
    toSector: 'Politics',
    strength: 0.72,
    lag: 5,
    confidence: 0.84,
  },
  {
    fromSector: 'Economics',
    toSector: 'Global Trade',
    strength: 0.65,
    lag: 3,
    confidence: 0.79,
  },
  {
    fromSector: 'Politics',
    toSector: 'Economics',
    strength: 0.58,
    lag: 7,
    confidence: 0.76,
  },
  {
    fromSector: 'Politics',
    toSector: 'Global Trade',
    strength: 0.81,
    lag: 4,
    confidence: 0.88,
  },
  {
    fromSector: 'Global Trade',
    toSector: 'Economics',
    strength: 0.69,
    lag: 6,
    confidence: 0.82,
  },
  {
    fromSector: 'Global Trade',
    toSector: 'Politics',
    strength: 0.54,
    lag: 8,
    confidence: 0.71,
  },
];

export const causalityInsights: CausalityInsight[] = [
  {
    cause: 'Federal Reserve Interest Rate Decision',
    effect: 'Increased Market Volatility (3-5 days)',
    confidence: 0.89,
    explanation: 'Rate decisions create immediate uncertainty about future economic conditions, leading to portfolio rebalancing.',
    mechanism: 'Direct monetary policy transmission through discount rates and borrowing costs',
  },
  {
    cause: 'US-China Trade Negotiations',
    effect: 'Tech Sector Performance Shift',
    confidence: 0.76,
    explanation: 'Trade policy changes affect supply chains for semiconductor and hardware manufacturers, particularly those with Asian exposure.',
    mechanism: 'Supply chain disruption expectations and tariff cost projections',
  },
  {
    cause: 'Inflation Data Releases',
    effect: 'Treasury Yield Movement',
    confidence: 0.92,
    explanation: 'CPI reports directly influence expectations about Federal Reserve policy trajectory, which drives bond market pricing.',
    mechanism: 'Inflation expectations updating and real rate calculations',
  },
  {
    cause: 'Political Regulatory Announcements',
    effect: 'Sector-Specific Equity Rotation',
    confidence: 0.81,
    explanation: 'New regulations create compliance costs and competitive advantages, driving capital flows between affected sectors.',
    mechanism: 'Regulatory burden assessment and profit margin adjustments',
  },
  {
    cause: 'Global Supply Chain Disruptions',
    effect: 'Commodity Price Volatility',
    confidence: 0.85,
    explanation: 'Transportation and logistics bottlenecks create scarcity expectations for raw materials and intermediate goods.',
    mechanism: 'Supply-demand imbalance and inventory management concerns',
  },
];
