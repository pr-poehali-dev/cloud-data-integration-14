import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "@/components/ui/icon";

const steps = [
  {
    time: "Утро",
    icon: "Sun",
    title: "Напоминание о кормлении",
    desc: "Пуфыч напомнит о завтраке в нужное время. Норма, состав, время — всё под контролем.",
    screen: {
      label: "Кормление",
      items: [
        { icon: "Utensils", text: "Завтрак — 7:30", note: "80г сухого корма", done: true },
        { icon: "Droplets", text: "Вода свежая", note: "проверь миску", done: false },
        { icon: "Star", text: "Корм: Royal Canin Indoor", note: "подходит по возрасту", done: true },
      ],
    },
  },
  {
    time: "День",
    icon: "Zap",
    title: "Активность или курс поведения",
    desc: "Прогулка, игра или урок из курса коррекции поведения — в нужный момент.",
    screen: {
      label: "Активность",
      items: [
        { icon: "MapPin", text: "Прогулка — 13:00", note: "30 минут на свежем воздухе", done: true },
        { icon: "BookOpen", text: "Урок 3: «Место»", note: "курс базового послушания", done: false },
        { icon: "Heart", text: "Время игры", note: "5–10 минут", done: false },
      ],
    },
  },
  {
    time: "Вечер",
    icon: "Moon",
    title: "Самочувствие и заметки",
    desc: "Запишите изменения в поведении, аппетите или настроении. Дневник всегда рядом.",
    screen: {
      label: "Дневник",
      items: [
        { icon: "Smile", text: "Настроение: спокойный", note: "как обычно", done: true },
        { icon: "Utensils", text: "Ужин съеден", note: "весь корм", done: true },
        { icon: "PenLine", text: "Заметка", note: "немного чешет ушко", done: false },
      ],
    },
  },
  {
    time: "Важное",
    icon: "Bell",
    title: "Прививка, ветеринар или смена корма",
    desc: "Пуфыч заранее напомнит о важных событиях — никакой тревоги и «а вдруг забуду».",
    screen: {
      label: "Напоминания",
      items: [
        { icon: "Syringe", text: "Прививка FVRCP", note: "через 6 дней — 5 июня", done: false },
        { icon: "ShoppingBag", text: "Купить новый корм", note: "осталось на 3 дня", done: false },
        { icon: "Stethoscope", text: "Осмотр у ветеринара", note: "плановый — июль", done: false },
      ],
    },
  },
];

export default function DayTimeline() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.min(Math.floor(v * steps.length), steps.length - 1);
      setActive(Math.max(0, idx));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="bg-[#3C096C] py-24 px-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(157,78,221,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,145,0,0.15),transparent_40%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#FFC880] text-sm font-semibold uppercase tracking-widest mb-4">Ежедневный ритм</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
            Забота становится частью дня,<br />
            <span className="text-white/50">а не списком тревог</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="flex flex-col gap-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.time}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-400 ${
                  active === i
                    ? "bg-white/10 border border-white/20"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                {/* Icon + line */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      active === i ? "bg-[#FF9100] shadow-lg shadow-[#FF9100]/40" : "bg-white/10"
                    }`}
                  >
                    <Icon name={step.icon as "Sun"} size={18} className={active === i ? "text-white" : "text-white/50"} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-px flex-1 min-h-[16px] rounded-full transition-all duration-300 ${active > i ? "bg-[#FF9100]/60" : "bg-white/10"}`} />
                  )}
                </div>

                <div className="pt-1">
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1 transition-colors ${active === i ? "text-[#FFC880]" : "text-white/30"}`}>
                    {step.time}
                  </p>
                  <h3 className={`font-semibold text-base mb-1 transition-colors ${active === i ? "text-white" : "text-white/60"}`}>
                    {step.title}
                  </h3>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-white/50 text-sm leading-relaxed"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Product screen */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-3xl p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[#5A189A]/60 text-xs font-medium uppercase tracking-wide mb-1">{steps[active].screen.label}</p>
                  <p className="text-[#3C096C] font-semibold">Персик, сегодня</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FF9100]/10 flex items-center justify-center">
                  <Icon name={steps[active].icon as "Sun"} size={18} className="text-[#FF9100]" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {steps[active].screen.items.map((item) => (
                  <div
                    key={item.text}
                    className={`flex items-start gap-3 p-4 rounded-2xl border transition-all ${
                      item.done
                        ? "bg-[#f0e8ff] border-[#9D4EDD]/20"
                        : "bg-[hsl(var(--background))] border-[hsl(var(--border))]"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${item.done ? "bg-[#9D4EDD]/15" : "bg-[hsl(var(--muted))]"}`}>
                      <Icon name={item.icon as "Utensils"} size={14} className={item.done ? "text-[#5A189A]" : "text-[#5A189A]/50"} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${item.done ? "text-[#3C096C]" : "text-[#3C096C]"}`}>{item.text}</p>
                      <p className="text-xs text-[#5A189A]/60 mt-0.5">{item.note}</p>
                    </div>
                    {item.done && <Icon name="CheckCircle" size={16} className="text-[#9D4EDD] flex-shrink-0 mt-0.5" />}
                  </div>
                ))}
              </div>

              {/* Pufych */}
              <div className="mt-5 bg-[#FF9100]/8 border border-[#FF9100]/25 rounded-2xl p-4 flex items-center gap-3">
                <span className="text-xl">🐾</span>
                <p className="text-sm text-[#3C096C]">
                  {active === 0 && "Персик хорошо поел утром. Следующее кормление — в 19:00."}
                  {active === 1 && "Сегодня хороший день для 3-го урока. Займёт всего 10 минут!"}
                  {active === 2 && "Заметки о почёсывании уха я запомню. Если повторится — напомню проверить."}
                  {active === 3 && "Не забудьте про прививку 5 июня — я напомню за 3 дня!"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}