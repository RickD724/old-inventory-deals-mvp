import { useAuth } from "../context/AuthContext.jsx";

export default function AdminPanel() {
  const { loginAsAdmin, logout } = useAuth();
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <div className="flex gap-2">
          <button onClick={loginAsAdmin} className="px-3 py-1.5 rounded-lg border border-white/20">Demo: become Admin</button>
          <button onClick={logout} className="px-3 py-1.5 rounded-lg border border-white/20">Logout</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {[1,2,3].map((id) => (
          <div key={id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">Listing #{id}</h3>
            <p className="text-sm text-zinc-400">Dealer: pending verification</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white">Approve</button>
              <button className="px-3 py-1.5 rounded-lg bg-red-600 text-white">Deny</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
