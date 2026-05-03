/**
 * OBD-II Diagnostic Trouble Code (DTC) database.
 * Real codes, plain English translations, severity, cost estimates.
 *
 * This is Gauge's core IP — the translation layer that turns
 * "P0420" into something a college student actually understands.
 *
 * In production, this would be a much larger database (500+ codes)
 * stored server-side. This sample covers the most common codes for demo.
 */

export type Severity = "low" | "moderate" | "high" | "ok";

export interface DTC {
  code: string;
  title: string;
  plainEnglish: string;
  severity: Severity;
  severityLabel: string;
  costMin: number;
  costMax: number;
  category: "emissions" | "engine" | "transmission" | "sensors" | "ignition";
  urgency: string;
}

export const DTC_DATABASE: Record<string, DTC> = {
  P0420: {
    code: "P0420",
    title: "Catalytic converter running low",
    plainEnglish:
      "Your emissions system isn't cleaning exhaust as well as it should. Safe to drive short distances but get it checked within 1-2 weeks.",
    severity: "moderate",
    severityLabel: "Moderate · drive to shop soon",
    costMin: 150,
    costMax: 600,
    category: "emissions",
    urgency: "1-2 weeks",
  },
  P0171: {
    code: "P0171",
    title: "Engine running a little lean",
    plainEnglish:
      "Small air/fuel imbalance. Could be a dirty sensor or small vacuum leak. Not urgent but don't ignore.",
    severity: "low",
    severityLabel: "Low · monitor",
    costMin: 80,
    costMax: 300,
    category: "engine",
    urgency: "Within a month",
  },
  P0300: {
    code: "P0300",
    title: "Engine misfiring",
    plainEnglish:
      "One or more cylinders aren't firing correctly. You might feel the car shake at idle. Get this looked at this week.",
    severity: "high",
    severityLabel: "High · don't delay",
    costMin: 150,
    costMax: 800,
    category: "ignition",
    urgency: "This week",
  },
  P0128: {
    code: "P0128",
    title: "Engine not warming up right",
    plainEnglish:
      "Your thermostat is likely stuck open. The engine runs cooler than it should, which hurts fuel economy. Cheap fix.",
    severity: "low",
    severityLabel: "Low · monitor",
    costMin: 100,
    costMax: 250,
    category: "engine",
    urgency: "Within a month",
  },
  P0442: {
    code: "P0442",
    title: "Small gas cap or fuel system leak",
    plainEnglish:
      "Usually just a loose gas cap. Tighten it until it clicks 3 times. If the light stays on after a few drives, get it checked.",
    severity: "low",
    severityLabel: "Low · try this first",
    costMin: 0,
    costMax: 150,
    category: "emissions",
    urgency: "Try tightening gas cap",
  },
  P0455: {
    code: "P0455",
    title: "Large fuel system leak",
    plainEnglish:
      "Big gap in your fuel vapor system. Check your gas cap first. If that's not it, there's a hose or valve leak.",
    severity: "moderate",
    severityLabel: "Moderate · check soon",
    costMin: 50,
    costMax: 400,
    category: "emissions",
    urgency: "1-2 weeks",
  },
  P0101: {
    code: "P0101",
    title: "Airflow sensor acting up",
    plainEnglish:
      "Your mass air flow sensor is giving weird readings. Often fixed by cleaning it. Can cause rough idle and poor mpg.",
    severity: "moderate",
    severityLabel: "Moderate · check soon",
    costMin: 50,
    costMax: 350,
    category: "sensors",
    urgency: "1-2 weeks",
  },
  P0401: {
    code: "P0401",
    title: "EGR system flow issue",
    plainEnglish:
      "The valve that recirculates exhaust isn't flowing right. Often just carbon buildup. Affects emissions more than performance.",
    severity: "low",
    severityLabel: "Low · monitor",
    costMin: 100,
    costMax: 500,
    category: "emissions",
    urgency: "Within a month",
  },
};

export function getDTC(code: string): DTC | undefined {
  return DTC_DATABASE[code.toUpperCase()];
}

export function getAllDTCs(): DTC[] {
  return Object.values(DTC_DATABASE);
}
