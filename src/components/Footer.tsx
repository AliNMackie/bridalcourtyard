
export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-lg uppercase tracking-widest font-light mb-2">Bridal Courtyard</h4>
          <p className="text-white/40 text-sm font-light">Glasgow&apos;s Premier Bridal Boutique</p>
        </div>

        <div className="flex space-x-6 text-xs uppercase tracking-widest text-white/60">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>

        <p className="text-xs text-white/20">© {new Date().getFullYear()} Bridal Courtyard.</p>
      </div>
    </footer>
  );
}
