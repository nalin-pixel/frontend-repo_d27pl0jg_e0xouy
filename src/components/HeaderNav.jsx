import { Menu, X } from "lucide-react";
import { useState } from "react";

const brandGreen = "#006b3f";
const brandGold = "#d4af37";

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#layanan" },
    { label: "Tes TOEFL", href: "#toefl" },
    { label: "TOAFL", href: "#toafl" },
    { label: "Kursus", href: "#kursus" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-white/60"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#beranda" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center"
              style={{
                boxShadow:
                  "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
              }}
            >
              <div
                className="w-6 h-6 rounded-xl"
                style={{ background: brandGreen }}
              />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">UPT Bahasa</p>
              <p className="text-xs text-gray-500">UIN SSC</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="px-4 py-2 rounded-xl text-white"
              style={{
                background: brandGreen,
                boxShadow:
                  "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
              }}
            >
              Hubungi Kami
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka navigasi"
            style={{
              boxShadow:
                "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
            }}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-2xl bg-white text-gray-800"
              onClick={() => setOpen(false)}
              style={{
                boxShadow:
                  "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${brandGreen}, ${brandGold})` }}
      />
    </header>
  );
}
