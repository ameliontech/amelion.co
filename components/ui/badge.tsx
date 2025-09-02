'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

export const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ' +
    'select-none',
  {
    variants: {
      variant: {
        default:
          'bg-slate-800 text-slate-100 border-slate-700 hover:bg-slate-700/80',
        outline:
          'bg-transparent text-slate-200 border-slate-600 hover:bg-slate-800/40',
        success:
          'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20',
        info:
          'bg-cyan-500/15 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20',
        warning:
          'bg-amber-500/15 text-amber-400 border-amber-500/30 hover:bg-amber-500/20',
        destructive:
          'bg-rose-500/15 text-rose-400 border-rose-500/30 hover:bg-rose-500/20',
      },
      size: {
        sm: 'px-2 py-0 text-[11px]',
        md: 'px-2.5 py-0.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export type BadgeProps = React.ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        ref={ref}
        className={twMerge(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
