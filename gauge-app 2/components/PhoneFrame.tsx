"use client";

import Link from "next/link";
import { GaugeLogo } from "@/components/Logo";
import { ReactNode } from "react";

export function PhoneFrame({
  children,
  title,
  subtitle,
  statusColor = "#7DB9E8",
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
  statusColor?: string;
}) {
  return (
    <div className="min-h-screen bg-gauge-black bg-grid-subtle p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-md mb-4 flex items-center justify-between">
        <Link href="/" className="text-xs text-white/50 hover:text-white">
          ← Back to Gauge
        </Link>
        <div className="flex gap-2">
          <Link href="/student" className="text-xs text-white/50 hover:text-white">Student</Link>
          <span className="text-white/20">·</span>
          <Link href="/parent" className="text-xs text-white/50 hover:text-white">Parent</Link>
          <span className="text-white/20">·</span>
          <Link href="/mechanic" className="text-xs text-white/50 hover:text-white">Mechanic</Link>
        </div>
      </div>

      <div
        className="w-full max-w-[360px] bg-white rounded-[32px] overflow-hidden relative"
        style={{ boxShadow: "0 0 0 8px #1C2430, 0 0 0 9px #2A3444" }}
      >
        {/* Status bar */}
        <div className="flex justify-between px-5 pt-3 pb-1 text-[11px] font-medium text-gauge-black">
          <span>9:41</span>
          <span>● ●● ■</span>
        </div>

        {/* App header */}
        <div className="px-5 py-3 border-b border-gauge-border flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-gauge-black rounded-md flex items-center justify-center">
              <GaugeLogo size={18} />
            </div>
            <div>
              <p className="text-[16px] font-medium tracking-tight text-gauge-black">{title}</p>
              <p className="text-xs text-gauge-gray">{subtitle}</p>
            </div>
          </div>
          <span
            className="w-2 h-2 rounded-full pulse-ring"
            style={{ backgroundColor: statusColor, boxShadow: `0 0 0 4px ${statusColor}33` }}
          />
        </div>

        {children}
      </div>
    </div>
  );
}

export function BottomNav({
  active,
  items,
}: {
  active: string;
  items: { key: string; label: string; icon: string; href: string }[];
}) {
  return (
    <nav className="flex border-t border-gauge-border bg-white py-1 pb-2">
      {items.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className="flex-1 py-2 text-center text-[10px]"
        >
          <span
            className="block text-base mb-0.5"
            style={{ color: active === item.key ? "#7DB9E8" : "#9CA3AF" }}
          >
            {item.icon}
          </span>
          <span
            className={active === item.key ? "text-gauge-black font-medium" : "text-gauge-gray"}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
