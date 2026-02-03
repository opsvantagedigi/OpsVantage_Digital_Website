import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  footer?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ className, children, title, footer }) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-700 bg-gray-800/50 shadow-lg text-white flex flex-col',
        className
      )}
    >
      <header className="p-6 border-b border-gray-700">
        <h3 className="font-orbitron text-xl font-semibold tracking-tight">{title}</h3>
      </header>
      <main className="p-6 flex-grow">{children}</main>
      {footer && (
        <footer className="p-6 border-t border-gray-700 mt-auto">
          {footer}
        </footer>
      )}
    </div>
  );
};

export default DashboardCard;
