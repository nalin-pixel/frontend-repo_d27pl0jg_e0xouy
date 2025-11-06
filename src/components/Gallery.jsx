import { motion } from "framer-motion";

export default function Gallery() {
  const videos = [
    // Example: Replace with official PPB UINSSC video ID if available
    "dQw4w9WgXcQ",
    "ysz5S6PUM-U",
  ];

  return (
    <section id="galeri" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Galeri/Video</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((id) => (
            <motion.div
              key={id}
              whileHover={{ y: -3 }}
              className="rounded-3xl overflow-hidden bg-white"
              style={{
                boxShadow:
                  "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
              }}
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
