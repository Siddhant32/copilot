"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/nav";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Logo } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

const primary = navItems.slice(0, 4);

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-card/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_rgba(37,50,55,0.16)] backdrop-blur-xl"
        aria-label="Mobile"
      >
        <div className="grid grid-cols-5">
          {primary.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 text-[11px]",
                  active ? "text-teal" : "text-muted",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label.split(" ")[0]}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] text-muted"
          >
            <Menu className="h-5 w-5" />
            More
          </button>
        </div>
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="p-5">
          <Logo />
          <div className="mt-5 grid gap-1 pb-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-navy hover:bg-teal-soft"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
