import { useAuth } from "../auth/AuthContext.jsx";
import { ErrorMessage } from "../components/ui/ErrorMessage.jsx";

export function LoginPage() {
  const { authError } = useAuth();

  return (
    <section className="mx-auto max-w-lg space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Welcome to ApplyPilot
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Login</h1>
      </div>
      <p className="leading-7 text-slate-600">
        Authentication UI will be added here. This page is currently a placeholder.
      </p>
      <ErrorMessage message={authError} />
    </section>
  );
}
