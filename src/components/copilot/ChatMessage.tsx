"use client";

import { motion } from "framer-motion";
import { AiLabel } from "@/components/ui/ai-label";
import { SourceCitation } from "@/components/copilot/SourceCitation";
import type { ChatMessage as ChatMessageType } from "@/lib/types";
import { ArrowDown, ArrowUp } from "lucide-react";

export function ChatMessage({ message }: { message: ChatMessageType }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-3xl rounded-br-lg bg-navy px-4 py-3 text-sm text-white">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-[92%] space-y-3"
    >
      <div className="flex items-center gap-2">
        <AiLabel />
        {message.basedOnRecords && (
          <span className="text-[11px] font-medium text-muted">Based on your records</span>
        )}
      </div>
      <div className="ai-surface rounded-3xl rounded-tl-lg p-4 text-sm leading-relaxed text-navy whitespace-pre-wrap">
        {message.content}
        {message.changes && message.changes.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
              Key changes
            </p>
            <div className="grid gap-2">
              {message.changes.map((change) => (
                <div
                  key={change.name}
                  className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5"
                >
                  <div>
                    <p className="font-semibold">{change.name}</p>
                    <p className="text-lg">{change.current}</p>
                  </div>
                  <p className="flex items-center gap-1 text-sm text-muted">
                    {change.direction === "down" ? (
                      <ArrowDown className="h-4 w-4 text-amber" />
                    ) : (
                      <ArrowUp className="h-4 w-4 text-amber" />
                    )}
                    from {change.previous}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {message.closing && (
          <p className="mt-4 text-muted">{message.closing}</p>
        )}
      </div>
      {message.sources && message.sources.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
            Sources
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {message.sources.map((source) => (
              <SourceCitation key={source.href} source={source} />
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}
