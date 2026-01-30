import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, title, subtitle, actions }) => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto max-w-7xl p-6">
        {(title || subtitle || actions) && (
          <div className="mb-6 flex items-start justify-between">
            <div>
              {title && <h1 className="text-2xl font-bold text-white">{title}</h1>}
              {subtitle && <p className="mt-1 text-sm text-gray-400">{subtitle}</p>}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
