import { cn } from '../../utils/helpers';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'purple' | 'default';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'md', className }: BadgeProps) {
  const variants = {
    green: 'bg-[#00D4AA]/20 text-[#00D4AA] border-[#00D4AA]/30',
    blue: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    purple: 'bg-[#6366F1]/20 text-[#6366F1] border-[#6366F1]/30',
    default: 'bg-white/10 text-white/80 border-white/20 dark:bg-white/10 dark:text-white/80 light:bg-gray-100 light:text-gray-700 light:border-gray-200',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
