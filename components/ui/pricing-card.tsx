import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  planName: string;
  price: string;
  priceFrequency: string;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  priceFrequency,
  features,
  isFeatured = false,
  ctaText,
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border bg-gray-800/50 text-white flex flex-col',
        isFeatured ? 'border-blue-500' : 'border-gray-700'
      )}
    >
      {isFeatured && (
        <div className="text-center py-2 bg-blue-500 rounded-t-xl font-semibold font-inter">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="font-orbitron text-2xl font-bold text-center">{planName}</h3>
        <div className="text-center my-6">
          <span className="text-5xl font-bold tracking-tighter">{price}</span>
          <span className="text-gray-400">{priceFrequency}</span>
        </div>
        <ul className="space-y-4 font-inter">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-3" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 mt-auto">
        <Button
          className="w-full"
          variant={isFeatured ? 'default' : 'outline'}
          size="lg"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
