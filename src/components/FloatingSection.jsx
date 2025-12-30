import { motion } from "framer-motion";

export default function FloatingSection({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="rounded-2xl bg-[#0f172a] backdrop-blur
border border-white/10 p-8"

    >
      <h2 className="text-black mb-4 text-sm uppercase tracking-wide">
        {title}
      </h2>
      <div className="text-lg leading-relaxed text-black">
        {children}
      </div>
    </motion.div>
  );
}
