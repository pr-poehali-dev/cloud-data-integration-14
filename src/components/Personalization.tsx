import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const profiles = {
  cat: {
    emoji: "🐱",
    name: "Персик",
    breed: "Британская короткошёрстная",
    age: "3 года",
    weight: "4.0 кг",
    traits: ["Стерилизована", "Домашняя", "Склонна к полноте"],
    diet: "Royal Canin Sterilised 75г × 2",
    reminders: ["Кормление 8:00 и 19:00", "Прививка через 6 дней", "Расчёска раз в неделю"],
    tip: "Персику подойдёт корм с контролем веса — она немного набрала за зиму.",
  },
  dog: {
    emoji: "🐶",
    name: "Барсик",
    breed: "Лабрадор ретривер",
    age: "2 года",
    weight: "28 кг",
    traits: ["Активный", "Любит прогулки", "Учится командам"],
    diet: "Hill's Science Plan Adult L 280г × 2",
    reminders: ["Прогулки 3 раза в день", "Урок послушания сегодня", "Купание раз в 3 недели"],
    tip: "Барсику нужно чуть больше белка — он сейчас активно учится и тренируется.",
  },
};

export default function Personalization() {
  const [petType, setPetType] = useState<"cat" | "dog">("cat");
  const p = profiles[petType];

  return (
    <section className="bg-[hsl(var(--background))] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#5A189A] text-sm font-semibold uppercase tracking-widest mb-4">Персонализация</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C096C] text-balance">
            Рекомендации не общие.{" "}
            <span className="text-[#9D4EDD]">Они про вашего питомца.</span>
          </h2>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#f0e8ff] rounded-2xl p-1.5 flex gap-1">
            {(["cat", "dog"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setPetType(type)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  petType === type
                    ? "bg-[#5A189A] text-white shadow-md shadow-[#5A189A]/30"
                    : "text-[#5A189A]/70 hover:text-[#3C096C]"
                }`}
              >
                <span>{type === "cat" ? "🐱" : "🐶"}</span>
                {type === "cat" ? "Кошка" : "Собака"}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={petType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {/* Profile card */}
            <div className="lg:col-span-1 bg-white rounded-3xl p-6 border border-purple-100 shadow-md shadow-purple-100/50">
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="text-2xl font-bold text-[#3C096C] mb-1">{p.name}</h3>
              <p className="text-[#9D4EDD] text-sm mb-5">{p.breed}</p>

              <div className="flex flex-col gap-3 mb-5">
                <div className="flex justify-between items-center py-2 border-b border-purple-100">
                  <span className="text-[#5A189A]/60 text-sm">Возраст</span>
                  <span className="text-[#3C096C] font-semibold text-sm">{p.age}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-100">
                  <span className="text-[#5A189A]/60 text-sm">Вес</span>
                  <span className="text-[#3C096C] font-semibold text-sm">{p.weight}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.traits.map((t) => (
                  <span key={t} className="bg-[#f0e8ff] text-[#5A189A] text-xs font-semibold px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Рацион */}
              <div className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FF9100]/10 flex items-center justify-center">
                    <Icon name="Utensils" size={16} className="text-[#FF9100]" />
                  </div>
                  <p className="font-semibold text-[#3C096C]">Рацион</p>
                </div>
                <p className="text-[#3C096C] text-sm font-medium">{p.diet}</p>
              </div>

              {/* Напоминания */}
              <div className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#9D4EDD]/10 flex items-center justify-center">
                    <Icon name="Bell" size={16} className="text-[#9D4EDD]" />
                  </div>
                  <p className="font-semibold text-[#3C096C]">Напоминания</p>
                </div>
                <div className="flex flex-col gap-2">
                  {p.reminders.map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF9100]" />
                      <p className="text-[#3C096C] text-sm">{r}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Пуфыч совет */}
              <div className="bg-[#FF9100]/8 border border-[#FF9100]/25 rounded-3xl p-5 flex items-start gap-4">
                <span className="text-2xl">🐾</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#FF9100] mb-1">Совет Пуфыча</p>
                  <p className="text-[#3C096C] text-sm leading-relaxed">{p.tip}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}