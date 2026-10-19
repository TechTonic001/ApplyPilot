export function PagePlaceholder({ title, description }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
        ApplyPilot
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">{description}</p>
      <p className="mt-6 text-sm text-slate-500">This page is a placeholder.</p>
    </section>
  );
}
