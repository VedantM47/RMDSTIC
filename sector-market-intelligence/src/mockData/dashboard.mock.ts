import { DashboardData, TimelineDataPoint } from '../types';

const generateTimeline = (): TimelineDataPoint[] => {
  const data: TimelineDataPoint[] = [];
  const startDate = new Date('2024-07-01');
  
  for (let i = 0; i < 180; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    // Simulate realistic sector impacts with correlation to market
    const economics = Math.sin(i * 0.1) * 30 + Math.random() * 20 - 10;
    const politics = Math.cos(i * 0.08) * 25 + Math.random() * 15 - 7;
    const globalTrade = Math.sin(i * 0.12 + 1) * 35 + Math.random() * 18 - 9;
    const marketReturn = (economics * 0.4 + politics * 0.3 + globalTrade * 0.3) / 10;
    
    data.push({
      date: date.toISOString().split('T')[0],
      economics: Number(economics.toFixed(2)),
      politics: Number(politics.toFixed(2)),
      globalTrade: Number(globalTrade.toFixed(2)),
      marketReturn: Number(marketReturn.toFixed(2)),
    });
  }
  
  return data;
};

export const dashboardData: DashboardData = {
  sectors: [
    {
      name: 'Economics',
      currentImpact: 42.5,
      trend: 'up',
      confidence: 0.87,
      dominance: 45,
    },
    {
      name: 'Politics',
      currentImpact: -28.3,
      trend: 'down',
      confidence: 0.72,
      dominance: 30,
    },
    {
      name: 'Global Trade',
      currentImpact: 35.7,
      trend: 'stable',
      confidence: 0.81,
      dominance: 25,
    },
  ],
  timeline: generateTimeline(),
  lastUpdated: new Date().toISOString(),
  marketSummary: {
    dominantSector: 'Economics',
    avgConfidence: 0.80,
    volatilityIndex: 23.5,
  },
};
