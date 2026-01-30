import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 transform">
          <div className="whitespace-nowrap rounded-lg border border-gray-700 bg-dark-800 px-3 py-2 text-xs text-gray-200 shadow-lg">
            {content}
            <div className="absolute left-1/2 top-full -translate-x-1/2 transform border-4 border-transparent border-t-dark-800" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
