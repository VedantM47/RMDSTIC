// Core sector types
export type SectorType = 'Economics' | 'Politics' | 'Global Trade';

export interface SectorImpact {
  name: SectorType;
  currentImpact: number; // -100 to 100
  trend: 'up' | 'down' | 'stable';
  confidence: number; // 0 to 1
  dominance: number; // 0 to 100
}

export interface TimelineDataPoint {
  date: string;
  economics: number;
  politics: number;
  globalTrade: number;
  marketReturn?: number;
}

export interface SectorDetailData {
  name: SectorType;
  description: string;
  timeline: TimelineDataPoint[];
  impactDuration: {
    shortTerm: number; // days
    mediumTerm: number; // days
    longTerm: number; // days
  };
  keyDrivers: string[];
  recentEvents: NewsEvent[];
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  source: string;
  sector: SectorType;
  impact: number; // -100 to 100
  confidence: number; // 0 to 1
  summary: string;
  verified: boolean;
  relatedIndices?: string[];
}

export interface SpilloverEffect {
  fromSector: SectorType;
  toSector: SectorType;
  strength: number; // 0 to 1
  lag: number; // days
  confidence: number;
}

export interface DashboardData {
  sectors: SectorImpact[];
  timeline: TimelineDataPoint[];
  lastUpdated: string;
  marketSummary: {
    dominantSector: SectorType;
    avgConfidence: number;
    volatilityIndex: number;
  };
}

export interface CausalityInsight {
  cause: string;
  effect: string;
  confidence: number;
  explanation: string;
  mechanism: string;
}

// API response types (for future backend integration)
export interface ApiResponse<T> {
  data: T;
  timestamp: string;
  status: 'success' | 'error';
  message?: string;
}

// UI State types
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
