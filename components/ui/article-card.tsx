import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  description: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, href }) => {
  return (
    <Link href={href} className="block p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors group">
      <h3 className="font-orbitron text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="font-inter text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-blue-400 group-hover:text-blue-300">
        <span>Read More</span>
        <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default ArticleCard;
