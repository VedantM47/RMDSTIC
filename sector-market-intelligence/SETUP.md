# Setup Instructions

Complete setup guide for the Sector-Based Market Impact Intelligence Engine frontend.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required
- **Node.js** v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** v9.0.0 or higher (comes with Node.js)

### Optional (but recommended)
- **Git** for version control
- **VS Code** with these extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

## Installation Steps

### 1. Extract the Project

```bash
# Extract the zip file to your desired location
cd /path/to/sector-market-intelligence
```

### 2. Install Dependencies

```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

This will install all required dependencies including:
- React 18.2
- TypeScript 5.2
- Vite 5.0
- Tailwind CSS 3.4
- Recharts 2.10
- React Router 6.21
- Zustand 4.4
- And more...

### 3. Start Development Server

```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

### 4. Verify Installation

You should see:
- Dark-themed dashboard interface
- Three sector impact cards (Economics, Politics, Global Trade)
- Interactive line chart with 180 days of data
- Navigation sidebar on the left
- No console errors

## Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
```

### Production Build
```bash
npm run build        # Create optimized production build
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Check code for errors
```

## Project Structure Overview

```
sector-market-intelligence/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Route-based page components
│   ├── mockData/        # Mock data for development
│   ├── services/        # Data service layer
│   ├── store/           # Global state management
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Helper functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Configuration Files

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- React JSX transform
- ES2020 target
- All type checking features active

### Vite (`vite.config.ts`)
- React plugin configured
- Dev server on port 3000
- Auto-opens browser

### Tailwind (`tailwind.config.js`)
- Custom color palette for sectors
- Dark theme optimized
- Extended utilities

## Environment Variables (Optional)

Create a `.env` file in the root directory for environment-specific configuration:

```env
# API Configuration (for future backend integration)
VITE_API_BASE_URL=http://localhost:8000/api

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_DEBUG_MODE=true
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## Browser Support

Recommended browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

The application uses modern JavaScript features and CSS Grid/Flexbox.

## Development Workflow

### 1. Start Development Server
```bash
npm run dev
```

### 2. Make Changes
- Edit files in `/src`
- Changes will hot-reload automatically
- Check browser console for errors

### 3. Test Your Changes
- Navigate through all pages
- Test responsive layouts (resize browser)
- Verify data displays correctly

### 4. Build for Production
```bash
npm run build
```

Output will be in `/dist` directory.

## Troubleshooting

### Port Already in Use

If port 3000 is occupied:

```bash
# Edit vite.config.ts and change port
server: {
  port: 3001,
  open: true
}
```

### Dependencies Installation Failed

Clear npm cache and retry:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Ensure you're using Node.js 18+:
```bash
node --version  # Should be v18.0.0 or higher
```

### Tailwind Classes Not Working

Restart the dev server:
```bash
# Press Ctrl+C to stop
npm run dev
```

### Charts Not Rendering

Clear browser cache or try incognito mode:
```
Chrome: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
```

## Next Steps

After successful setup:

1. **Explore the Application**
   - Dashboard: Overview of all sectors
   - Sector Views: Deep-dive into Economics, Politics, Global Trade
   - News Intelligence: Verified market events
   - Spillover Analysis: Cross-sector effects
   - Methodology: System explanation

2. **Review Documentation**
   - `README.md`: Project overview and features
   - `DEVELOPMENT_GUIDE.md`: Development best practices
   - Code comments in source files

3. **Customize for Your Needs**
   - Modify mock data in `/src/mockData`
   - Adjust color scheme in `tailwind.config.js`
   - Add new components in `/src/components`

4. **Prepare for Backend Integration**
   - Review `/src/services/dataService.ts`
   - Understand data type definitions in `/src/types`
   - Plan API endpoint structure

## IDE Setup (VS Code)

### Recommended Extensions

Install these from VS Code Extensions marketplace:

1. **ESLint** (dbaeumer.vscode-eslint)
   - Highlights code errors
   - Auto-fixes on save

2. **Prettier** (esbenp.prettier-vscode)
   - Code formatting
   - Consistent style

3. **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
   - Class name autocomplete
   - CSS preview on hover

4. **ES7+ React/Redux snippets** (dsznajder.es7-react-js-snippets)
   - React component shortcuts
   - Faster development

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## Performance Tips

### Development
- Use React DevTools for component inspection
- Monitor Network tab for data fetching
- Check Console for warnings

### Production
- Run `npm run build` to create optimized bundle
- Test production build with `npm run preview`
- Analyze bundle size if needed

## Getting Help

### Documentation
- Check `README.md` for feature overview
- Read `DEVELOPMENT_GUIDE.md` for detailed development info
- Review inline code comments

### Common Issues
- Restart dev server if hot reload stops working
- Clear browser cache if styles don't update
- Delete `node_modules` and reinstall if dependencies conflict

### Community Resources
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org

## Success Checklist

Before you start developing, verify:

- [ ] Node.js 18+ installed
- [ ] Dependencies installed successfully (`npm install`)
- [ ] Dev server starts without errors (`npm run dev`)
- [ ] Application opens in browser
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Charts display data
- [ ] Navigation works
- [ ] Responsive design works

## What's Next?

Now that you have the application running:

1. **Familiarize Yourself**: Explore all pages and features
2. **Review Code Structure**: Understand the component hierarchy
3. **Study Mock Data**: See how data flows through the app
4. **Plan Customizations**: Identify what you want to change
5. **Backend Integration**: Prepare for API connection

---

Need help? Review the documentation files or check the inline code comments!

Happy developing! 🚀
