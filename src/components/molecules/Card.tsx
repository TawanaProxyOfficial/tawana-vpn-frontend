import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className, hover = true, glass = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        glass ? 'backdrop-blur-xl bg-white/5 border border-white/10' : '',
        'dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20',
        'light:bg-white light:border light:border-gray-200 light:hover:border-gray-300 light:shadow-lg',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
