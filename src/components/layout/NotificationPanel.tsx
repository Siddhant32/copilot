"use client";

import Link from "next/link";
import { notifications } from "@/lib/mock-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotificationPanel() {
  const unread = notifications.filter((item) => item.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" aria-label="Notifications" className="relative">
          <Bell className="h-4 w-4" />
          {unread > 0 && (
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-2">
        <p className="px-3 py-2 text-sm font-semibold text-navy">Notifications</p>
        <ul className="grid gap-1">
          {notifications.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href ?? "/"}
                className="block rounded-xl px-3 py-2.5 hover:bg-teal-soft/70"
              >
                <p className="text-sm font-medium text-navy">
                  {item.unread && (
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-teal align-middle" />
                  )}
                  {item.title}
                </p>
                <p className="text-xs text-muted">{item.body}</p>
                <p className="mt-1 text-[11px] text-muted">{item.time}</p>
              </Link>
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
