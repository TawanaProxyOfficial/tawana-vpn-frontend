import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface LuxuryCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  gradient?: boolean;
  glow?: boolean;
  hover?: boolean;
  className?: string;
}

export function LuxuryCard({
  children,
  gradient = false,
  glow = false,
  hover = true,
  className = '',
  ...props
}: LuxuryCardProps) {
  return (
    <motion.div
      className={`
        luxury-card
        rounded-2xl p-6
        backdrop-blur-xl
        transition-all duration-300
        ${gradient ? 'luxury-gradient' : ''}
        ${glow ? 'luxury-glow' : ''}
        ${hover ? 'luxury-hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
