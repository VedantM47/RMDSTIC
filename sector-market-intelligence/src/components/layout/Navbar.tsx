import React from 'react';
import { Menu, Bell, Settings } from 'lucide-react';
import { useGlobalStore } from '../../store/useGlobalStore';

const Navbar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useGlobalStore();

  return (
    <nav className="border-b border-gray-800 bg-dark-800/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 text-gray-400 hover:bg-dark-700 hover:text-gray-200"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-economics-500 to-politics-500" />
            <div>
              <h1 className="text-lg font-bold text-white">Sector Intelligence</h1>
              <p className="text-xs text-gray-400">Market Impact Engine</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-lg bg-dark-700/50 px-3 py-1.5 text-xs text-gray-400 md:flex">
            <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
            <span>Live</span>
          </div>
          <button className="rounded-lg p-2 text-gray-400 hover:bg-dark-700 hover:text-gray-200">
            <Bell size={18} />
          </button>
          <button className="rounded-lg p-2 text-gray-400 hover:bg-dark-700 hover:text-gray-200">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
