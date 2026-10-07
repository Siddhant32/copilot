"use client";

import { FormEvent, useRef, useState } from "react";
import { Mic, Paperclip, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { suggestedPrompts } from "@/lib/mock-data";
import { generateChatReply } from "@/lib/services/chat";
import type { ChatMessage as ChatMessageType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "@/components/copilot/ChatMessage";
import { SuggestedPrompt } from "@/components/copilot/SuggestedPrompt";
import { Tooltip } from "@/components/ui/tooltip";
import { Disclaimer } from "@/components/Disclaimer";

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const userMessage: ChatMessageType = {
      id: `user-${crypto.randomUUID()}`,
      role: "user",
      content: trimmed,
      createdAt: new Date().toISOString(),
    };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);
    const reply = await generateChatReply(trimmed);
    setMessages((current) => [...current, reply]);
    setLoading(false);
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void send(input);
  }

  return (
    <div className="flex min-h-[70vh] flex-1 flex-col rounded-[1.5rem] border border-border bg-white card-shadow">
      <div ref={listRef} className="flex-1 space-y-5 overflow-y-auto p-5 md:p-8 scrollbar-thin">
        {messages.length === 0 && (
          <div className="mx-auto flex max-w-xl flex-col items-center py-10 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ai text-[#5b4d86]">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-3xl text-navy">
              How can I help you today?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              I can help you understand your health information, organize your records,
              and prepare for conversations with your healthcare provider.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {suggestedPrompts.map((prompt) => (
                <SuggestedPrompt key={prompt} text={prompt} onSelect={send} />
              ))}
            </div>
          </div>
        )}
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {loading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted"
          >
            CarePilot is reviewing your records…
          </motion.p>
        )}
      </div>
      <form onSubmit={onSubmit} className="border-t border-border p-4">
        <div className="flex items-end gap-2 rounded-[1.4rem] border border-border bg-[#f8faf7] p-2">
          <Tooltip content="Attach document">
            <Button type="button" variant="ghost" size="icon" aria-label="Attach document">
              <Paperclip className="h-4 w-4" />
            </Button>
          </Tooltip>
          <textarea
            rows={1}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask anything about your health..."
            className="max-h-32 flex-1 resize-none bg-transparent py-2.5 text-sm outline-none"
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void send(input);
              }
            }}
          />
          <Tooltip content="Voice input">
            <Button type="button" variant="ghost" size="icon" aria-label="Voice input">
              <Mic className="h-4 w-4" />
            </Button>
          </Tooltip>
          <Button type="submit" size="icon" aria-label="Send message">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <Disclaimer className="mt-3 px-2" />
      </form>
    </div>
  );
}
