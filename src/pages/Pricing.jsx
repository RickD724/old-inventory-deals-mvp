export default function Pricing() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Pricing</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-semibold">Buyer</h3>
          <p className="text-sm text-zinc-400">Unlock contact per listing.</p>
          <div className="mt-4 text-3xl font-bold">$19</div>
          <button className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white">Unlock example</button>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-semibold">Dealer Pro</h3>
          <p className="text-sm text-zinc-400">Post and manage listings.</p>
          <div className="mt-4 text-3xl font-bold">$199<span className="text-base font-medium">/mo</span></div>
          <a href="/dealer/signup" className="mt-4 inline-block px-4 py-2 rounded-xl bg-indigo-600 text-white">Start</a>
        </div>
      </div>
    </section>
  );
}
