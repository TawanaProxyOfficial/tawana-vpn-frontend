import * as LucideIcons from 'lucide-react';
import { cn } from '../../utils/helpers';
import type { LucideProps } from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.FC<LucideProps>>)[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} className={cn('inline-block', className)} />;
}
