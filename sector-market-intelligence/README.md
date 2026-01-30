# Sector-Based Market Impact Intelligence Engine

A professional React + Vite frontend application for analyzing how macro sectors (Economics, Politics, Global Trade) influence stock markets over time.

![Dashboard Preview](https://via.placeholder.com/800x400/0a0e1a/ffffff?text=Sector+Intelligence+Dashboard)

## 🎯 Features

### Core Functionality
- **Real-time Sector Analysis**: Monitor Economics, Politics, and Global Trade sector impacts
- **Interactive Charts**: Time-series visualizations of sector influences on markets
- **News Intelligence**: Verified, sector-classified market-moving events
- **Spillover Analysis**: Cross-sector influence patterns and transmission lags
- **Impact Duration Metrics**: Short, medium, and long-term effect analysis
- **Confidence Scoring**: Transparent uncertainty quantification for all metrics

### Technical Highlights
- ⚡ **Vite** for lightning-fast development and optimized builds
- ⚛️ **React 18** with TypeScript for type-safe development
- 🎨 **Tailwind CSS** with custom dark theme for finance-grade UI
- 📊 **Recharts** for professional data visualizations
- 🔄 **Zustand** for lightweight global state management
- 🎯 **React Router** for seamless navigation
- 📱 **Responsive Design** optimized for desktop-first workflow

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Sidebar, PageContainer
│   │   ├── cards/           # SectorImpactCard, SummaryCard
│   │   ├── charts/          # Recharts components
│   │   ├── tables/          # NewsTable
│   │   └── ui/              # Badge, Loader, Tooltip
│   ├── pages/
│   │   ├── Dashboard/       # Main dashboard view
│   │   ├── SectorView/      # Individual sector deep-dive
│   │   ├── NewsIntelligence/# News feed and analysis
│   │   ├── SpilloverAnalysis/# Cross-sector effects
│   │   └── Methodology/     # System explanation
│   ├── mockData/            # Complete mock data for development
│   ├── services/            # Data service abstraction layer
│   ├── store/               # Zustand global state
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions and formatters
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Design System

### Color Palette
- **Economics**: Blue (#3b82f6) - Monetary policy, inflation, employment
- **Politics**: Purple (#a855f7) - Policy changes, elections, regulations
- **Global Trade**: Orange (#f97316) - Tariffs, supply chains, currencies

### Dark Theme
- Background: `#0a0e1a` → `#1a2238`
- Cards: `#0f1420` with `#1f2940` highlights
- Borders: `#1f2940` with hover states
- Text: White primary, gray-400 secondary

## 📊 Mock Data Structure

All pages use realistic mock data from `/mockData`:

- **dashboard.mock.ts**: 180 days of sector impact timeline
- **sector.mock.ts**: Detailed sector analysis with recent events
- **news.mock.ts**: 12 verified news events with impact scores
- **spillover.mock.ts**: Cross-sector effects and causality insights

## 🔌 Backend Integration Ready

The frontend is designed for seamless backend integration:

1. **Service Layer**: All data fetching abstracted in `dataService.ts`
2. **Type Safety**: Comprehensive TypeScript interfaces in `types/index.ts`
3. **Loading States**: Built-in loading, error, and empty state handling
4. **Mock Data**: Easy to swap with real API calls

### API Integration Example

```typescript
// In services/dataService.ts
async getDashboardData(): Promise<DashboardData> {
  // Replace mock with API call
  const response = await fetch('/api/dashboard');
  return response.json();
}
```

## 🧪 Development Guidelines

### Component Creation
- Use functional components with TypeScript
- Props must have explicit interfaces
- Include loading and error states
- Follow existing naming conventions

### State Management
- Local state for component-specific data
- Zustand store for global UI state
- Service layer for data fetching

### Styling
- Tailwind utility-first approach
- Custom classes in `index.css` only when necessary
- Maintain dark theme consistency
- Use design system colors

## 📈 Key Metrics

### Impact Score
Range: -100 to +100
- Positive: Bullish sector influence
- Negative: Bearish sector influence
- Magnitude indicates strength

### Confidence Score
Range: 0 to 1 (0% to 100%)
- >80%: Very High confidence
- 60-80%: High confidence
- 40-60%: Medium confidence
- <40%: Low confidence

### Dominance Percentage
Relative importance of each sector
- Sum always equals 100% across all sectors
- Higher values indicate stronger current influence

## 🔍 Page Overview

### Dashboard (`/`)
Market overview with sector impact cards, timeline charts, and summary metrics

### Sector View (`/sector/:name`)
Deep-dive into individual sectors with:
- Key drivers and recent events
- Impact duration analysis
- Historical timeline
- Related news events

### News Intelligence (`/news`)
Comprehensive feed of verified market-moving events with:
- Sector filtering
- Impact and confidence scores
- Source verification indicators

### Spillover Analysis (`/spillovers`)
Cross-sector influence patterns showing:
- Spillover strength and transmission lags
- Causal mechanism explanations
- Interpretation guidelines

### Methodology (`/methodology`)
System explanation covering:
- Data sources and verification
- Analysis pipeline
- Metric definitions
- Important limitations

## ⚠️ Important Notes

### Not for Trading
This system analyzes current and historical impacts, **not future predictions**. Do not use for trading decisions.

### Causality Inference
Displayed causal relationships are model-based estimates, not definitive proof. Always consider alternative explanations.

### Model Uncertainty
All metrics include confidence scores. Lower confidence requires additional scrutiny and verification.

## 🛠️ Technology Stack

- **React 18.2** - UI framework
- **TypeScript 5.2** - Type safety
- **Vite 5.0** - Build tool
- **Tailwind CSS 3.4** - Styling
- **React Router 6.21** - Routing
- **Recharts 2.10** - Charts
- **Zustand 4.4** - State management
- **Lucide React** - Icons
- **date-fns** - Date formatting

## 📝 License

This is a frontend implementation based on the Product Requirements Document for the Sector-Based Market Impact Intelligence Engine.

## 🤝 Contributing

When contributing, please:
1. Follow the existing code structure
2. Maintain TypeScript strict mode
3. Use the design system colors
4. Include loading and error states
5. Update mock data when adding features

## 📧 Support

For questions about implementation or architecture, refer to the original PRD or examine the existing component patterns.

---

Built with ⚡ Vite + ⚛️ React + 🎨 Tailwind CSS
