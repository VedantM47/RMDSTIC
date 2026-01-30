# Quick Start Guide

Get the Sector-Based Market Impact Intelligence Engine running in 3 minutes.

## TL;DR

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. Done! 🎉

## What You Get

A fully-functional dark-themed trading dashboard with:

✅ **3 Macro Sectors**: Economics, Politics, Global Trade  
✅ **Real-time Impact Analysis**: See which sector dominates markets  
✅ **180 Days of Data**: Historical timeline charts  
✅ **News Intelligence**: 12 verified market-moving events  
✅ **Spillover Analysis**: Cross-sector influence patterns  
✅ **Professional UI**: Finance-grade dark theme with neon accents  

## Prerequisites

- Node.js 18+ ([Download here](https://nodejs.org/))

That's it!

## Installation

### Step 1: Install Dependencies
```bash
npm install
```
⏱️ Takes ~2 minutes

### Step 2: Start Dev Server
```bash
npm run dev
```
⏱️ Starts in ~5 seconds

### Step 3: Open Browser
```
http://localhost:3000
```
Should open automatically!

## First Look

When the app loads, you'll see:

1. **Dashboard** (default page)
   - 3 sector impact cards with confidence scores
   - Timeline chart showing 180 days of sector influences
   - Market summary statistics

2. **Sidebar Navigation**
   - Dashboard
   - Economics Sector
   - Politics Sector  
   - Global Trade Sector
   - News Intelligence
   - Spillover Analysis
   - Methodology

## Try These Features

### 1. Explore Sectors
Click "Economics" in sidebar → See detailed sector analysis

### 2. View News
Click "News Intelligence" → Browse verified market events  
**Pro tip**: Use sector filter buttons at top

### 3. Analyze Spillovers
Click "Spillover Analysis" → See how sectors influence each other  
**Look for**: Strength bars and lag times

### 4. Learn the System
Click "Methodology" → Understand how everything works

## Key Concepts (30-second version)

**Impact Score**: -100 to +100  
- Positive = bullish sector influence  
- Negative = bearish sector influence  
- Bigger number = stronger effect

**Confidence Score**: 0% to 100%  
- Higher = more reliable  
- Lower = needs verification

**Dominance %**: Relative importance  
- Shows which sector drives markets right now  
- All sectors sum to 100%

## Technology Stack

- ⚛️ React 18 + TypeScript
- ⚡ Vite (super fast!)
- 🎨 Tailwind CSS (dark theme)
- 📊 Recharts (interactive charts)
- 🔄 Zustand (state management)

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Test production build
npm run lint     # Check code quality
```

## File Structure (Simplified)

```
src/
├── pages/           # Dashboard, SectorView, News, etc.
├── components/      # Reusable UI components
├── mockData/        # Sample data (replace with API later)
├── services/        # Data fetching layer
└── types/           # TypeScript definitions
```

## Customization Quick Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
economics: { 500: '#your-color' }  // Change sector color
```

### Modify Mock Data
Edit files in `src/mockData/`:
- `dashboard.mock.ts` - Main dashboard data
- `news.mock.ts` - News events
- `sector.mock.ts` - Sector details

### Add Backend API
Edit `src/services/dataService.ts`:
```typescript
async getDashboardData() {
  // Replace this:
  return mockData;
  
  // With this:
  return fetch('/api/dashboard').then(r => r.json());
}
```

## Troubleshooting (60 seconds)

**Problem**: Port 3000 already in use  
**Solution**: Change port in `vite.config.ts`

**Problem**: TypeScript errors  
**Solution**: Make sure Node.js is v18+

**Problem**: Charts not showing  
**Solution**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Problem**: Styles look broken  
**Solution**: Restart dev server with `npm run dev`

## Next Steps

**If this is your first time:**
1. Click through all pages in the sidebar
2. Read the "Methodology" page
3. Check out `README.md` for full features

**If you're ready to develop:**
1. Read `DEVELOPMENT_GUIDE.md`
2. Study the component structure
3. Plan your customizations

**If you're integrating with backend:**
1. Review `src/services/dataService.ts`
2. Check `src/types/index.ts` for data contracts
3. Prepare your API endpoints

## Important Notes

⚠️ **This is NOT a prediction tool**  
It analyzes historical and current data, not future prices.

⚠️ **Mock data is included**  
Replace with real API calls in production.

⚠️ **Desktop-optimized**  
Responsive design included but works best on desktop.

## Get Help

📖 **Documentation**
- `README.md` - Project overview
- `SETUP.md` - Detailed setup guide  
- `DEVELOPMENT_GUIDE.md` - Development best practices

💡 **Learn More**
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com

## Success!

If you can see the dashboard with 3 sector cards and a timeline chart, you're all set! 

Now start exploring the features and planning your customizations.

---

**Built with ⚡ Vite + ⚛️ React + 🎨 Tailwind CSS**

Ready to build something amazing! 🚀
