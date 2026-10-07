import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function AiLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-ai px-2 py-0.5 text-[11px] font-medium text-[#5b4d86]",
        className,
      )}
    >
      <Sparkles className="h-3 w-3" aria-hidden />
      CarePilot AI
    </span>
  );
}
