import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fillColor?: string;
  hoverFillColor?: string;
  className?: string;
  variant?: 'filled' | 'outline';
}

export const CTAButton: FC<CTAButtonProps> = ({
  children,
  fillColor = 'bg-black',
  hoverFillColor = 'bg-blue-600',
  className,
  variant = 'filled',
  ...props
}) => {
  return (
    <button
      className={cn(
        'group px-8 py-3 rounded-3xl transition-colors duration-1000 overflow-hidden',
        variant === 'filled' 
          ? `${fillColor} text-white` 
          : 'border border-black text-black',
        className
      )}
      data-hover=""
      {...props}
    >
      {/* Fill animation element */}
      <span
        className={cn(
          'absolute inset-0 w-0 rounded-3xl transition-all duration-300 ease-in-out group-hover:w-full -z-10',
          hoverFillColor
        )}
      />
      
      {/* Button content */}
      <span className="relative">{children}</span>
      
      {/* Magnetic hover bounds */}
      <div data-hover-bounds="" />
    </button>
  );
}; 