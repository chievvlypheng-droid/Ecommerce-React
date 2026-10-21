import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex flex-col shadow-md">
      <nav className="flex flex-row items-center justify-between bg-slate-900 px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-amber-400">
          Shopping Hub
        </h1>
        <div className="flex flex-row items-center gap-4">
          <p className="cursor-pointer font-medium text-slate-200 hover:text-amber-400">
            Profile
          </p>
          <button className="rounded-lg bg-amber-400 px-4 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-300">
            LogOut
          </button>
        </div>
      </nav>

      <div className="flex w-full flex-row gap-6 bg-slate-800 px-6 py-2">
        <Link
          to="/loginPage"
          className="font-medium text-slate-300 hover:text-amber-400 hover:underline"
        >
          Login
        </Link>
        <Link
          to="/"
          className="font-medium text-slate-300 hover:text-amber-400 hover:underline"
        >
          Home
        </Link>
        <Link to="/profilePage">Profile page</Link>
      </div>
    </div>
  );
}
