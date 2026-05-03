"use client";

import { useState } from "react";
import { PhoneFrame, BottomNav } from "@/components/PhoneFrame";
import STUDENT_NAV from "../nav";

export default function StudentSettings() {
  const [shareLocation, setShareLocation] = useState(true);
  const [shareStats, setShareStats] = useState(false);
  const [notifyOnFault, setNotifyOnFault] = useState(true);

  return (
    <PhoneFrame title="Privacy & Family Loop" subtitle="You control what parents see">
      <div className="p-5 min-h-[480px] bg-white">
        <p className="text-[10px] font-medium text-gauge-gray uppercase tracking-wider mb-2.5">
          Family loop privacy
        </p>

        <SettingRow
          title="Share live location"
          sub="Only when stranded or severe fault"
          value={shareLocation}
          onChange={setShareLocation}
        />
        <SettingRow
          title="Share driving stats"
          sub="Speed, hard braking events"
          value={shareStats}
          onChange={setShareStats}
        />
        <SettingRow
          title="Notify parents on fault"
          sub="Same alerts you receive"
          value={notifyOnFault}
          onChange={setNotifyOnFault}
        />

        <p className="text-[10px] font-medium text-gauge-gray uppercase tracking-wider mt-6 mb-2.5">
          Account
        </p>
        <div className="bg-white border border-gauge-border rounded-md p-3 mb-2">
          <p className="text-[13px] font-medium text-gauge-black mb-0.5">Kevin Avila</p>
          <p className="text-[11px] text-gauge-gray">kevin.avila@my.utsa.edu</p>
        </div>
        <div className="bg-white border border-gauge-border rounded-md p-3 mb-2">
          <p className="text-[13px] font-medium text-gauge-black mb-0.5">Subscription</p>
          <p className="text-[11px] text-gauge-gray">Gauge Premium · $9.99/mo · Renews Dec 3</p>
        </div>
        <div className="bg-white border border-gauge-border rounded-md p-3">
          <p className="text-[13px] font-medium text-gauge-black mb-0.5">Connected vehicle</p>
          <p className="text-[11px] text-gauge-gray">2019 Honda Civic · VIN: ...X7QK82</p>
        </div>
      </div>

      <BottomNav active="settings" items={STUDENT_NAV} />
    </PhoneFrame>
  );
}

function SettingRow({
  title, sub, value, onChange,
}: { title: string; sub: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white border border-gauge-border rounded-md mb-2">
      <div className="flex-1 pr-3">
        <p className="text-[13px] font-medium text-gauge-black">{title}</p>
        <p className="text-[11px] text-gauge-gray mt-0.5">{sub}</p>
      </div>
      <button
        onClick={() => onChange(!value)}
        className="w-[38px] h-[22px] rounded-full relative transition-colors flex-shrink-0"
        style={{ backgroundColor: value ? "#7DB9E8" : "#E5E7EB" }}
        aria-label={`Toggle ${title}`}
      >
        <span
          className="absolute top-0.5 w-[18px] h-[18px] bg-white rounded-full transition-all"
          style={{ left: value ? "18px" : "2px" }}
        />
      </button>
    </div>
  );
}
