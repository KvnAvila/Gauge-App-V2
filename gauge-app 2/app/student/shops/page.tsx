"use client";

import Link from "next/link";
import { PhoneFrame, BottomNav } from "@/components/PhoneFrame";
import { MOCK_SHOPS } from "@/lib/shops";
import STUDENT_NAV from "../nav";

export default function StudentShops() {
  return (
    <PhoneFrame title="Nearby shops" subtitle="4 vetted partners · 3 mi radius">
      <div className="p-5 min-h-[480px] bg-white">
        {/* Map */}
        <div className="h-[150px] bg-gauge-black rounded-md mb-3.5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-subtle" />
          <div className="absolute top-[40%] left-0 right-0 h-0.5 bg-white/[0.08]" />
          <div className="absolute top-0 bottom-0 left-[55%] w-0.5 bg-white/[0.08]" />
          <div className="absolute top-[72%] left-0 right-0 h-0.5 bg-white/[0.08]" />

          <MapPin top="42%" left="46%" type="you" label="U" />
          <MapPin top="22%" left="30%" type="top" label="1" />
          <MapPin top="58%" left="68%" type="shop" label="2" />
          <MapPin top="76%" left="22%" type="shop" label="3" />
        </div>

        {/* Shop cards */}
        {MOCK_SHOPS.slice(0, 3).map((shop, i) => (
          <div
            key={shop.id}
            className={`flex gap-2.5 p-3 rounded-md mb-2 ${
              shop.isTopChoice
                ? "bg-gauge-blueBg border border-gauge-blue"
                : "bg-white border border-gauge-border"
            }`}
          >
            <div
              className={`w-9 h-9 rounded-md flex items-center justify-center font-medium text-[13px] flex-shrink-0 ${
                shop.isTopChoice ? "bg-gauge-black text-gauge-blue" : "bg-gauge-grayLight text-gauge-black"
              }`}
            >
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-gauge-black mb-0.5">{shop.name}</p>
              <p className="text-[11px] text-gauge-gray">
                {shop.distance} mi · {shop.rating}★ · ${shop.avgPrice} avg
              </p>
              <div className="mt-1.5 flex gap-1 flex-wrap">
                {shop.isTopChoice && (
                  <span className="text-[9px] bg-gauge-black text-gauge-blue px-1.5 py-0.5 rounded-md font-medium tracking-wide">
                    TOP CHOICE
                  </span>
                )}
                <span className="text-[9px] bg-gauge-blueLight text-gauge-blueDark px-1.5 py-0.5 rounded-md font-medium tracking-wide">
                  5% OFF
                </span>
              </div>
            </div>
          </div>
        ))}

        <Link
          href="/student"
          className="block text-center mt-3.5 text-[11px] py-2 px-2.5 rounded-md border border-gauge-border bg-white text-gauge-black font-medium hover:bg-gauge-grayLight"
        >
          Back to dashboard
        </Link>
      </div>

      <BottomNav active="shops" items={STUDENT_NAV} />
    </PhoneFrame>
  );
}

function MapPin({
  top, left, type, label,
}: { top: string; left: string; type: "you" | "top" | "shop"; label: string }) {
  const styles = {
    you: { bg: "#7DB9E8", color: "#0F1419", ring: "0 0 0 6px rgba(125, 185, 232, 0.25)" },
    top: { bg: "#7DB9E8", color: "#0F1419", ring: "none" },
    shop: { bg: "#FFFFFF", color: "#0F1419", ring: "none" },
  };
  const s = styles[type];
  return (
    <div
      className="absolute w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium"
      style={{
        top, left,
        backgroundColor: s.bg,
        color: s.color,
        border: "2px solid #FFFFFF",
        boxShadow: s.ring,
      }}
    >
      {label}
    </div>
  );
}
