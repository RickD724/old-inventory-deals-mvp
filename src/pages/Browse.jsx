import { useMemo, useState } from "react";
import ListingCard from "../components/ListingCard.jsx";

const DUMMY = [
  { id: "1", title: "2024 Cayenne S", city: "San Jose", state: "CA", days_in_stock: 112, deal_price: 87995, badges:["90+ days","Lease-Friendly"] },
  { id: "2", title: "2023 Taycan 4S", city: "San Mateo", state: "CA", days_in_stock: 87, deal_price: 69995, badges:["EV","Price Drop"] },
  { id: "3", title: "2022 Macan S", city: "Oakland", state: "CA", days_in_stock: 143, deal_price: 52995, badges:["90+ days"] },
];

export default function Browse() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => DUMMY.filter((l) => l.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-white">Browse Deals</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search model, trim…"
          className="px-3 py-2 rounded-xl bg-zinc-900 border border-white/10"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    </section>
  );
}
