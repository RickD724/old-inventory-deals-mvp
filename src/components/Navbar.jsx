import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const active = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition ${
      isActive ? "bg-indigo-600 text-white" : "text-zinc-300 hover:text-white"
    }`;
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-[#0b0f1a]/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-white">
          Old Inventory <span className="text-indigo-400">Deals</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/browse" className={active}>Browse</NavLink>
          <NavLink to="/pricing" className={active}>Pricing</NavLink>
          <NavLink to="/dealer/signup" className="ml-2 px-3 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600">For Dealers</NavLink>
        </nav>
      </div>
    </header>
  );
}
