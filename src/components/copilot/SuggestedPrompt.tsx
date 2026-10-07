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
      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-left text-sm text-navy transition hover:border-teal hover:bg-teal-soft hover:shadow-[0_0_20px_rgba(46,230,200,0.2)]"
    >
      {text}
    </button>
  );
}
