import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function AiLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-violet/30 bg-ai px-2.5 py-0.5 text-[11px] font-semibold text-violet shadow-[0_0_18px_rgba(167,139,250,0.25)]",
        className,
      )}
    >
      <Sparkles className="h-3 w-3" aria-hidden />
      CarePilot AI
    </span>
  );
}
