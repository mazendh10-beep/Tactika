export type Article = {
  slug: string;
  title: string;
  type: "free" | "premium";
  summary: string;
  category: "formations" | "positions" | "history";
  content: string;
};

export const articles: Article[] = [
  {
    slug: "why-4-3-3-dominates-pressing",
    title: "Why 4-3-3 dominates pressing eras",
    type: "free",
    category: "formations",
    summary: "Fullbacks form the trap, six presses cover shadow, eights jump when the ball goes wide.",
    content:
      "The 4-3-3 is built for modern pressing because the front three can lock a back four while the six screens the pivot lane. Eights press out to wide build-up, forcing play into the sideline. Fullbacks step high to spring traps, and center backs hold a high line for short recoveries."
  },
  {
    slug: "rebirth-of-the-wm",
    title: "The rebirth of the WM (2-3-5)",
    type: "premium",
    category: "formations",
    summary: "From Arsenal 1930s to Guardiola: five lanes up front, three in rest-defense.",
    content:
      "The WM reappears through positional play: two center backs plus a 3 across midfield give rest-defense stability while five occupy the last line. Interior tens rotate with wide players to pin fullbacks, while the double pivot balances counter-pressing distances."
  },
  {
    slug: "false-9-vs-traditional-9",
    title: "False 9 vs Traditional 9",
    type: "premium",
    category: "positions",
    summary: "How dropping between lines drags CBs and opens half-spaces for wingers.",
    content:
      "A false 9 vacates the last line, pulling a center back out and creating interior space for wide forwards. The traditional 9 stays higher to pin and finish crosses. Choose based on whether you want midfield overloads or constant depth and penalty-box presence."
  },
  {
    slug: "history-of-counter-pressing",
    title: "History of counter-pressing",
    type: "free",
    category: "history",
    summary: "From Sacchi's 4-4-2 to Klopp's gegenpress, winning the ball in 5 seconds.",
    content:
      "Sacchi compressed space with a 4-4-2 block that hunted short immediately after loss. Klopp heightened the risk: trigger heavy counter-pressing from a 4-3-3, accepting space behind but betting on timing and numbers around the ball. Both hinge on compact lines and forward body orientation."
  },
  {
    slug: "role-glossary-modern-winger",
    title: "Role glossary: modern winger",
    type: "premium",
    category: "positions",
    summary: "Touchline vs inverted, carry vs cut-back profiles, and defensive assignments.",
    content:
      "Touchline wingers stretch and cross; inverted wingers drive inside for shots or cut-backs. Elite profiles carry under pressure, attack the far post, and press fullbacks on first touch. The choice shapes your fullback usage: overlap for inverted wingers, underlap for touchline threats."
  },

  // Position-specific articles
  {
    slug: "gk-role",
    title: "Goalkeeper: the first playmaker",
    type: "free",
    category: "positions",
    summary: "Sweeper-keeper angles, claiming crosses, and starting build-up cleanly.",
    content:
      "Modern GKs defend depth by sweeping behind a high line and narrow passing lanes with body shape. On the ball they create a 3v2 in first build-up, splitting center backs and playing firm passes to the six. Cross claims and starting attacks with throws add hidden xT."
  },
  {
    slug: "lb-role",
    title: "Left Back: width engine",
    type: "free",
    category: "positions",
    summary: "Wide defender who times overlaps and controls the channel.",
    content:
      "The LB provides width in early build but must balance underlaps when the winger stays wide. Defensively they screen the half-space and delay 1v1s toward touch. When in a back three in possession, they form the wide CB to secure rest-defense."
  },
  {
    slug: "lcb-role",
    title: "Left Center Back: progressive anchor",
    type: "free",
    category: "positions",
    summary: "Steps out to break lines and covers depth behind LB rotations.",
    content:
      "LCB angles progressive diagonals into the left half-space and steps into midfield to create a plus-one when the six is marked. Defensively they track channel runs when the fullback presses, keeping the line compact while covering the keeper."
  },
  {
    slug: "rcb-role",
    title: "Right Center Back: switch master",
    type: "free",
    category: "positions",
    summary: "Carries to provoke, then switches to the far side.",
    content:
      "The RCB invites pressure with carries, then hits flat switches to the opposite fullback or winger. Communication with the pivot is key to avoid exposing the half-space. On transitions they delay and funnel wide to buy time for midfield recovery."
  },
  {
    slug: "rb-role",
    title: "Right Back: balance and overlap",
    type: "free",
    category: "positions",
    summary: "Chooses overlap vs invert based on winger profile and press cues.",
    content:
      "RBs support circulation by stepping inside against low blocks, creating central overloads. Against high presses they stay wider to receive on the outside shoulder. Defensive tasks include pressing trigger on opponent LW first touch and covering far-post crosses."
  },
  {
    slug: "dm-role",
    title: "Defensive Midfielder: rest-defense anchor",
    type: "free",
    category: "positions",
    summary: "Screens central lanes, sets tempo, and plugs counters.",
    content:
      "The DM positions to see both ball and striker, cutting the direct pass. On the ball, they offer constant support triangles and tempo control with one- and two-touch play. In rest-defense they hold the central column, preventing split passes and delaying counters."
  },
  {
    slug: "cm-role",
    title: "Central Midfielder: connector",
    type: "free",
    category: "positions",
    summary: "Links thirds, resists press, and balances width vs depth.",
    content:
      "CMs receive on the half-turn, connect fullbacks and forwards, and time third-man runs. They must sense when to drop to form a double pivot and when to step high to press. Body orientation opens multiple lanes to escape pressure."
  },
  {
    slug: "am-role",
    title: "Attacking Midfielder: half-space creator",
    type: "premium",
    category: "positions",
    summary: "Finds pockets, releases runners, and arrives late in the box.",
    content:
      "AMs operate between lines, forcing defenders to step or drop. They scan before receiving, play one-touch wall passes, or drive diagonally to slip runners. Late box arrivals are critical to attack the cut-back zone, while pressing they close pivots and screen passes into the six."
  },
  {
    slug: "lw-role",
    title: "Left Winger: touchline to byline",
    type: "premium",
    category: "positions",
    summary: "Pins fullbacks, wins 1v1s, and attacks the far post.",
    content:
      "LWs stretch the line, forcing back-fours to widen. They drive to the byline for cut-backs or invert to shoot when the fullback is pinned. Off-ball, they press on backward passes and sprint to the weak-side post on crosses."
  },
  {
    slug: "rw-role",
    title: "Right Winger: width or inversion",
    type: "premium",
    category: "positions",
    summary: "Decides width vs inversion to open central lanes.",
    content:
      "RWs judge whether to hug the line to isolate vs drop inside to overload. They coordinate with the RB: if the RB overlaps, the RW pins the CB; if the RB inverts, the RW stays wide. Defensive role is pressing trigger on CB-to-LB passes."
  },
  {
    slug: "st-role",
    title: "Striker: depth and finishing",
    type: "premium",
    category: "positions",
    summary: "Pins center backs, runs channels, and finishes high-xG chances.",
    content:
      "The striker provides constant depth, timing runs between CBs and attacking the near post on low crosses. Hold-up play connects midfield, while movement across the line creates mismatches. Pressing starts with angling runs to show the ball outside."
  },
  {
    slug: "wb-role",
    title: "Wing Back: two-way engine",
    type: "free",
    category: "positions",
    summary: "Acts as wide outlet in possession and auxiliary fullback in defense.",
    content:
      "Wing backs give width in a back three, arriving high for cut-backs while ensuring recovery sprints on turnovers. They choose underlaps when the winger pins the fullback, and must coordinate with the near-side CB to lock the channel when pressing."
  }
];
