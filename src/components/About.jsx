import { motion } from "framer-motion";
import { ShieldCheck, Target } from "lucide-react";

const brandGreen = "#006b3f";

export default function About() {
  return (
    <section id="tentang" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 p-6 rounded-3xl bg-white"
            style={{
              boxShadow:
                "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-900">Tentang Kami</h2>
            <p className="mt-3 text-gray-600">
              UPT Bahasa UIN Siber Syekh Nurjati (UINSSC) berkomitmen untuk
              meningkatkan kompetensi bahasa sivitas akademika melalui layanan
              tes standar dan program pembelajaran bahasa yang berkualitas.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div
                className="p-4 rounded-2xl bg-white flex items-start gap-3"
                style={{
                  boxShadow:
                    "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
                }}
              >
                <Target className="text-[color:var(--brandGreen)]" />
                <div>
                  <h3 className="font-medium text-gray-900">Visi</h3>
                  <p className="text-sm text-gray-600">
                    Menjadi pusat unggulan pengembangan kompetensi bahasa di
                    lingkungan UINSSC.
                  </p>
                </div>
              </div>
              <div
                className="p-4 rounded-2xl bg-white flex items-start gap-3"
                style={{
                  boxShadow:
                    "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
                }}
              >
                <ShieldCheck className="text-[color:var(--brandGreen)]" />
                <div>
                  <h3 className="font-medium text-gray-900">Misi</h3>
                  <p className="text-sm text-gray-600">
                    Menyelenggarakan layanan tes standar dan program kursus yang
                    profesional, akuntabel, dan berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white"
            style={{
              borderTop: `4px solid ${brandGreen}`,
              boxShadow:
                "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
            }}
          >
            <h3 className="font-semibold text-gray-900">Identitas</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lembaga resmi universitas yang mengelola tes TOEFL/TOAFL dan
              kursus bahasa Inggris serta Arab.
            </p>
            <a
              href="#kontak"
              className="inline-block mt-4 px-4 py-2 rounded-xl text-white"
              style={{ background: brandGreen, boxShadow: "6px 6px 14px rgba(0,0,0,0.08)" }}
            >
              Informasi Lebih Lanjut
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
