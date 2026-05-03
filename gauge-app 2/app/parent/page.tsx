"use client";

import { PhoneFrame, BottomNav } from "@/components/PhoneFrame";
import { getDTC } from "@/lib/dtc-database";

const PARENT_NAV = [
  { key: "overview", label: "Overview", icon: "◉", href: "/parent" },
  { key: "location", label: "Location", icon: "◈", href: "/parent" },
  { key: "history", label: "History", icon: "◐", href: "/parent" },
  { key: "settings", label: "Settings", icon: "◎", href: "/parent" },
];

export default function ParentDashboard() {
  const p0420 = getDTC("P0420")!;

  return (
    <PhoneFrame title="Kevin's Civic" subtitle="Last seen: UTSA · 4m ago">
      <div className="p-5 min-h-[480px] bg-white">
        <div className="bg-gauge-black p-3.5 rounded-md mb-4 flex items-center gap-3">
          <span
            className="w-2.5 h-2.5 rounded-full bg-gauge-blue flex-shrink-0 pulse-ring"
            style={{ boxShadow: "0 0 0 4px rgba(125, 185, 232, 0.2)" }}
          />
          <p className="text-[13px] text-white leading-snug">
            <strong className="font-medium text-gauge-blue">Active alert.</strong>
            <br />Check engine light came on 2 hours ago.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2 mb-3.5">
          <StatBox label="Vehicle health" value="Attention" accent />
          <StatBox label="Miles this week" value="184" />
          <StatBox label="Last oil change" value="3,660 mi" />
          <StatBox label="Subscription" value="Active" />
        </div>

        <p className="text-[10px] font-medium text-gauge-gray uppercase tracking-wider mb-2.5 mt-4">
          Active alerts
        </p>
        <div className="bg-gauge-blueBg border border-gauge-blue rounded-md p-3.5 mb-2.5">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full mb-2 bg-gauge-black text-white">
            <span className="w-1 h-1 rounded-full bg-gauge-blue" />
            Moderate
          </span>
          <p className="text-sm font-medium text-gauge-black tracking-tight mb-1">{p0420.title}</p>
          <p className="text-xs text-gauge-gray leading-relaxed mb-2">
            Kevin was notified 2 hours ago. Recommended action: visit partner shop within 1–2 weeks.
          </p>
          <p className="text-[11px] text-gauge-gray pt-2 border-t border-gauge-border/50">
            Estimated: <strong className="text-gauge-black font-medium">${p0420.costMin}–${p0420.costMax}</strong>
          </p>
        </div>

        <p className="text-[10px] font-medium text-gauge-gray uppercase tracking-wider mb-2.5 mt-4">
          Recent activity
        </p>
        <ActivityRow title="Viewed SOP video" time="1h ago" />
        <ActivityRow title="Viewed Alamo Auto Care" time="45m ago" />
        <ActivityRow title="Oil change due soon" time="340 mi remaining" urgent />

        <div className="flex gap-2 mt-4">
          <button className="flex-1 text-[11px] py-2 px-2.5 rounded-md border border-gauge-border bg-white text-gauge-black font-medium hover:bg-gauge-grayLight">
            Call Kevin
          </button>
          <button className="flex-1 text-[11px] py-2 px-2.5 rounded-md bg-gauge-black text-white font-medium hover:bg-gauge-blackLight">
            Pay for repair
          </button>
        </div>
      </div>

      <BottomNav active="overview" items={PARENT_NAV} />
    </PhoneFrame>
  );
}

function StatBox({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`p-3 rounded-md ${accent ? "bg-gauge-black" : "bg-gauge-grayLight"}`}>
      <p className={`text-[10px] uppercase tracking-wider font-medium mb-0.5 ${accent ? "text-gauge-blue" : "text-gauge-gray"}`}>
        {label}
      </p>
      <p className={`text-lg font-medium tracking-tight ${accent ? "text-white" : "text-gauge-black"}`}>
        {value}
      </p>
    </div>
  );
}

function ActivityRow({ title, time, urgent = false }: { title: string; time: string; urgent?: boolean }) {
  return (
    <div className="py-3 border-b border-gauge-border/50 last:border-0 flex justify-between items-center">
      <p className="text-[13px] font-medium text-gauge-black">{title}</p>
      <span className={`text-[11px] ${urgent ? "text-gauge-black font-medium" : "text-gauge-gray"}`}>
        {time}
      </span>
    </div>
  );
}
