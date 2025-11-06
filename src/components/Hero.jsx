import { motion } from "framer-motion";

const brandGreen = "#006b3f";
const brandGold = "#d4af37";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 80% 0%, rgba(0,107,63,0.06), transparent 60%), radial-gradient(600px 300px at 20% 100%, rgba(212,175,55,0.08), transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              color: brandGreen,
              background: "#ffffff",
              boxShadow:
                "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
            }}
          >
            Pusat Bahasa Resmi UINSSC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            UPT Bahasa UIN Sunan Gunung Djati
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Pusat Pengembangan Kompetensi Bahasa dan Tes Standar
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#toefl"
              className="px-6 py-3 rounded-2xl text-white font-medium"
              style={{
                background: brandGreen,
                boxShadow:
                  "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
              }}
            >
              Daftar Tes TOEFL
            </a>
            <a
              href="#kursus"
              className="px-6 py-3 rounded-2xl font-medium"
              style={{
                color: brandGreen,
                background: "#ffffff",
                boxShadow:
                  "8px 8px 16px rgba(0,0,0,0.06), -8px -8px 16px rgba(255,255,255,0.95)",
              }}
            >
              Lihat Kursus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
