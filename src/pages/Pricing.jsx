export default function Pricing() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Pricing</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border border-white/10 bg-white/5 p-5 rounded-2xl">
          <h3 className="font-semibold">Buyer</h3>
          <div className="mt-4 text-3xl font-bold">$19</div>
        </div>
        <div className="border border-white/10 bg-white/5 p-5 rounded-2xl">
          <h3 className="font-semibold">Dealer Pro</h3>
          <div className="mt-4 text-3xl font-bold">$199/mo</div>
        </div>
      </div>
    </section>
  );
}
