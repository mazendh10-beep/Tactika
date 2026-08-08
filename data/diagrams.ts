import type { PitchPlayer } from "@/components/pitch-diagram";

export const positionsDiagram: PitchPlayer[] = [
  { label: "GK", x: 50, y: 93, side: "home", slug: "gk-role" },
  { label: "LB", x: 22, y: 78, side: "home", slug: "lb-role" },
  { label: "LCB", x: 38, y: 80, side: "home", slug: "lcb-role" },
  { label: "RCB", x: 62, y: 80, side: "home", slug: "rcb-role" },
  { label: "RB", x: 78, y: 78, side: "home", slug: "rb-role" },
  { label: "DM", x: 40, y: 68, side: "home", size: 32, slug: "dm-role" },
  { label: "CM", x: 60, y: 58, side: "home", slug: "cm-role" },
  { label: "AM", x: 50, y: 48, side: "home", premium: true, slug: "am-role" },
  { label: "LW", x: 24, y: 42, side: "home", premium: true, slug: "lw-role" },
  { label: "RW", x: 76, y: 42, side: "home", premium: true, slug: "rw-role" },
  { label: "ST", x: 50, y: 32, side: "home", premium: true, slug: "st-role" }
];

export const formationDiagrams: Record<string, PitchPlayer[]> = {
  "4-3-3": [
    { label: "GK", x: 50, y: 92 },
    { label: "LB", x: 20, y: 78 },
    { label: "LCB", x: 38, y: 80 },
    { label: "RCB", x: 62, y: 80 },
    { label: "RB", x: 80, y: 78 },
    { label: "LCM", x: 35, y: 62 },
    { label: "CM", x: 50, y: 60 },
    { label: "RCM", x: 65, y: 62 },
    { label: "LW", x: 28, y: 42 },
    { label: "ST", x: 50, y: 36 },
    { label: "RW", x: 72, y: 42 }
  ],
  "4-4-2": [
    { label: "GK", x: 50, y: 92 },
    { label: "LB", x: 20, y: 78 },
    { label: "LCB", x: 38, y: 80 },
    { label: "RCB", x: 62, y: 80 },
    { label: "RB", x: 80, y: 78 },
    { label: "LM", x: 26, y: 60 },
    { label: "LCM", x: 42, y: 64 },
    { label: "RCM", x: 58, y: 64 },
    { label: "RM", x: 74, y: 60 },
    { label: "ST", x: 44, y: 40 },
    { label: "ST", x: 56, y: 40 }
  ],
  "3-5-2": [
    { label: "GK", x: 50, y: 92 },
    { label: "LCB", x: 30, y: 80 },
    { label: "CB", x: 50, y: 82 },
    { label: "RCB", x: 70, y: 80 },
    { label: "LWB", x: 18, y: 64 },
    { label: "DM", x: 50, y: 66 },
    { label: "RWB", x: 82, y: 64 },
    { label: "LCM", x: 40, y: 56 },
    { label: "RCM", x: 60, y: 56 },
    { label: "SS", x: 46, y: 40 },
    { label: "ST", x: 56, y: 34 }
  ],
  "3-2-5": [
    { label: "GK", x: 50, y: 92 },
    { label: "LCB", x: 32, y: 82 },
    { label: "CB", x: 50, y: 84 },
    { label: "RCB", x: 68, y: 82 },
    { label: "DM", x: 44, y: 70 },
    { label: "DM", x: 56, y: 70 },
    { label: "L8", x: 32, y: 52 },
    { label: "AM", x: 48, y: 50 },
    { label: "R8", x: 64, y: 52 },
    { label: "LW", x: 22, y: 40 },
    { label: "RW", x: 78, y: 40 }
  ],
  "2-3-5": [
    { label: "GK", x: 50, y: 92 },
    { label: "LCB", x: 40, y: 82 },
    { label: "RCB", x: 60, y: 82 },
    { label: "LDM", x: 36, y: 70 },
    { label: "CDM", x: 50, y: 70 },
    { label: "RDM", x: 64, y: 70 },
    { label: "LW", x: 24, y: 46 },
    { label: "L10", x: 38, y: 46 },
    { label: "ST", x: 50, y: 42 },
    { label: "R10", x: 62, y: 46 },
    { label: "RW", x: 76, y: 46 }
  ],
  "4-2-3-1": [
    { label: "GK", x: 50, y: 92 },
    { label: "LB", x: 20, y: 78 },
    { label: "LCB", x: 38, y: 80 },
    { label: "RCB", x: 62, y: 80 },
    { label: "RB", x: 80, y: 78 },
    { label: "DM", x: 44, y: 68 },
    { label: "8", x: 56, y: 58 },
    { label: "LW", x: 26, y: 44 },
    { label: "AM", x: 50, y: 46 },
    { label: "RW", x: 74, y: 44 },
    { label: "ST", x: 50, y: 30 }
  ]
};
