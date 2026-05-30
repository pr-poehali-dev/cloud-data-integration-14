import { motion } from "framer-motion";

export default function SeversStory() {
  return (
    <section id="story" className="bg-[hsl(var(--background))] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#5A189A] text-sm font-bold uppercase tracking-widest mb-5">История</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#3C096C] mb-5">
            Почему появился ПитомецПлюс
          </h2>
          <p className="text-[#5A189A]/75 text-lg leading-relaxed mb-5">
            ПитомецПлюс начался с личной истории заботы о коте Северусе. Мы сделали сервис, который помогает владельцам принимать понятные решения: чем кормить, что купить и как решать проблемы поведения.
          </p>
          <div className="w-10 h-px bg-[#9D4EDD]/30" />
        </motion.div>
      </div>
    </section>
  );
}
