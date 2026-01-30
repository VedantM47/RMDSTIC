# Development Guide

## Getting Started

### Installation & Setup

```bash
# Install all dependencies
npm install

# Start development server (opens browser automatically)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture Overview

### Component Hierarchy

```
App (Router)
├── Navbar (Global header with menu toggle)
├── Sidebar (Navigation with sector links)
└── Pages (Route-based content)
    ├── Dashboard (Main overview)
    ├── SectorView (Sector-specific analysis)
    ├── NewsIntelligence (News feed)
    ├── SpilloverAnalysis (Cross-sector effects)
    └── Methodology (System explanation)
```

### Data Flow

```
User Action → Component → Service Layer → Mock Data → Component Update
                                ↓
                          (Future: API)
```

### State Management

- **Global State (Zustand)**: Sidebar open/close, date ranges, selected sectors
- **Local State (useState)**: Component-specific data, loading states
- **Service Layer**: All data fetching abstracted for easy backend integration

## File Organization

### `/components`

#### `/layout`
- **Navbar.tsx**: Top navigation bar with menu toggle and system status
- **Sidebar.tsx**: Side navigation with sector links and status indicators
- **PageContainer.tsx**: Wrapper for page content with title/subtitle

#### `/cards`
- **SectorImpactCard.tsx**: Displays sector impact with circular progress
- **SummaryCard.tsx**: Generic metric card for dashboard stats

#### `/charts`
- **SectorLineChart.tsx**: Time-series line chart for sector impacts
- **ImpactDurationChart.tsx**: Bar chart showing short/medium/long-term impacts
- **SpilloverBarChart.tsx**: Visual representation of cross-sector effects

#### `/tables`
- **NewsTable.tsx**: Sortable, filterable news events table

#### `/ui`
- **Badge.tsx**: Status indicators with color variants
- **Loader.tsx**: Loading spinner with optional text
- **Tooltip.tsx**: Hover tooltip for additional context

### `/pages`

Each page is a standalone component that:
1. Fetches data via `dataService`
2. Handles loading/error states
3. Renders using reusable components
4. Follows responsive design patterns

### `/mockData`

Complete realistic mock data for all features:
- **dashboard.mock.ts**: 180 days of sector timeline data
- **sector.mock.ts**: Detailed analysis for each sector
- **news.mock.ts**: 12 verified news events
- **spillover.mock.ts**: Cross-sector effects and causality

### `/services`

**dataService.ts**: Single source for all data operations
- Simulates API delay for realistic UX
- Easy to replace with real API calls
- Consistent error handling

### `/store`

**useGlobalStore.ts**: Zustand store for global state
- Sidebar visibility
- Date range selection
- Selected sector
- Dashboard data cache

### `/types`

**index.ts**: All TypeScript interfaces
- Ensures type safety across app
- Documents data structures
- Enables IDE autocomplete

### `/utils`

**formatters.ts**: Helper functions
- Date formatting
- Number formatting
- Color mapping
- Status indicators

## Adding New Features

### 1. Add a New Component

```typescript
// src/components/cards/NewCard.tsx
import React from 'react';

interface NewCardProps {
  title: string;
  data: any;
}

const NewCard: React.FC<NewCardProps> = ({ title, data }) => {
  return (
    <div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {/* Your content */}
    </div>
  );
};

export default NewCard;
```

### 2. Add Mock Data

```typescript
// src/mockData/newFeature.mock.ts
export const newFeatureData = {
  // Your mock data structure
};
```

### 3. Add to Service Layer

```typescript
// src/services/dataService.ts
async getNewFeatureData(): Promise<NewFeatureType> {
  await delay(300);
  return newFeatureData;
}
```

### 4. Create Page

```typescript
// src/pages/NewFeature/NewFeature.tsx
import { useEffect, useState } from 'react';
import { dataService } from '../../services/dataService';

const NewFeature: React.FC = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await dataService.getNewFeatureData();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;
  
  return (
    <PageContainer title="New Feature">
      {/* Your content */}
    </PageContainer>
  );
};
```

### 5. Add Route

```typescript
// src/App.tsx
<Route path="/new-feature" element={<NewFeature />} />
```

### 6. Add to Sidebar

```typescript
// src/components/layout/Sidebar.tsx
{ path: '/new-feature', icon: YourIcon, label: 'New Feature' }
```

## Styling Guidelines

### Tailwind Classes

Use utility-first approach:
```typescript
<div className="rounded-xl border border-gray-800 bg-dark-800/50 p-6">
```

### Color System

```typescript
// Sector colors
text-economics-500  // Blue for Economics
text-politics-500   // Purple for Politics
text-trade-500      // Orange for Global Trade

// Status colors
text-success        // Green for positive
text-warning        // Yellow for caution
text-danger         // Red for negative
text-info           // Cyan for information

// Background gradients
bg-dark-900         // Darkest
bg-dark-800         // Dark cards
bg-dark-700         // Hover states
```

### Responsive Design

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

## Chart Configuration

### Recharts Setup

```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

<LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" stroke="#1f2940" />
  <XAxis stroke="#6b7280" />
  <YAxis stroke="#6b7280" />
  <Tooltip content={<CustomTooltip />} />
  <Line type="monotone" dataKey="value" stroke="#3b82f6" />
</LineChart>
```

### Custom Tooltips

```typescript
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-700 bg-dark-800 p-3">
        {/* Custom tooltip content */}
      </div>
    );
  }
  return null;
};
```

## Backend Integration

### Step 1: Update Service Layer

```typescript
// src/services/dataService.ts
async getDashboardData(): Promise<DashboardData> {
  try {
    const response = await fetch(`${API_BASE_URL}/dashboard`, {
      headers: {
        'Content-Type': 'application/json',
        // Add auth headers if needed
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data');
    }
    
    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    // Fallback to mock data or throw
    throw error;
  }
}
```

### Step 2: Environment Variables

```typescript
// Create .env file
VITE_API_BASE_URL=http://localhost:8000/api
```

```typescript
// Use in code
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
```

### Step 3: Error Handling

```typescript
const [error, setError] = useState<string | null>(null);

try {
  const data = await dataService.getDashboardData();
  setData(data);
} catch (err) {
  setError(err instanceof Error ? err.message : 'Unknown error');
}

// In render
{error && (
  <div className="rounded-lg border border-red-800 bg-red-500/10 p-4">
    <p className="text-sm text-red-400">{error}</p>
  </div>
)}
```

## Performance Optimization

### Code Splitting

```typescript
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>
```

### Memoization

```typescript
import { useMemo } from 'react';

const expensiveCalculation = useMemo(() => {
  return data.reduce((acc, item) => acc + item.value, 0);
}, [data]);
```

### Chart Performance

- Use `dot={false}` for line charts with many data points
- Implement data windowing for very large datasets
- Debounce user interactions

## Testing Recommendations

### Component Testing
```typescript
// Use React Testing Library
import { render, screen } from '@testing-library/react';

test('renders sector impact card', () => {
  render(<SectorImpactCard data={mockData} />);
  expect(screen.getByText('Economics')).toBeInTheDocument();
});
```

### Integration Testing
Test complete user flows:
1. Navigate to sector page
2. Filter news by sector
3. View spillover effects

## Deployment

### Build Process

```bash
# Production build
npm run build

# Output directory: /dist
# Ready for static hosting (Netlify, Vercel, S3, etc.)
```

### Environment Configuration

```typescript
// production.env
VITE_API_BASE_URL=https://api.yourapp.com
```

## Troubleshooting

### Common Issues

**Charts not rendering**
- Verify Recharts data format
- Check container has explicit height
- Ensure data is not null/undefined

**Routing not working**
- Confirm BrowserRouter wraps all Routes
- Check route paths match exactly
- Verify component imports

**Tailwind classes not applying**
- Run `npm run dev` to restart Vite
- Check class names for typos
- Verify tailwind.config.js includes all paths

**TypeScript errors**
- Run `npm run build` to see all errors
- Check type definitions in `/types`
- Ensure all props have interfaces

## Best Practices

1. **Always use TypeScript interfaces** for props
2. **Handle loading and error states** in all data-fetching components
3. **Follow the color system** for consistency
4. **Use the service layer** for all data operations
5. **Keep components small** and focused
6. **Write semantic HTML** with proper ARIA labels
7. **Test responsive layouts** at multiple breakpoints
8. **Document complex logic** with comments
9. **Use consistent naming** following existing patterns
10. **Optimize images** and assets before adding

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Recharts Documentation](https://recharts.org)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

Happy coding! 🚀
