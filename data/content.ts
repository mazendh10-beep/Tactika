type Access = "free" | "premium";

type Formation = {
  name: string;
  access: Access;
  summary: string;
};

type Position = {
  role: string;
  label: string;
  zone: string;
  access: Access;
  slug: string;
};

type Lesson = {
  title: string;
  category: "formations" | "positions" | "history";
  type: Access;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  content: string;
};

export const formations: Formation[] = [
  { name: "4-3-3", access: "free", summary: "High press, width with wide forwards" },
  { name: "4-4-2", access: "free", summary: "Compact mid/low block, twin strikers" },
  { name: "3-5-2", access: "premium", summary: "Central overloads + wingback width" },
  { name: "3-2-5", access: "premium", summary: "Positional play, rest-defense spine" },
  { name: "2-3-5", access: "premium", summary: "WM shape to overload and isolate" }
];

export const positions: Position[] = [
  { role: "GK", label: "Goalkeeper", zone: "Sweeper-keeper, claim crosses, start build", access: "free", slug: "gk-role" },
  { role: "LB", label: "Left Back", zone: "Wide defender; overlaps/underlaps", access: "free", slug: "lb-role" },
  { role: "LCB", label: "Left Center Back", zone: "Cover + progressive diagonal passes", access: "free", slug: "lcb-role" },
  { role: "RCB", label: "Right Center Back", zone: "Cover + switches to RB/Winger", access: "free", slug: "rcb-role" },
  { role: "RB", label: "Right Back", zone: "Wide defender; overlaps/underlaps", access: "free", slug: "rb-role" },
  { role: "DM", label: "Defensive Midfielder", zone: "Screen, tempo, rest-defense anchor", access: "free", slug: "dm-role" },
  { role: "CM", label: "Central Midfielder", zone: "Connect thirds, press resistance", access: "free", slug: "cm-role" },
  { role: "AM", label: "Attacking Midfielder", zone: "Half-space creator, late box runs", access: "free", slug: "am-role" },
  { role: "LW", label: "Left Winger", zone: "Pin fullback, 1v1s, back-post runs", access: "premium", slug: "lw-role" },
  { role: "RW", label: "Right Winger", zone: "Width or inversion; pressing trigger", access: "premium", slug: "rw-role" },
  { role: "ST", label: "Striker", zone: "Channel runs, hold-up, finishing", access: "premium", slug: "st-role" },
  { role: "WB", label: "Wing Back", zone: "Two-way wide engine in back three", access: "free", slug: "wb-role" }
];

export const lessons: Lesson[] = [
  {
    title: "Pressing Triggers 101",
    category: "formations",
    type: "free",
    difficulty: "Beginner",
    content: "How to set pressing traps in a 4-4-2 mid-block."
  },
  {
    title: "Rest Defense in a 3-2-5",
    category: "formations",
    type: "premium",
    difficulty: "Advanced",
    content: "Cover shadow positioning to kill counter-attacks."
  },
  {
    title: "Half-space Occupation",
    category: "positions",
    type: "premium",
    difficulty: "Intermediate",
    content: "AM vs IW vs inverted FB receiving angles."
  },
  {
    title: "Creating overload-to-isolate patterns",
    category: "formations",
    type: "premium",
    difficulty: "Advanced",
    content: "Use 2-3-5 to fix the last line then isolate your winger."
  },
  {
    title: "Counter-pressing after shots",
    category: "history",
    type: "free",
    difficulty: "Beginner",
    content: "Why shooting from the edge is safer when rest-defense is set."
  }
];
