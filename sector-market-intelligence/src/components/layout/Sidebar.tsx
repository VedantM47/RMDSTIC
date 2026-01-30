import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Newspaper, GitBranch, BookOpen } from 'lucide-react';
import { useGlobalStore } from '../../store/useGlobalStore';

const Sidebar: React.FC = () => {
  const { sidebarOpen } = useGlobalStore();

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/sector/Economics', icon: TrendingUp, label: 'Economics', color: 'text-economics-500' },
    { path: '/sector/Politics', icon: TrendingUp, label: 'Politics', color: 'text-politics-500' },
    { path: '/sector/Global%20Trade', icon: TrendingUp, label: 'Global Trade', color: 'text-trade-500' },
    { path: '/news', icon: Newspaper, label: 'News Intelligence' },
    { path: '/spillovers', icon: GitBranch, label: 'Spillover Analysis' },
    { path: '/methodology', icon: BookOpen, label: 'Methodology' },
  ];

  if (!sidebarOpen) return null;

  return (
    <aside className="w-64 border-r border-gray-800 bg-dark-800/50">
      <div className="flex h-full flex-col py-6">
        <nav className="flex-1 space-y-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-dark-600 text-white'
                    : 'text-gray-400 hover:bg-dark-700 hover:text-gray-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={18} className={item.color || ''} />
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-800 px-3 pt-4">
          <div className="rounded-lg bg-dark-700/50 p-3">
            <p className="text-xs font-medium text-gray-400">System Status</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-gray-500">Confidence</span>
              <span className="text-xs font-semibold text-success">80%</span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xs text-gray-500">Volatility</span>
              <span className="text-xs font-semibold text-warning">23.5</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
