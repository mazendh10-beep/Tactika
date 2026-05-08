type Props = { access: "free" | "premium" };

export default function PaywallBadge({ access }: Props) {
  const styles =
    access === "premium"
      ? "bg-accent/10 text-accent border-accent/40"
      : "bg-primary-light/10 text-primary-light border-primary-light/40";

  return (
    <span className={`text-xs px-3 py-1 rounded-full border ${styles}`}>
      {access === "premium" ? "Premium" : "Free"}
    </span>
  );
}
