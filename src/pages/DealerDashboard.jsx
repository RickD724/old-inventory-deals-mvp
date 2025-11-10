import { useState } from "react";

export default function DealerDashboard() {
  const [listings, setListings] = useState([]);
  const addDraft = () => setListings((arr) => [
    ...arr,
    { id: crypto.randomUUID(), title: "Untitled Listing", status: "draft", city: "City", state: "ST", days_in_stock: 0 }
  ]);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dealer Dashboard</h1>
        <button onClick={addDraft} className="px-4 py-2 rounded-xl bg-indigo-600 text-white">New Listing</button>
      </div>

      <div className="grid gap-3">
        {listings.length === 0 && (
          <p className="text-zinc-400">No listings yet. Click <b>New Listing</b> to create a draft.</p>
        )}
        {listings.map((l) => (
          <div key={l.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <input defaultValue={l.title} className="bg-transparent font-medium" />
              <span className="text-xs px-2 py-1 rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">{l.status}</span>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white">Submit for review</button>
              <button className="px-3 py-1.5 rounded-lg border border-white/20">Pause</button>
              <button className="px-3 py-1.5 rounded-lg border border-red-400/30 text-red-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
