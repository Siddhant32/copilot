"use client";

import { Activity, HeartPulse, Moon, Pill, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Heart", value: "72", unit: "bpm", icon: HeartPulse, className: "left-0 top-8" },
  { label: "Sleep", value: "8.2", unit: "hrs", icon: Moon, className: "right-0 top-1" },
  { label: "Vitals", value: "98", unit: "%", icon: Activity, className: "right-2 bottom-4" },
  { label: "Meds", value: "86", unit: "%", icon: Pill, className: "left-2 bottom-0" },
];

export function HealthCore() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[410px] sm:h-[360px]" aria-label="Health Core visualization">
      <div className="orbit-ring absolute left-1/2 top-1/2 h-[250px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] sm:h-[290px] sm:w-[205px]" />
      <div className="orbit-ring absolute left-1/2 top-1/2 h-[190px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[50%]" style={{ transform: "translate(-50%, -50%) rotate(24deg) perspective(500px) rotateX(62deg)" }} />
      <motion.div className="core-breathe absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[42%_58%_55%_45%/45%_42%_58%_55%] bg-[radial-gradient(circle_at_35%_28%,#e0fbfc_0%,#9db4c0_28%,#5c6b73_65%,#253237_100%)] shadow-[0_16px_34px_rgba(8,75,53,0.34),0_0_70px_rgba(17,114,79,0.22)] sm:h-44 sm:w-44">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/65">Health core</p>
          <p className="mt-1 font-display text-5xl text-white">86</p>
          <p className="text-xs text-white/65">balanced today</p>
        </div>
      </motion.div>
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div key={metric.label} className={`surface-float absolute z-10 flex items-center gap-2 rounded-2xl px-3 py-2 ${metric.className}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + index * 0.1 }} whileHover={{ y: -4, scale: 1.04 }}>
            <Icon className="h-4 w-4 text-teal" />
            <div><p className="text-[10px] uppercase tracking-widest text-muted">{metric.label}</p><p className="font-display text-lg leading-none text-navy">{metric.value}<span className="ml-1 font-sans text-[10px] text-muted">{metric.unit}</span></p></div>
          </motion.div>
        );
      })}
      <div className="absolute bottom-1/2 left-1/2 hidden -translate-x-1/2 translate-y-[150px] items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted sm:flex"><ShieldCheck className="h-3.5 w-3.5 text-teal" /> private by design</div>
    </div>
  );
}
