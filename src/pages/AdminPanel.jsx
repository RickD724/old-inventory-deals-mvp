import { useAuth } from "../context/AuthContext";
export default function AdminPanel() {
  const { loginAsAdmin, logout } = useAuth();
  return (
    <section className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <div className="flex gap-2">
          <button onClick={loginAsAdmin} className="border border-white/20 px-3 py-1.5 rounded-lg">Demo: Admin</button>
          <button onClick={logout} className="border border-white/20 px-3 py-1.5 rounded-lg">Logout</button>
        </div>
      </div>
    </section>
  );
}
