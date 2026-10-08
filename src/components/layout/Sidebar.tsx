"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 rounded-xl px-1 py-1">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal text-ink shadow-[0_8px_18px_rgba(47,157,145,0.2)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path
            fill="currentColor"
            d="M12 3.5c.5 0 .9.4.9.9V8h3.6a.9.9 0 0 1 0 1.8H12.9v3.8h2.7a.9.9 0 0 1 0 1.8h-2.7V20a.9.9 0 1 1-1.8 0v-4.6H8.4a.9.9 0 0 1 0-1.8h2.7V9.8H7.5a.9.9 0 0 1 0-1.8h3.6V4.4c0-.5.4-.9.9-.9Z"
          />
        </svg>
      </span>
      {!compact && (
        <span>
          <span className="block font-display text-lg leading-none text-navy">
            CarePilot
          </span>
          <span className="text-[11px] text-muted">Your health, understood.</span>
        </span>
      )}
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-[272px] shrink-0 flex-col border-r border-white/10 bg-white/75 px-5 py-6 backdrop-blur-3xl lg:flex">
      <Logo />
      <div className="mt-10 mb-3 px-3 text-[10px] uppercase tracking-[0.28em] text-muted/60">Your space</div>
      <nav className="flex flex-1 flex-col gap-1" aria-label="Primary">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-teal-soft text-teal-dark shadow-sm"
                  : "text-muted hover:bg-teal-soft/60 hover:text-navy",
              )}
            >
              <Icon className={cn("h-4 w-4", active && "text-teal")} aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber to-magenta text-sm font-bold text-ink">
            AM
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">Demo Patient</p>
            <p className="text-xs text-muted">Personal Health Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
