import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-teal-soft text-teal-dark shadow-[0_0_16px_rgba(46,230,200,0.25)]",
        muted: "bg-white/8 text-muted",
        amber: "bg-amber-soft text-amber",
        danger: "bg-danger-soft text-danger",
        ai: "bg-ai text-violet",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
