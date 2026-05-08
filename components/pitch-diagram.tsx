import Link from "next/link";

type PitchPlayer = {
  label: string;
  x: number; // 0-100
  y: number; // 0-100
  side?: "home" | "away";
  premium?: boolean;
  size?: number; // px override
  slug?: string;
  href?: string;
};

type Props = {
  title?: string;
  players: PitchPlayer[];
  subtle?: boolean;
  nodeSize?: number; // px
  rotate?: "none" | "90";
};

export default function PitchDiagram({
  title,
  players,
  subtle = false,
  nodeSize = 40,
  rotate = "none"
}: Props) {
  const rotatedPlayers =
    rotate === "90"
      ? players.map((p) => ({
          ...p,
          x: p.y,
          y: 100 - p.x
        }))
      : players;

  return (
    <div className="space-y-2">
      {title && <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">{title}</p>}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-pitch pitch-grid pitch-outline aspect-video">
        <PitchLines subtle={subtle} />
        {rotatedPlayers.map((p) => (
          <PlayerNode key={p.label + p.x + p.y} player={p} nodeSize={nodeSize} />
        ))}
      </div>
    </div>
  );
}

function PitchLines({ subtle }: { subtle: boolean }) {
  const stroke = subtle ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.4)";
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <rect x="2" y="2" width="96" height="96" fill="none" stroke={stroke} strokeWidth="1.5" rx="2" />
      <line x1="50" y1="2" x2="50" y2="98" stroke={stroke} strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="none" stroke={stroke} strokeWidth="1" />
      <rect x="2" y="30" width="14" height="40" fill="none" stroke={stroke} strokeWidth="1" rx="1" />
      <rect x="84" y="30" width="14" height="40" fill="none" stroke={stroke} strokeWidth="1" rx="1" />
      <rect x="2" y="40" width="6" height="20" fill="none" stroke={stroke} strokeWidth="1" />
      <rect x="92" y="40" width="6" height="20" fill="none" stroke={stroke} strokeWidth="1" />
      <circle cx="12" cy="50" r="1.5" fill={stroke} />
      <circle cx="88" cy="50" r="1.5" fill={stroke} />
    </svg>
  );
}

export type { PitchPlayer };

function PlayerNode({ player, nodeSize }: { player: PitchPlayer; nodeSize: number }) {
  const targetHref = player.href ?? (player.slug ? `/articles/${player.slug}` : undefined);
  const base = (
    <span
      className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-xs font-semibold ${
        player.side === "away"
          ? "border-accent/70 bg-black/60 text-white shadow-glow"
          : "border-primary-light/70 bg-white/80 text-primary-dark"
      } ${player.premium ? "ring-2 ring-accent/60" : ""}`}
      style={{
        left: `${player.x}%`,
        top: `${player.y}%`,
        width: `${player.size ?? nodeSize}px`,
        height: `${player.size ?? nodeSize}px`
      }}
    >
      {player.label}
    </span>
  );

  if (targetHref) {
    return (
      <Link href={targetHref} aria-label={`Open article for ${player.label}`}>
        {base}
      </Link>
    );
  }

  return base;
}
