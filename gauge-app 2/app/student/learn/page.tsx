"use client";

import Link from "next/link";
import { PhoneFrame, BottomNav } from "@/components/PhoneFrame";
import STUDENT_NAV from "../nav";

export default function StudentLearn() {
  return (
    <PhoneFrame title="DIY guides" subtitle="Learn what your car is saying">
      <div className="p-5 min-h-[480px] bg-white">
        <div
          className="aspect-video bg-gauge-black rounded-md flex items-center justify-center mb-3 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-subtle" />
          <div className="w-12 h-12 rounded-full bg-gauge-blue flex items-center justify-center relative z-10">
            <div
              className="w-0 h-0 ml-1"
              style={{
                borderLeft: "14px solid #0F1419",
                borderTop: "9px solid transparent",
                borderBottom: "9px solid transparent",
              }}
            />
          </div>
        </div>

        <p className="text-[15px] font-medium text-gauge-black tracking-tight mb-1">Understanding P0420</p>
        <p className="text-xs text-gauge-gray mb-3.5">2 min · Beginner</p>
        <p className="text-xs text-gauge-black leading-relaxed mb-3.5">
          Walks you through what the catalytic converter does, what P0420 actually means,
          and whether you need to fix it now or can wait.
        </p>

        <p className="text-[10px] font-medium text-gauge-gray uppercase tracking-wider mb-2.5">
          What you&apos;ll learn
        </p>
        <ul className="text-xs text-gauge-gray space-y-1.5 mb-4 pl-4">
          <li>• What the code means in plain English</li>
          <li>• How urgent it actually is</li>
          <li>• Questions to ask the mechanic</li>
          <li>• Typical price range to expect</li>
        </ul>

        <div className="flex gap-2">
          <Link
            href="/student"
            className="flex-1 text-[11px] py-2 px-2.5 rounded-md border border-gauge-border bg-white text-gauge-black font-medium text-center hover:bg-gauge-grayLight"
          >
            Back
          </Link>
          <Link
            href="/student/shops"
            className="flex-1 text-[11px] py-2 px-2.5 rounded-md bg-gauge-blue text-gauge-black font-medium text-center hover:bg-[#5FA4DC]"
          >
            Find a shop
          </Link>
        </div>

        <p className="text-[10px] font-medium text-gauge-gray uppercase tracking-wider mt-6 mb-2.5">
          More guides
        </p>
        <GuideRow title="How to check your tire pressure" duration="90 sec" />
        <GuideRow title="Understanding your oil life" duration="2 min" />
        <GuideRow title="What to do if you're stranded" duration="3 min" />
      </div>

      <BottomNav active="learn" items={STUDENT_NAV} />
    </PhoneFrame>
  );
}

function GuideRow({ title, duration }: { title: string; duration: string }) {
  return (
    <div className="py-2.5 border-b border-gauge-border/50 last:border-0 flex justify-between items-center">
      <p className="text-[13px] text-gauge-black">{title}</p>
      <span className="text-[11px] text-gauge-gray">{duration}</span>
    </div>
  );
}
