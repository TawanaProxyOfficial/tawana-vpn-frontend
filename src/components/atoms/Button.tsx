import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/helpers';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  glow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-green-500/30',
    secondary: 'border-2 border-white/20 text-white hover:bg-white/10 dark:border-white/20 dark:text-white light:border-gray-300 light:text-gray-800 light:hover:bg-gray-100',
    ghost: 'text-white hover:bg-white/10 dark:text-white light:text-gray-800 light:hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        glow && variant === 'primary' && 'glow-green',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
