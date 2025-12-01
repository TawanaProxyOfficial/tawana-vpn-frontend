import { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200',
            'bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-green-500',
            'dark:bg-white/5 dark:border-white/10 dark:text-white',
            'light:bg-gray-50 light:border-gray-200 light:text-gray-900 light:placeholder:text-gray-400',
            icon ? 'pr-12' : '',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
