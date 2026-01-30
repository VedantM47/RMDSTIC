/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme base
        dark: {
          900: '#0a0e1a',
          800: '#0f1420',
          700: '#151b2d',
          600: '#1a2238',
          500: '#1f2940',
        },
        // Sector colors
        economics: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        politics: {
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        trade: {
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        // Status colors
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#06b6d4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
