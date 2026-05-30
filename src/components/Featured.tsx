import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const pets = [
  {
    id: "cat",
    emoji: "🐱",
    name: "Кошка",
    tags: ["Корм", "Наполнитель", "Здоровье", "Привычки"],
    desc: "Подберём идеальный рацион, поможем с выбором наполнителя и будем следить за самочувствием вашей кошки.",
    tip: "Кошки — существа привычки. Я помогу выстроить спокойный ритм ухода.",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    accent: "bg-amber-500",
  },
  {
    id: "dog",
    emoji: "🐶",
    name: "Собака",
    tags: ["Рацион", "Прогулки", "Поведение", "Прививки"],
    desc: "Следим за режимом питания, активностью и поведением. Курсы коррекции и напоминания о прививках — всё в одном месте.",
    tip: "Собакам важен режим. Давайте вместе выстроим понятный распорядок дня!",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    accent: "bg-blue-500",
  },
];

export default function Featured() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-[hsl(var(--background))] flex flex-col justify-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[hsl(var(--brand-warm))] text-sm font-semibold uppercase tracking-widest mb-4">Шаг первый</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--brand-dark))] text-balance">
            Начнём с вашего питомца
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pets.map((pet, i) => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              onHoverStart={() => setHovered(pet.id)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => setSelected(pet.id === selected ? null : pet.id)}
              className={`relative bg-gradient-to-br ${pet.bg} border ${pet.border} rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
                hovered === pet.id || selected === pet.id ? "shadow-xl scale-[1.01]" : "shadow-sm"
              }`}
            >
              {selected === pet.id && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-[hsl(var(--brand-warm))] rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} className="text-white" />
                </div>
              )}

              <div className="text-6xl mb-6">{pet.emoji}</div>

              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-dark))] mb-3">
                {pet.name}
              </h3>

              <div className="flex flex-wrap gap-2 mb-5">
                {pet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/70 text-[hsl(var(--brand-dark))] text-xs font-medium px-3 py-1 rounded-full border border-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[hsl(var(--brand-muted))] text-sm leading-relaxed mb-6">
                {pet.desc}
              </p>

              {/* Pufych tip on hover */}
              <AnimatePresence>
                {hovered === pet.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: 5, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-3 mb-5 border border-white"
                  >
                    <span className="text-xl">🐾</span>
                    <p className="text-sm text-[hsl(var(--brand-dark))] italic">{pet.tip}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className={`w-full ${pet.accent} text-white font-semibold py-4 rounded-2xl hover:opacity-90 transition-all duration-300 hover:shadow-md`}>
                Выбрать {pet.name.toLowerCase()}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
