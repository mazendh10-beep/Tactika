export const metadata = { title: "Checkout cancelled | Tactika" };

export default function PremiumCancel() {
  return (
    <div className="mx-auto max-w-xl px-4 py-12 text-center">
      <h1 className="text-3xl font-semibold mb-3">Payment cancelled</h1>
      <p className="text-neutral-600 dark:text-neutral-300 mb-4">
        No charges were made. You can restart checkout anytime.
      </p>
    </div>
  );
}
