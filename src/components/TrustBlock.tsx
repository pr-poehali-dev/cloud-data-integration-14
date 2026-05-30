import { motion } from "framer-motion";

export default function TrustBlock() {
  return (
    <section className="bg-[#3C096C] py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(157,78,221,0.25),transparent_60%)]" />
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl block mb-5">🐾</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Пуфыч помогает не потеряться в заботе
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Пуфыч подсказывает, с чего начать: подобрать корм, найти нужный товар или выбрать курс поведения.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
