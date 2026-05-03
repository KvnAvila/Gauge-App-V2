"use client";

import Link from "next/link";
import { PhoneFrame, BottomNav } from "@/components/PhoneFrame";
import { getDTC } from "@/lib/dtc-database";
import STUDENT_NAV from "./nav";

export default function StudentDashboard() {
  const p0420 = getDTC("P0420")!;
  const p0171 = getDTC("P0171")!;

  return (
    <PhoneFrame title="Dashboard" subtitle="2019 Civic · Connected">
      <div className="p-5 min-h-[480px] bg-white">
        {/* Alert banner */}
        <div className="bg-gauge-black p-3.5 rounded-md mb-4 flex items-center gap-3">
          <span
            className="w-2.5 h-2.5 rounded-full bg-gauge-blue flex-shrink-0 pulse-ring"
            style={{ boxShadow: "0 0 0 4px rgba(125, 185, 232, 0.2)" }}
          />
          <p className="text-[13px] text-white leading-snug">
            <strong className="font-medium text-gauge-blue">Check engine light is on.</strong>
            <br />Tap below to see what it means.
          </p>
        </div>

        {/* Primary DTC */}
        <div className="bg-gauge-blueBg border border-gauge-blue rounded-md p-3.5 mb-2.5">
          <SeverityPill severity="high" label={p0420.severityLabel} />
          <p className="font-mono text-[10px] text-gauge-gray tracking-wider">{p0420.code}</p>
          <p className="text-sm font-medium mt-0.5 mb-1 text-gauge-black tracking-tight">{p0420.title}</p>
          <p className="text-xs text-gauge-gray leading-relaxed">{p0420.plainEnglish}</p>
          <div className="text-[11px] text-gauge-gray mt-2 pt-2 border-t border-gauge-border/50">
            Typical repair: <strong className="text-gauge-black font-medium">${p0420.costMin}–${p0420.costMax}</strong>
            {" · "}
            <span className="text-gauge-blueDark font-medium">Save 5% at partner shops</span>
          </div>
          <div className="flex gap-2 mt-3">
            <Link
              href="/student/learn"
              className="flex-1 text-[11px] py-2 px-2.5 rounded-md border border-gauge-border bg-white text-gauge-black font-medium text-center hover:bg-gauge-grayLight"
            >
              Watch SOP
            </Link>
            <Link
              href="/student/shops"
              className="flex-1 text-[11px] py-2 px-2.5 rounded-md bg-gauge-blue text-gauge-black font-medium text-center hover:bg-[#5FA4DC]"
            >
              Find a shop
            </Link>
          </div>
        </div>

        {/* Secondary DTC */}
        <div
          className="bg-white border border-gauge-border rounded-r-md p-3 pl-[13px] mb-2.5"
          style={{ borderLeft: "3px solid #7DB9E8", borderRadius: "0 8px 8px 0" }}
        >
          <SeverityPill severity="med" label={p0171.severityLabel} />
          <p className="font-mono text-[10px] text-gauge-gray tracking-wider">{p0171.code}</p>
          <p className="text-sm font-medium mt-0.5 mb-1 text-gauge-black tracking-tight">{p0171.title}</p>
          <p className="text-xs text-gauge-gray leading-relaxed">{p0171.plainEnglish}</p>
        </div>

        {/* Maintenance */}
        <p className="text-[10px] font-medium text-gauge-gray uppercase tracking-wider mt-5 mb-2.5">
          Upcoming maintenance
        </p>
        <MaintenanceRow title="Oil change" due="Due in 340 mi" progress={88} urgent />
        <MaintenanceRow title="Tire rotation" due="Due in 2,100 mi" progress={42} />
      </div>

      <BottomNav active="dashboard" items={STUDENT_NAV} />
    </PhoneFrame>
  );
}

function SeverityPill({ severity, label }: { severity: "high" | "med" | "low"; label: string }) {
  const styles = {
    high: "bg-gauge-black text-white",
    med: "bg-gauge-blueLight text-gauge-blueDark",
    low: "bg-gauge-grayLight text-gauge-gray",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full mb-2 ${styles[severity]}`}
      style={{ letterSpacing: "0.02em" }}
    >
      <span className="w-1 h-1 rounded-full bg-gauge-blue" />
      {label}
    </span>
  );
}

function MaintenanceRow({
  title, due, progress, urgent = false,
}: { title: string; due: string; progress: number; urgent?: boolean }) {
  return (
    <div className="py-3 border-b border-gauge-border/50 last:border-0">
      <div className="flex justify-between items-center mb-1">
        <p className="text-[13px] font-medium text-gauge-black">{title}</p>
        <span className={`text-[11px] ${urgent ? "text-gauge-black font-medium" : "text-gauge-gray"}`}>
          {due}
        </span>
      </div>
      <div className="h-1 bg-gauge-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${urgent ? "bg-gauge-black" : "bg-gauge-blue"}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
