'use client';

import * as React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// --- Governance Note ---
// This `cn` utility is a best practice from shadcn/ui to merge Tailwind classes
// without style conflicts. It ensures visual consistency and is a "Teachable" pattern.
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// --- Governance Note ---
// The BentoGrid component is the structural foundation. It uses CSS Grid for layout.
// This choice is deliberate for performance. CSS Grid is native to the browser,
// avoiding expensive JavaScript calculations for layout, which is critical for
  // passing Lighthouse performance audits. The `gap-4` provides the necessary
// "Breathing Room" mandated by the Visual Doctrine.
const BentoGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-5 gap-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
BentoGrid.displayName = 'BentoGrid';

// --- Governance Note ---
// The BentoGridItem is the interactive element. The `motion.div` from Framer Motion provides
// a subtle, physics-based hover effect, aligning with the "Cinematic, not chaotic"
// principle. This component is designed to be a "Non-Destructive" building block.
interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className, children, as: Component = 'div', ...props }, ref) => {
    const motionProps: MotionProps = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' },
      whileHover: {
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
    };

    return (
      <motion.div {...motionProps} className={cn('h-full w-full', className)}>
        <Component
          ref={ref}
          className={cn(
            'row-span-1 rounded-xl group/bento-item flex flex-col justify-between h-full w-full space-y-4 p-6 border border-border/40 bg-secondary/50 shadow-sm hover:shadow-md transition-shadow duration-200'
          )}
          {...props}
        >
          {children}
        </Component>
      </motion.div>
    );
  }
);
BentoGridItem.displayName = 'BentoGridItem';

export { BentoGrid, BentoGridItem };