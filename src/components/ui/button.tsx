"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-teal text-white hover:bg-teal-dark shadow-sm",
        secondary:
          "bg-white text-navy border border-border hover:bg-teal-soft/60",
        ghost: "text-muted hover:bg-white hover:text-navy",
        outline:
          "border border-border bg-transparent text-navy hover:bg-white",
        danger: "bg-danger-soft text-danger hover:bg-danger/10",
        ai: "bg-navy text-white hover:bg-navy/90",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-5",
        icon: "h-10 w-10",
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
          "active:scale-[0.98]",
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
