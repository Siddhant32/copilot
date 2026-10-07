"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg) translateY(-4px)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <Tag
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "glass-panel rounded-[1.6rem] transition-transform duration-200 will-change-transform",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
