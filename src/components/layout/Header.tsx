"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { pageTitles } from "@/lib/nav";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Sidebar";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { NotificationPanel } from "@/components/layout/NotificationPanel";

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const meta =
    pageTitles[pathname] ??
    (pathname.startsWith("/reports/")
      ? { title: "Report", subtitle: "AI-assisted review" }
      : { title: "CarePilot" });

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-[#f3f5f2]/85 px-4 py-3 backdrop-blur md:px-8">
      <div className="flex items-center gap-3 lg:hidden">
        <Logo compact />
      </div>
      <div className="min-w-0">
        <h1 className="truncate font-display text-xl text-navy md:text-2xl">
          {meta.title}
        </h1>
        {meta.subtitle && (
          <p className="hidden text-sm text-muted sm:block">{meta.subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="hidden md:flex h-10 w-56 items-center gap-2 rounded-full border border-border bg-white px-3 text-sm text-muted"
        >
          <Search className="h-4 w-4" />
          Search records
        </button>
        <Button
          variant="secondary"
          size="icon"
          className="md:hidden"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          <Search className="h-4 w-4" />
        </Button>
        <NotificationPanel />
        <Link
          href="/settings"
          className="hidden sm:grid h-10 w-10 place-items-center rounded-full bg-navy text-xs font-semibold text-white"
          aria-label="Alex Morgan profile"
        >
          AM
        </Link>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
