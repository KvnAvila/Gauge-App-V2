import React from "react";

interface LogoProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Gauge G mark — medium cutout, architectural, sharp 90-degree corners.
 * Single source of truth for the logo. Use this everywhere.
 */
export function GaugeLogo({ size = 28, color = "#7DB9E8", className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gauge logo"
    >
      <path
        d="M 10 10 H 90 V 32 H 32 V 68 H 68 V 58 H 50 V 42 H 90 V 90 H 10 Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Gauge logo inside a rounded black container — use for headers, app icons.
 */
export function GaugeLogoContainer({ size = 28 }: { size?: number }) {
  const inner = Math.round(size * 0.64);
  const radius = Math.round(size * 0.25);
  return (
    <div
      className="flex items-center justify-center bg-gauge-black"
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <GaugeLogo size={inner} color="#7DB9E8" />
    </div>
  );
}

/**
 * Horizontal lockup — G mark + GAUGE wordmark.
 */
export function GaugeWordmark({
  size = 28,
  color = "#FFFFFF",
  markColor = "#7DB9E8",
}: {
  size?: number;
  color?: string;
  markColor?: string;
}) {
  const textSize = Math.round(size * 0.55);
  return (
    <div className="inline-flex items-center gap-[10px]">
      <GaugeLogo size={size} color={markColor} />
      <span
        className="font-medium"
        style={{
          fontSize: textSize,
          letterSpacing: "0.14em",
          color,
        }}
      >
        GAUGE
      </span>
    </div>
  );
}
