import React from 'react';
import { cn } from '../../utils/cn';

interface GradientSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImage?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function GradientSection({
  backgroundImage,
  children,
  className,
  containerClassName,
  ...props
}: GradientSectionProps) {
  return (
    <section 
      className={cn(
        "relative bg-gradient-to-br from-navy-900 to-navy-800 text-white",
        className
      )}
      {...props}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
      <div className={cn(
        "relative z-10",
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
}