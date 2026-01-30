import { DashboardData, SectorDetailData, NewsEvent, SpilloverEffect, CausalityInsight } from '../types';
import { dashboardData } from '../mockData/dashboard.mock';
import { sectorData } from '../mockData/sector.mock';
import { newsData } from '../mockData/news.mock';
import { spilloverData, causalityInsights } from '../mockData/spillover.mock';

// Simulate API delay for realistic UX
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class DataService {
  // Dashboard data
  async getDashboardData(): Promise<DashboardData> {
    await delay(300);
    return dashboardData;
  }

  // Sector detail data
  async getSectorData(sectorName: string): Promise<SectorDetailData | null> {
    await delay(300);
    return sectorData[sectorName] || null;
  }

  // News intelligence data
  async getNewsData(filters?: {
    sector?: string;
    startDate?: string;
    endDate?: string;
  }): Promise<NewsEvent[]> {
    await delay(300);
    
    let filtered = [...newsData];
    
    if (filters?.sector) {
      filtered = filtered.filter(news => news.sector === filters.sector);
    }
    
    if (filters?.startDate) {
      filtered = filtered.filter(news => news.date >= filters.startDate!);
    }
    
    if (filters?.endDate) {
      filtered = filtered.filter(news => news.date <= filters.endDate!);
    }
    
    return filtered;
  }

  // Spillover analysis data
  async getSpilloverData(): Promise<SpilloverEffect[]> {
    await delay(300);
    return spilloverData;
  }

  // Causality insights
  async getCausalityInsights(): Promise<CausalityInsight[]> {
    await delay(300);
    return causalityInsights;
  }

  // Health check (for future API integration)
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}

// Export singleton instance
export const dataService = new DataService();
