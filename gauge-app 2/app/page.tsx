"use client";

import Link from "next/link";
import { useState } from "react";
import { GaugeLogo, GaugeWordmark } from "@/components/Logo";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to real backend (Supabase, Resend, etc.)
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-gauge-black text-white">
      {/* Nav */}
      <nav className="relative max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <GaugeWordmark size={28} />
        <div className="hidden md:flex gap-6 text-sm text-white/60">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#parents" className="hover:text-white">For parents</a>
        </div>
        <Link
          href="/student"
          className="bg-gauge-blue text-gauge-black text-xs font-medium px-4 py-2 rounded-md hover:bg-[#5FA4DC] transition"
        >
          Try the demo →
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs text-gauge-blue bg-gauge-blue/10 border border-gauge-blue/30 px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-gauge-blue" />
              Early access · UTSA campus
            </span>
            <h1 className="text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight mb-5">
              Your car just said something.
              <br />
              <span className="text-gauge-blue">We&apos;ll translate.</span>
            </h1>
            <p className="text-base md:text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
              Gauge plugs into your car and tells you exactly what&apos;s wrong in plain English.
              No mechanic markups. No mystery codes. And your parents stay in the loop
              without tracking your every move.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-10 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.name@my.utsa.edu"
                  required
                  className="flex-1 px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gauge-blue"
                />
                <button
                  type="submit"
                  className="bg-gauge-blue text-gauge-black text-sm font-medium px-5 py-3 rounded-md hover:bg-[#5FA4DC] transition whitespace-nowrap"
                >
                  Claim your spot →
                </button>
              </form>
            ) : (
              <div className="bg-gauge-blue/10 border border-gauge-blue/30 px-4 py-3 rounded-md mb-10 max-w-md">
                <p className="text-sm text-gauge-blue">
                  <span className="font-medium">You&apos;re in.</span> We&apos;ll email you when the UTSA beta opens.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-8 border-t border-white/10 pt-6">
              <Stat num="$69.99" label="One-time device" />
              <Stat num="$9.99/mo" label="Premium + 5% off repairs" />
              <Stat num="3 mi" label="Shop network from UTSA" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-xs uppercase tracking-wider text-gauge-blue mb-3">How it works</h2>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 max-w-2xl">
            Plug it in. Forget about it. Until something goes wrong.
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Step num="01" title="Plug the dongle into your OBD-II port">
              It&apos;s under your steering wheel. Takes 10 seconds. Every car made after 1996 has one.
            </Step>
            <Step num="02" title="The app reads your car's computer 24/7">
              When something goes wrong, you get a notification in plain English — not a cryptic code.
            </Step>
            <Step num="03" title="Get to a vetted shop with 5% off">
              We route you to mechanics we&apos;ve verified near campus. No predatory pricing.
            </Step>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-xs uppercase tracking-wider text-gauge-blue mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 max-w-2xl">
            Pays for itself the first time you need a repair.
          </h3>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <PricingCard
              name="Device"
              price="$69.99"
              sub="One-time"
              features={[
                "Bluetooth OBD-II dongle",
                "Plain English diagnostics",
                "Basic maintenance reminders",
                "No subscription required",
              ]}
            />
            <PricingCard
              name="Gauge Premium"
              price="$9.99"
              sub="per month · or $99.99/year"
              highlight
              features={[
                "Everything in device",
                "Family Loop for parents",
                "5% off at partner shops",
                "DIY video SOPs",
                "Live GPS on severe faults",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Demo CTAs */}
      <section id="parents" className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-xs uppercase tracking-wider text-gauge-blue mb-3">See it in action</h2>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 max-w-2xl">
            Try the full app demo right now.
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <DemoCard href="/student" title="Student app" sub="Dashboard, shops, SOPs, privacy" />
            <DemoCard href="/parent" title="Parent app" sub="Family Loop dashboard" />
            <DemoCard href="/mechanic" title="Mechanic portal" sub="B2B partner dashboard" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GaugeLogo size={20} />
            <span className="text-sm text-white/50">
              © 2026 Gauge. Built for UTSA. Demo product.
            </span>
          </div>
          <div className="text-xs text-white/40">
            Kevin Avila · Malachi Salas · Enterprise Commercial Development
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-medium tracking-tight">{num}</p>
      <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-6">
      <p className="text-xs text-gauge-blue font-medium mb-3">{num}</p>
      <h4 className="text-lg font-medium mb-2 tracking-tight">{title}</h4>
      <p className="text-sm text-white/60 leading-relaxed">{children}</p>
    </div>
  );
}

function PricingCard({
  name, price, sub, features, highlight = false,
}: { name: string; price: string; sub: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-6 ${highlight ? "bg-gauge-blue/10 border border-gauge-blue/40" : "bg-white/[0.03] border border-white/10"}`}>
      <p className={`text-xs uppercase tracking-wider mb-2 ${highlight ? "text-gauge-blue" : "text-white/50"}`}>{name}</p>
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-4xl font-medium tracking-tight">{price}</span>
        <span className="text-sm text-white/50">{sub}</span>
      </div>
      <ul className="space-y-2">
        {features.map((f) => (
          <li key={f} className="text-sm text-white/70 flex gap-2">
            <span className={highlight ? "text-gauge-blue" : "text-white/40"}>→</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DemoCard({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <Link
      href={href}
      className="group block border border-white/10 rounded-xl p-6 hover:border-gauge-blue/50 hover:bg-white/[0.02] transition"
    >
      <h4 className="text-lg font-medium mb-1 tracking-tight">{title}</h4>
      <p className="text-sm text-white/50 mb-4">{sub}</p>
      <span className="text-sm text-gauge-blue group-hover:underline">Open →</span>
    </Link>
  );
}
