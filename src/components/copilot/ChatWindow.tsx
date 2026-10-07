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
    <div className="glass-panel flex min-h-[70vh] flex-1 flex-col rounded-[1.7rem]">
      <div ref={listRef} className="flex-1 space-y-5 overflow-y-auto p-5 md:p-8 scrollbar-thin">
        {messages.length === 0 && (
          <div className="mx-auto flex max-w-xl flex-col items-center py-10 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-violet to-teal text-ink shadow-[0_0_30px_rgba(167,139,250,0.4)]">
              <Sparkles className="h-7 w-7" />
            </div>
            <h2 className="mt-5 font-display text-4xl text-navy md:text-5xl">
              How can I help <span className="gradient-text">you today?</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
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
            className="text-sm text-teal"
          >
            CarePilot is reviewing your records…
          </motion.p>
        )}
      </div>
      <form onSubmit={onSubmit} className="border-t border-white/10 p-4">
        <div className="flex items-end gap-2 rounded-[1.4rem] border border-white/15 bg-black/30 p-2">
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
            className="max-h-32 flex-1 resize-none bg-transparent py-2.5 text-sm text-navy outline-none placeholder:text-muted"
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
