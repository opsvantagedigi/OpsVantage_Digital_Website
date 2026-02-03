import React from 'react';
import { cn } from '@/lib/utils';

interface RoadmapItemProps {
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  isLast?: boolean;
}

const statusStyles = {
  Completed: {
    dot: 'bg-green-500',
    text: 'text-green-400',
  },
  'In Progress': {
    dot: 'bg-blue-500',
    text: 'text-blue-400',
  },
  Planned: {
    dot: 'bg-gray-500',
    text: 'text-gray-400',
  },
};

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, description, status, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className={cn('w-6 h-6 rounded-full flex-shrink-0', statusStyles[status].dot)} />
        {!isLast && <div className="w-px h-full bg-gray-700" />}
      </div>
      <div className="pb-12">
        <p className={cn('font-orbitron text-lg font-semibold', statusStyles[status].text)}>
          {status}
        </p>
        <h3 className="font-orbitron text-xl font-bold text-white mt-1 mb-2">{title}</h3>
        <p className="font-inter text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default RoadmapItem;
