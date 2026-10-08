"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-teal-dark to-teal text-ink shadow-[0_10px_24px_rgba(23,96,71,0.24)] hover:shadow-[0_14px_30px_rgba(23,96,71,0.3)] hover:-translate-y-0.5",
        secondary:
          "bg-white/5 text-navy border border-white/15 hover:bg-white/10 hover:border-teal/40",
        ghost: "text-muted hover:bg-white/10 hover:text-navy",
        outline:
          "border border-white/20 bg-transparent text-navy hover:border-teal hover:text-teal-dark",
        danger: "bg-danger-soft text-danger hover:bg-danger/20",
        ai: "bg-gradient-to-r from-teal-dark via-teal to-[#2b9a68] text-ink shadow-[0_10px_28px_rgba(8,75,53,0.3)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(8,75,53,0.38)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          "active:scale-[0.97]",
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
