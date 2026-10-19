import { NavLink, Outlet } from "react-router-dom";

const navigation = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/cv-builder", label: "CV Builder" },
  { to: "/jobs", label: "Jobs" },
  { to: "/applications", label: "Applications" },
];

export function Layout() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
        >
          <NavLink className="text-xl font-bold tracking-tight text-blue-700" to="/">
            ApplyPilot
          </NavLink>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navigation.map(({ to, label }) => (
              <NavLink
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-700"
                  }`
                }
                key={to}
                to={to}
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
              to="/login"
            >
              Log in
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
