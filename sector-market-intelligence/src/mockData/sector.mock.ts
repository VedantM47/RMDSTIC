import { SectorDetailData, SectorType } from '../types';

const generateSectorTimeline = (sectorType: SectorType, days: number = 90) => {
  const data = [];
  const startDate = new Date('2024-10-01');
  
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    let value = 0;
    switch (sectorType) {
      case 'Economics':
        value = Math.sin(i * 0.15) * 40 + Math.random() * 15;
        break;
      case 'Politics':
        value = Math.cos(i * 0.12) * 35 + Math.random() * 12 - 5;
        break;
      case 'Global Trade':
        value = Math.sin(i * 0.18 + 0.5) * 38 + Math.random() * 14;
        break;
    }
    
    data.push({
      date: date.toISOString().split('T')[0],
      economics: sectorType === 'Economics' ? value : 0,
      politics: sectorType === 'Politics' ? value : 0,
      globalTrade: sectorType === 'Global Trade' ? value : 0,
    });
  }
  
  return data;
};

export const sectorData: Record<string, SectorDetailData> = {
  Economics: {
    name: 'Economics',
    description: 'Tracks macroeconomic indicators, monetary policy, inflation, employment data, and central bank decisions that influence market sentiment and stock performance.',
    timeline: generateSectorTimeline('Economics'),
    impactDuration: {
      shortTerm: 5,
      mediumTerm: 15,
      longTerm: 45,
    },
    keyDrivers: [
      'Federal Reserve Interest Rate Decisions',
      'CPI & Inflation Data Releases',
      'Employment Reports (Non-farm Payrolls)',
      'GDP Growth Estimates',
      'Consumer Confidence Index',
    ],
    recentEvents: [
      {
        id: 'econ-1',
        title: 'Fed Holds Rates Steady at 5.25-5.50%',
        date: '2025-01-29',
        source: 'Federal Reserve',
        sector: 'Economics',
        impact: 35.2,
        confidence: 0.92,
        summary: 'Federal Reserve maintains current interest rate range, signaling cautious approach to inflation management.',
        verified: true,
        relatedIndices: ['S&P 500', 'NASDAQ'],
      },
      {
        id: 'econ-2',
        title: 'December CPI Rises 2.9% Year-over-Year',
        date: '2025-01-15',
        source: 'Bureau of Labor Statistics',
        sector: 'Economics',
        impact: 28.7,
        confidence: 0.88,
        summary: 'Inflation shows persistent stickiness above Fed target, influencing rate cut timeline expectations.',
        verified: true,
        relatedIndices: ['DXY', 'Treasury Yields'],
      },
    ],
  },
  Politics: {
    name: 'Politics',
    description: 'Monitors political events, policy changes, regulatory decisions, elections, and geopolitical tensions that create market uncertainty or opportunity.',
    timeline: generateSectorTimeline('Politics'),
    impactDuration: {
      shortTerm: 3,
      mediumTerm: 10,
      longTerm: 30,
    },
    keyDrivers: [
      'Executive Orders & Policy Announcements',
      'Congressional Legislation Progress',
      'Election Polling & Results',
      'Regulatory Agency Decisions',
      'International Relations Developments',
    ],
    recentEvents: [
      {
        id: 'pol-1',
        title: 'New Administration Announces Tech Regulation Framework',
        date: '2025-01-28',
        source: 'White House',
        sector: 'Politics',
        impact: -32.5,
        confidence: 0.78,
        summary: 'Proposed regulations target AI and data privacy, creating uncertainty for tech sector valuations.',
        verified: true,
        relatedIndices: ['NASDAQ', 'Tech ETFs'],
      },
      {
        id: 'pol-2',
        title: 'Infrastructure Spending Bill Advances in Senate',
        date: '2025-01-20',
        source: 'US Senate',
        sector: 'Politics',
        impact: 41.3,
        confidence: 0.82,
        summary: 'Bipartisan support for $200B infrastructure package boosts construction and materials sectors.',
        verified: true,
        relatedIndices: ['Industrials', 'Materials'],
      },
    ],
  },
  'Global Trade': {
    name: 'Global Trade',
    description: 'Analyzes international trade relations, tariffs, supply chain disruptions, currency movements, and global economic interconnections affecting markets.',
    timeline: generateSectorTimeline('Global Trade'),
    impactDuration: {
      shortTerm: 7,
      mediumTerm: 20,
      longTerm: 60,
    },
    keyDrivers: [
      'Trade Agreement Negotiations',
      'Tariff Announcements & Changes',
      'Supply Chain Disruption Reports',
      'Currency Exchange Rate Movements',
      'Global Commodity Price Shifts',
    ],
    recentEvents: [
      {
        id: 'trade-1',
        title: 'US-China Trade Talks Resume After 6-Month Pause',
        date: '2025-01-25',
        source: 'USTR',
        sector: 'Global Trade',
        impact: 38.9,
        confidence: 0.75,
        summary: 'Diplomatic engagement signals potential easing of trade tensions, benefiting multinational corporations.',
        verified: true,
        relatedIndices: ['S&P 500', 'Emerging Markets'],
      },
      {
        id: 'trade-2',
        title: 'European Union Imposes New Carbon Border Tax',
        date: '2025-01-18',
        source: 'European Commission',
        sector: 'Global Trade',
        impact: -25.4,
        confidence: 0.84,
        summary: 'CBAM implementation affects US exporters, particularly in steel and cement industries.',
        verified: true,
        relatedIndices: ['Materials', 'Energy'],
      },
    ],
  },
};
