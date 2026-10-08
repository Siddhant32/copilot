"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <div className="relative flex min-h-screen bg-background">
        <AmbientBackground />
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header />
          <motion.main
            key={pathname}
initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 px-4 pb-28 pt-6 md:px-8 lg:pb-10"
          >
            {children}
          </motion.main>
        </div>
        <MobileNav />
      </div>
    </TooltipProvider>
  );
}
