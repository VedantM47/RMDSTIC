import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import SectorView from './pages/SectorView/SectorView';
import NewsIntelligence from './pages/NewsIntelligence/NewsIntelligence';
import SpilloverAnalysis from './pages/SpilloverAnalysis/SpilloverAnalysis';
import Methodology from './pages/Methodology/Methodology';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sector/:sectorName" element={<SectorView />} />
            <Route path="/news" element={<NewsIntelligence />} />
            <Route path="/spillovers" element={<SpilloverAnalysis />} />
            <Route path="/methodology" element={<Methodology />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
