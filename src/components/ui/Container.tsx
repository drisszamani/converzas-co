import React from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export const Container = ({
  className,
  children,
  as: Component = 'div',
  size = 'lg',
}: ContainerProps) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 md:px-8',
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}; 