import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="text-center py-10">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
          Move aged units. <span className="text-indigo-400">Quietly.</span>
        </h1>
        <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
          Dealers post old-age inventory anonymously. Buyers unlock contact on the best deals.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/browse" className="px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700">Browse Deals</Link>
          <Link to="/dealer/signup" className="px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/10">For Dealers</Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {["Anonymous listings","Pay-to-unlock leads","Days-in-stock first"].map((t) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white mb-1">{t}</h3>
            <p className="text-sm text-zinc-400">MVP-friendly feature description.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
