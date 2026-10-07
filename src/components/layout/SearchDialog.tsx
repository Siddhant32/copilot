"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { searchRecords } from "@/lib/services/health";
import type { SearchResult } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("Vitamin D");
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    void searchRecords(query).then(setResults);
  }, [query, open]);

  const grouped = useMemo(() => results, [results]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden">
        <DialogTitle className="sr-only">Search health records</DialogTitle>
        <label className="flex items-center gap-3 border-b border-border px-5 py-4">
          <Search className="h-4 w-4 text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search reports, medications, appointments..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
        <ul className="max-h-[360px] overflow-y-auto p-2">
          {grouped.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-muted">
              No matching records.
            </li>
          )}
          {grouped.map((result) => (
            <li key={result.id}>
              <button
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  router.push(result.href);
                }}
                className={cn(
                  "flex w-full flex-col rounded-xl px-4 py-3 text-left hover:bg-teal-soft/70",
                )}
              >
                <span className="text-sm font-medium text-navy">{result.title}</span>
                <span className="text-xs text-muted">{result.subtitle}</span>
              </button>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
