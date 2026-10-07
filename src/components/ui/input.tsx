import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-navy placeholder:text-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";
