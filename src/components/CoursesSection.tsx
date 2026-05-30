import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const courses = {
  dog: [
    { icon: "Volume2", title: "Лай и шум", desc: "Избыточный лай дома, на улице, при гостях" },
    { icon: "AlertTriangle", title: "Тревожность", desc: "Страхи, дрожь, деструктивное поведение" },
    { icon: "Navigation", title: "Поводок и прогулки", desc: "Тяга на поводке, реакция на других собак" },
    { icon: "Shield", title: "Агрессия", desc: "К людям, животным или по отношению к еде" },
    { icon: "Home", title: "Одиночество", desc: "Тревога разлучения, скулёж, погром в квартире" },
  ],
  cat: [
    { icon: "AlertCircle", title: "Проблемы с туалетом", desc: "Мимо лотка, метки в неположенных местах" },
    { icon: "Zap", title: "Стресс и тревога", desc: "Прятки, отказ от еды, переезд, новый питомец" },
    { icon: "Scissors", title: "Царапание мебели", desc: "Диваны, обои, двери — как переключить" },
    { icon: "RefreshCw", title: "Адаптация", desc: "Котёнок, новый дом, другие животные" },
    { icon: "Moon", title: "Ночная активность", desc: "Топот, мяуканье, будит по ночам" },
  ],
};

export default function CoursesSection() {
  const [pet, setPet] = useState<"dog" | "cat">("dog");

  return (
    <section id="courses" className="bg-[hsl(var(--background))] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[#5A189A] text-sm font-bold uppercase tracking-widest mb-3">Курсы поведения</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3C096C] text-balance max-w-2xl">
            Если поведение питомца стало проблемой — начните с понятного курса
          </h2>
        </motion.div>

        {/* Pet toggle */}
        <div className="flex gap-3 mb-8">
          {(["dog", "cat"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setPet(type)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                pet === type
                  ? "bg-[#5A189A] text-white shadow-md shadow-purple-400/30"
                  : "bg-[#f0e8ff] text-[#5A189A] hover:bg-[#e8dcff]"
              }`}
            >
              <span>{type === "dog" ? "🐶" : "🐱"}</span>
              {type === "dog" ? "Собака" : "Кошка"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={pet}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10"
          >
            {courses[pet].map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-purple-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#9D4EDD]/10 flex items-center justify-center mb-4 group-hover:bg-[#9D4EDD]/20 transition-colors">
                  <Icon name={course.icon as "Volume2"} size={18} className="text-[#9D4EDD]" />
                </div>
                <p className="text-[#3C096C] font-bold text-sm mb-1">{course.title}</p>
                <p className="text-[#5A189A]/65 text-xs leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="#courses"
            className="inline-flex items-center gap-2 bg-[#5A189A] hover:bg-[#4a1280] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg text-base"
          >
            <Icon name="BookOpen" size={18} />
            Подобрать курс поведения
          </a>
          <p className="text-[#5A189A]/60 text-sm">
            Короткие уроки · Понятные шаги · Реальный результат
          </p>
        </div>
      </div>
    </section>
  );
}
