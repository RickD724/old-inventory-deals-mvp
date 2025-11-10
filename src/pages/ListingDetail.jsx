import { useParams } from "react-router-dom";

export default function ListingDetail() {
  const { id } = useParams();
  // TODO: fetch listing by id
  return (
    <section className="space-y-4">
      <div className="aspect-[16/9] rounded-2xl bg-zinc-800" />
      <h1 className="text-2xl font-semibold">Listing #{id}</h1>
      <p className="text-zinc-300">Anonymous dealer • Bay Area, CA</p>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <h3 className="font-semibold mb-2">Unlock contact</h3>
        <p className="text-sm text-zinc-300">Pay a small fee to reveal the dealer name, phone, and email.</p>
        <button className="mt-3 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Unlock for $19</button>
      </div>
    </section>
  );
}
