"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import type { ChatSource } from "@/lib/types";

export function SourceCitation({ source }: { source: ChatSource }) {
  return (
    <Link
      href={source.href}
      className="flex items-center gap-3 rounded-2xl border border-border bg-white px-3 py-2.5 hover:bg-teal-soft/60"
    >
      <FileText className="h-4 w-4 text-teal-dark" />
      <span>
        <span className="block text-sm font-medium text-navy">{source.label}</span>
        <span className="text-xs text-muted">{source.detail}</span>
      </span>
    </Link>
  );
}
