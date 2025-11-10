import { useState } from "react";
export default function DealerDashboard() {
  const [listings, setListings] = useState([]);
  const addDraft = () => setListings((arr) => [...arr, {id:crypto.randomUUID(),title:"Untitled Listing"}]);
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dealer Dashboard</h1>
        <button onClick={addDraft} className="px-4 py-2 rounded-xl bg-indigo-600 text-white">New Listing</button>
      </div>
      {listings.length===0?<p>No listings yet.</p>:listings.map(l=><div key={l.id} className="border border-white/10 bg-white/5 rounded-2xl p-4">{l.title}</div>)}
    </section>
  );
}
