import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button.jsx";

export function LandingPage() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-8 py-16 sm:px-14">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
        Your job search, organized
      </p>
      <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
        Take the next step in your career with ApplyPilot.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        A focused workspace for your CV, job search, and applications.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link to="/login">
          <Button>Get started</Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="secondary">Open dashboard</Button>
        </Link>
      </div>
    </section>
  );
}
