import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string, formatStr: string = 'MMM dd, yyyy'): string => {
  try {
    return format(parseISO(dateString), formatStr);
  } catch {
    return dateString;
  }
};

export const formatPercent = (value: number, decimals: number = 1): string => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
};

export const formatImpact = (value: number): string => {
  const abs = Math.abs(value);
  if (abs >= 70) return 'High';
  if (abs >= 40) return 'Medium';
  return 'Low';
};

export const formatConfidence = (value: number): string => {
  if (value >= 0.8) return 'Very High';
  if (value >= 0.6) return 'High';
  if (value >= 0.4) return 'Medium';
  return 'Low';
};

export const getSectorColor = (sector: string): string => {
  switch (sector) {
    case 'Economics':
      return '#3b82f6'; // Blue
    case 'Politics':
      return '#a855f7'; // Purple
    case 'Global Trade':
      return '#f97316'; // Orange
    default:
      return '#6b7280'; // Gray
  }
};

export const getImpactColor = (impact: number): string => {
  if (impact > 50) return '#10b981'; // Green
  if (impact > 0) return '#06b6d4'; // Cyan
  if (impact > -50) return '#f59e0b'; // Yellow
  return '#ef4444'; // Red
};

export const getTrendIcon = (trend: 'up' | 'down' | 'stable'): string => {
  switch (trend) {
    case 'up':
      return '↗';
    case 'down':
      return '↘';
    case 'stable':
      return '→';
  }
};
