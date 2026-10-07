"use client";

export function SuggestedPrompt({
  text,
  onSelect,
}: {
  text: string;
  onSelect: (text: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(text)}
      className="rounded-full border border-border bg-white px-3.5 py-2 text-left text-sm text-navy transition hover:border-teal hover:bg-teal-soft"
    >
      {text}
    </button>
  );
}
