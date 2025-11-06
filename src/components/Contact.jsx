import { motion } from "framer-motion";

const brandGreen = "#006b3f";
const brandGold = "#d4af37";

export default function Contact() {
  return (
    <section id="kontak" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-3xl bg-white"
            onSubmit={(e) => e.preventDefault()}
            style={{
              boxShadow:
                "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-900">Kontak Kami</h2>
            <div className="mt-6 grid gap-4">
              <div>
                <label className="text-sm text-gray-700">Nama</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-4 py-3 rounded-2xl bg-white outline-none"
                  style={{
                    boxShadow:
                      "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
                  }}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full px-4 py-3 rounded-2xl bg-white outline-none"
                  style={{
                    boxShadow:
                      "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
                  }}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Pesan</label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 w-full px-4 py-3 rounded-2xl bg-white outline-none"
                  style={{
                    boxShadow:
                      "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl text-white font-medium"
                style={{
                  background: `linear-gradient(135deg, ${brandGreen}, ${brandGold})`,
                  boxShadow:
                    "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
                }}
              >
                Kirim Pesan
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white"
            style={{
              boxShadow:
                "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
            }}
          >
            <h3 className="font-semibold text-gray-900">Alamat Kampus</h3>
            <p className="text-gray-600 mt-2 text-sm">
              UIN Siber Syekh Nurjati (UINSSC) — Cirebon, Jawa Barat
            </p>
            <div className="mt-4 text-sm text-gray-700">
              <p>Email: uptbahasa@uinssc.ac.id</p>
              <p>Telepon: (0231) 000000</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="px-4 py-2 rounded-xl text-gray-700 bg-white"
                style={{
                  boxShadow:
                    "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
                }}
              >
                Instagram
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="px-4 py-2 rounded-xl text-gray-700 bg-white"
                style={{
                  boxShadow:
                    "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.9)",
                }}
              >
                YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
