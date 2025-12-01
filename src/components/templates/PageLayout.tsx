import type { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cn('min-h-screen', className)}>
      {children}
    </div>
  );
}
