"use client";

import Link from "next/link";
import { GaugeWordmark } from "@/components/Logo";

export default function MechanicPortal() {
  return (
    <main className="min-h-screen bg-gauge-grayLight">
      {/* Top nav */}
      <header className="bg-gauge-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <GaugeWordmark size={24} />
            <span className="text-xs text-white/40 px-2 py-1 bg-white/10 rounded tracking-wider uppercase">
              Partner portal
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-white/60 hover:text-white">
              Main site
            </Link>
            <div className="w-8 h-8 rounded-full bg-gauge-blue flex items-center justify-center text-gauge-black font-medium text-sm">
              AA
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-xs text-gauge-gray uppercase tracking-wider mb-1">
            Shop dashboard
          </p>
          <h1 className="text-3xl font-medium text-gauge-black tracking-tight">
            Alamo Auto Care
          </h1>
          <p className="text-sm text-gauge-gray mt-1">
            2847 UTSA Blvd, San Antonio, TX · Member since Oct 2025
          </p>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <KPI label="Leads this month" value="47" delta="+12" />
          <KPI label="Bookings" value="31" delta="+8" />
          <KPI label="Conversion rate" value="66%" delta="+4%" />
          <KPI label="Revenue attributed" value="$4,280" delta="+$960" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="md:col-span-2 space-y-6">
            {/* Recent leads */}
            <Card title="Recent leads" subtitle="Students routed to your shop in the last 7 days">
              <LeadRow name="Kevin A." vehicle="2019 Honda Civic" issue="P0420 · Catalytic converter" time="2h ago" status="new" />
              <LeadRow name="Sarah M." vehicle="2017 Toyota Corolla" issue="Oil change due" time="5h ago" status="new" />
              <LeadRow name="Jordan T." vehicle="2020 Ford Focus" issue="P0171 · Lean condition" time="1d ago" status="contacted" />
              <LeadRow name="Ariana L." vehicle="2018 Nissan Sentra" issue="Brake inspection" time="2d ago" status="booked" />
              <LeadRow name="Marcus D." vehicle="2016 Hyundai Elantra" issue="P0300 · Misfire" time="3d ago" status="completed" />
            </Card>

            {/* Listing preview */}
            <Card title="Your student-facing listing" subtitle="How you appear in the Gauge app">
              <div className="border border-gauge-blue bg-gauge-blueBg rounded-md p-4 max-w-md">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-md bg-gauge-black text-gauge-blue flex items-center justify-center font-medium">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gauge-black">Alamo Auto Care</p>
                    <p className="text-xs text-gauge-gray">0.8 mi · 4.8★ · $120 avg</p>
                    <div className="mt-2 flex gap-1">
                      <span className="text-[9px] bg-gauge-black text-gauge-blue px-1.5 py-0.5 rounded font-medium tracking-wide">
                        TOP CHOICE
                      </span>
                      <span className="text-[9px] bg-gauge-blueLight text-gauge-blueDark px-1.5 py-0.5 rounded font-medium tracking-wide">
                        5% OFF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-4 text-xs font-medium px-4 py-2 rounded-md border border-gauge-border bg-white text-gauge-black hover:bg-gauge-grayLight">
                Edit listing
              </button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card title="Plan" subtitle="Partner tier">
              <p className="text-2xl font-medium text-gauge-black tracking-tight">$199<span className="text-sm text-gauge-gray font-normal">/mo</span></p>
              <p className="text-xs text-gauge-gray mt-1 mb-4">Top Choice placement · Priority routing · Analytics</p>
              <ul className="text-xs text-gauge-gray space-y-2 mb-4">
                <li className="flex gap-2"><span className="text-gauge-blueDark">→</span> Featured map placement within 3 mi of UTSA</li>
                <li className="flex gap-2"><span className="text-gauge-blueDark">→</span> Auto-routed for P04xx emission codes</li>
                <li className="flex gap-2"><span className="text-gauge-blueDark">→</span> Monthly performance reports</li>
                <li className="flex gap-2"><span className="text-gauge-blueDark">→</span> 5% student discount funded by Gauge</li>
              </ul>
              <button className="w-full text-xs font-medium py-2 px-3 rounded-md border border-gauge-border bg-white text-gauge-black hover:bg-gauge-grayLight">
                Manage billing
              </button>
            </Card>

            <Card title="Unit economics" subtitle="This month">
              <Stat label="Cost per lead" value="$4.23" />
              <Stat label="Avg job value" value="$138" />
              <Stat label="ROI on Gauge" value="21.5x" highlight />
            </Card>

            <div className="bg-gauge-black rounded-xl p-5 text-white">
              <p className="text-xs text-gauge-blue uppercase tracking-wider mb-2">Heads up</p>
              <p className="text-sm mb-3 leading-relaxed">
                UTSA fall semester starts in 3 weeks. Lead volume typically jumps 40% in early September.
              </p>
              <button className="text-xs font-medium px-3 py-1.5 rounded bg-gauge-blue text-gauge-black">
                Prepare capacity
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function KPI({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="bg-white border border-gauge-border rounded-lg p-4">
      <p className="text-xs text-gauge-gray uppercase tracking-wider mb-1">{label}</p>
      <p className="text-2xl font-medium text-gauge-black tracking-tight">{value}</p>
      <p className="text-xs text-gauge-blueDark mt-1 font-medium">{delta} vs last month</p>
    </div>
  );
}

function Card({
  title, subtitle, children,
}: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gauge-border rounded-lg p-5">
      <p className="text-sm font-medium text-gauge-black">{title}</p>
      {subtitle && <p className="text-xs text-gauge-gray mt-0.5 mb-4">{subtitle}</p>}
      {children}
    </div>
  );
}

function LeadRow({
  name, vehicle, issue, time, status,
}: {
  name: string; vehicle: string; issue: string; time: string;
  status: "new" | "contacted" | "booked" | "completed";
}) {
  const statusStyle = {
    new: "bg-gauge-blue text-gauge-black",
    contacted: "bg-gauge-blueLight text-gauge-blueDark",
    booked: "bg-gauge-black text-white",
    completed: "bg-gauge-grayLight text-gauge-gray",
  }[status];

  return (
    <div className="flex items-center gap-4 py-3 border-b border-gauge-border/50 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gauge-black">{name}</p>
        <p className="text-xs text-gauge-gray">{vehicle} · {issue}</p>
      </div>
      <span className="text-xs text-gauge-gray">{time}</span>
      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase tracking-wide ${statusStyle}`}>
        {status}
      </span>
    </div>
  );
}

function Stat({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-baseline py-2 border-b border-gauge-border/50 last:border-0">
      <span className="text-xs text-gauge-gray">{label}</span>
      <span className={`text-sm font-medium ${highlight ? "text-gauge-blueDark" : "text-gauge-black"}`}>
        {value}
      </span>
    </div>
  );
}
