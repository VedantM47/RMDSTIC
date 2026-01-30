import { create } from 'zustand';
import { DashboardData, SectorType } from '../types';

interface GlobalState {
  // UI State
  sidebarOpen: boolean;
  dateRange: { start: string; end: string };
  selectedSector: SectorType | null;
  
  // Data State
  dashboardData: DashboardData | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setSidebarOpen: (open: boolean) => void;
  setDateRange: (range: { start: string; end: string }) => void;
  setSelectedSector: (sector: SectorType | null) => void;
  setDashboardData: (data: DashboardData | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  // Initial State
  sidebarOpen: true,
  dateRange: {
    start: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0],
  },
  selectedSector: null,
  dashboardData: null,
  isLoading: false,
  error: null,
  
  // Actions
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setDateRange: (range) => set({ dateRange: range }),
  setSelectedSector: (sector) => set({ selectedSector: sector }),
  setDashboardData: (data) => set({ dashboardData: data }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));
