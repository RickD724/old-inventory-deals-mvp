import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-4">
      <div className="aspect-[16/9] rounded-xl bg-zinc-800 mb-3" />
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-white">{listing.title}</h3>
          <p className="text-sm text-zinc-400">{listing.city}, {listing.state} • {listing.days_in_stock} days</p>
        </div>
        <span className="text-indigo-300 font-medium">${listing.deal_price?.toLocaleString?.() ?? "—"}</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2 text-xs">
          {listing.badges?.map((b) => (
            <span key={b} className="px-2 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">{b}</span>
          ))}
        </div>
        <Link to={`/listing/${listing.id}`} className="text-sm px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white">View</Link>
      </div>
    </div>
  );
}
