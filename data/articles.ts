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
      "Press from the 4-3-3 starts when the ball hits the CB's weak foot on a back pass—the near winger curves the run to cut the return lane while the striker screens the pivot. The six sits on the half-turn to the ball-side, and the far eight steps to the touchline only after the pass is trapped wide. Fullbacks jump once the winger shows inside, springing a 2v1 trap; the trade-off is space behind if the six doesn't hold the central lane."
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
      "Sacchi's 4-4-2 counter-pressed on the first backward pass to a CB—both strikers pinched the center backs while the wide mids closed the fullback's first touch. Klopp's gegenpress triggers on a heavy touch or loose second ball within five seconds of loss, with the 4-3-3 front three funneling play to one side. The trade-off is identical: compact lines recover the ball fast, but a single missed tackle leaves the high line exposed to a direct run in behind."
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
      "On a goal kick, the GK splits the back line at a 45° angle to create a 3v2—one CB drops short, the other holds width, and the six shows between them. Sweeper-keeper duties trigger when a through ball beats the line by more than 8 yards; the GK must arrive before the striker, not level. Cross claims come on inswingers to the near post at 6–8 yards—if the ball stays flat or wide, stay on the line and let the CB attack it."
  },
  {
    slug: "lb-role",
    title: "Left Back: width engine",
    type: "free",
    category: "positions",
    summary: "Wide defender who times overlaps and controls the channel.",
    content:
      "The LB overlaps when the winger receives on the touchline with a closed body shape—timing the run to arrive as the winger drives inside, not before. Underlap instead when the winger stays wide and the half-space is open; the LB cuts at a 30° angle toward the penalty spot. Defensively, delay 1v1s by showing the attacker outside and jockeying at arm's length; only commit when the winger has dropped to cover the channel."
  },
  {
    slug: "lcb-role",
    title: "Left Center Back: progressive anchor",
    type: "free",
    category: "positions",
    summary: "Steps out to break lines and covers depth behind LB rotations.",
    content:
      "The LCB steps into midfield when the six is marked and the pivot lane is blocked—receive on the back foot at a 45° angle to the left half-space, then play a diagonal into the winger's feet or the overlapping LB. Defensively, track channel runs when the LB presses high; hold a flat line with the RCB but stay half a step deeper if the opponent's striker drifts left. Progressive carries beat a low block only when the first pass after the carry splits two lines."
  },
  {
    slug: "rcb-role",
    title: "Right Center Back: switch master",
    type: "free",
    category: "positions",
    summary: "Carries to provoke, then switches to the far side.",
    content:
      "The RCB carries to provoke a press trigger—two or three steps toward the winger, then hit a flat switch to the far fullback on the outside shoulder. The switch only works if the pivot has shifted ball-side; otherwise the half-space is exposed. On transitions, delay by showing the attacker wide at a 45° angle and funneling toward touch, buying 2–3 seconds for the six to recover central."
  },
  {
    slug: "rb-role",
    title: "Right Back: balance and overlap",
    type: "free",
    category: "positions",
    summary: "Chooses overlap vs invert based on winger profile and press cues.",
    content:
      "Against a low block the RB inverts into the half-space when the winger pins the fullback wide—receive between the lines at a 45° angle and play the third-man run. Against a high press, stay wide on the outside shoulder; the trigger to press the opponent LW is a heavy first touch backward. Overlap only when the winger cuts inside on a closed body; underlap when the winger stays touchline and the channel is open behind."
  },
  {
    slug: "dm-role",
    title: "Defensive Midfielder: rest-defense anchor",
    type: "free",
    category: "positions",
    summary: "Screens central lanes, sets tempo, and plugs counters.",
    content:
      "The DM sits on the ball-striker axis at roughly 12 yards, cutting the direct pass through the center while keeping both in peripheral view. On the ball, offer a back-foot option at a 45° angle to the nearest CB—one-touch to the eight or a clipped switch if the press shifts. In rest-defense, hold the central column when fullbacks push; the trade-off is leaving the pivot unmarked if you step to the ball-side too early."
  },
  {
    slug: "cm-role",
    title: "Central Midfielder: connector",
    type: "free",
    category: "positions",
    summary: "Links thirds, resists press, and balances width vs depth.",
    content:
      "The CM receives on the half-turn with the back foot facing the sideline—open body to see the fullback, the six, and the forward line in one scan. Drop to form a double pivot when the opponent's #10 sits between the lines; step high to press when the trigger is a backward pass to a CB. Third-man runs arrive from the blind side of the marker, timed off the winger's first touch, not before."
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
      "The wing back arrives high for cut-backs when the winger pins the fullback and drives to the byline—aim for the six-yard box at a 15° angle from the corner. Underlap when the winger stays wide and the half-space opens; the WB cuts inside at the top of the box, not at the edge of the area. On turnovers, the recovery sprint is to the near-post channel first—cover shadow for the CB, then press the ball if numbers allow."
  }
];
