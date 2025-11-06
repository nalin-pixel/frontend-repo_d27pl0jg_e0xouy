import { motion } from "framer-motion";
import { GraduationCap, BookOpenCheck, Languages } from "lucide-react";

const brandGreen = "#006b3f";

const Card = ({ icon: Icon, title, desc, id }) => (
  <motion.a
    id={id}
    href={`#${id}`}
    whileHover={{ y: -4 }}
    className="block p-6 rounded-3xl bg-white"
    style={{
      boxShadow:
        "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
    }}
  >
    <div className="flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{
          background: "#ffffff",
          color: brandGreen,
          boxShadow:
            "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
        }}
      >
        <Icon />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  </motion.a>
);

export default function Services() {
  return (
    <section id="layanan" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            id="toefl"
            icon={GraduationCap}
            title="Tes TOEFL (CBT)"
            desc="Uji kemampuan bahasa Inggris berbasis komputer dengan standar institusional."
          />
          <Card
            id="toafl"
            icon={BookOpenCheck}
            title="Tes TOAFL"
            desc="Tes kemampuan bahasa Arab untuk kebutuhan akademik dan administratif."
          />
          <Card
            id="kursus"
            icon={Languages}
            title="Kursus Bahasa"
            desc="Kelas Inggris dan Arab dari level dasar hingga lanjutan dengan instruktur berpengalaman."
          />
        </div>
      </div>
    </section>
  );
}
