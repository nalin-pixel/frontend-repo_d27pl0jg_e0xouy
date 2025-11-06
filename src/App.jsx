import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

const brandGreen = "#006b3f";
const brandGold = "#d4af37";

function Divider() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full" style={{ background: "#eaeaea" }} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" }}>
      <HeaderNav />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />

      <footer className="mt-8 py-10">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} UPT Bahasa UINSSC. Semua hak dilindungi.</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Dikelola oleh UPT Bahasa</span>
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: brandGold }} />
          </div>
        </div>
      </footer>

      <style>{`
        :root { --brandGreen: ${brandGreen}; --brandGold: ${brandGold}; }
        html { scroll-behavior: smooth; }
        a { transition: transform .2s ease, box-shadow .2s ease, color .2s ease, background .2s ease; }
        a:active { transform: scale(0.98); }
      `}</style>
    </div>
  );
}
