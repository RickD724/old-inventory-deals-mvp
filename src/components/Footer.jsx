export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f1a]">
      <div className="container mx-auto px-4 py-6 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Old Inventory Deals</p>
        <div className="flex gap-4">
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
