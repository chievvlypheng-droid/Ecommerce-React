import { Link } from "react-router-dom";
import { UseAuth } from "../Context/authContext";

export default function NavBar() {
  const { user, logout } = UseAuth();
  const initial = user?.email?.[0]?.toUpperCase();

  return (
    <div className="flex flex-col shadow-md">
      <nav className="flex flex-row items-center justify-between bg-slate-900 px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-amber-400">
          Shopping Hub
        </h1>

        {!user ? (
          <div>
            <Link to="/loginPage" class="bg-blue-500 rounded-lg p-2">
              Login
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div
              title={user.email}
              className="flex h-9 w-9 select-none items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-900 ring-2 ring-slate-600"
            >
              {initial}
            </div>
            <button
              onClick={() => logout()}
              className="rounded-lg border border-slate-500 px-4 py-1.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400 hover:text-amber-400"
            >
              Log out
            </button>
          </div>
        )}
      </nav>

      <div className="flex w-full flex-row gap-6 bg-slate-800 px-6 py-2">
        <Link
          to="/"
          className="font-medium text-slate-300 hover:text-amber-400 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/profilePage"
          className="font-medium text-slate-300 hover:text-amber-400 hover:underline"
        >
          Profile page
        </Link>
        <Link
          to="/cardPage"
          className="font-medium text-slate-300 hover:text-amber-400 hover:underline"
        >
          Card
        </Link>
      </div>
    </div>
  );
}
