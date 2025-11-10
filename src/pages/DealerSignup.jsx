import { useAuth } from "../context/AuthContext";
export default function DealerSignup() {
  const { loginAsDealer } = useAuth();
  return (
    <section className="max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Dealer Onboarding</h1>
      <div className="grid gap-3">
        <input className="px-3 py-2 rounded-xl bg-zinc-900 border border-white/10" placeholder="Dealership name" />
        <input className="px-3 py-2 rounded-xl bg-zinc-900 border border-white/10" placeholder="Website" />
        <input className="px-3 py-2 rounded-xl bg-zinc-900 border border-white/10" placeholder="DMV License #" />
        <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Subscribe (Stripe)</button>
        <button onClick={loginAsDealer} className="px-4 py-2 rounded-xl border border-white/20">Demo: Continue as Dealer</button>
      </div>
    </section>
  );
}
