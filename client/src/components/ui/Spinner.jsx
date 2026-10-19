export function Spinner({ label = "Loading" }) {
  return (
    <div aria-label={label} className="flex items-center gap-3" role="status">
      <span className="size-5 animate-spin rounded-full border-2 border-blue-200 border-t-blue-700" />
      <span className="text-sm text-slate-600">{label}</span>
    </div>
  );
}
