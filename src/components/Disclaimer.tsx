import { medicalDisclaimer } from "@/lib/mock-data";

export function Disclaimer({ className }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-muted ${className ?? ""}`}>
      {medicalDisclaimer}
    </p>
  );
}
