import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Icon from "@/components/ui/icon";

const mockItems = [
  { icon: "Utensils", label: "Кормление сегодня", value: "в 19:00", color: "bg-orange-50 text-orange-600" },
  { icon: "Syringe", label: "Прививка через", value: "6 дней", color: "bg-blue-50 text-blue-600" },
  { icon: "ShoppingBag", label: "Корм подобран", value: "Royal Canin", color: "bg-green-50 text-green-600" },
  { icon: "Activity", label: "Активность", value: "в норме", color: "bg-purple-50 text-purple-600" },
];

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#3C096C] via-[#5A189A] to-[#3C096C]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(157,78,221,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,145,0,0.2),transparent_50%)]" />
      </motion.div>

      {/* Pufych mascot hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Icon name="ChevronDown" size={20} className="text-white/50" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-20 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Пуфыч badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-lg">🐾</span>
              <span className="text-white/80 text-sm font-medium">Привет, я Пуфыч — ваш помощник</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 text-balance"
            >
              Забота о питомце,{" "}
              <span className="text-[#FFC880]">в которой всё понятно</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Подберите корм, следите за здоровьем, получайте напоминания и рекомендации — в одном спокойном сервисе для кошек и собак.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-[#FF9100] hover:bg-[#e07f00] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF9100]/40">
                Начать с питомца
              </button>
              <button className="border border-white/30 text-white/90 hover:bg-white/10 font-medium px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-sm">
                Посмотреть, как работает
              </button>
            </motion.div>
          </div>

          {/* Right: product panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-1">Мой питомец</p>
                  <p className="text-white font-semibold text-lg">Персик, 3 года 🐱</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF9100] to-[#FFC880] flex items-center justify-center text-2xl shadow-lg">
                  🐱
                </div>
              </div>

              {/* Mock items */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {mockItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-default group"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${item.color} bg-opacity-20`}>
                      <Icon name={item.icon as "Utensils"} size={14} className="opacity-80" />
                    </div>
                    <p className="text-white/50 text-[10px] font-medium">{item.label}</p>
                    <p className="text-white text-sm font-semibold">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Pufych tip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-[#FF9100]/15 border border-[#FF9100]/30 rounded-2xl p-3 flex items-start gap-3"
              >
                <span className="text-xl">🐾</span>
                <div>
                  <p className="text-white/50 text-[10px] font-medium uppercase tracking-wide mb-0.5">Совет Пуфыча</p>
                  <p className="text-white/90 text-sm">Персику пора обновить корм — он перешёл во взрослый возраст!</p>
                </div>
              </motion.div>
            </div>

            {/* Floating glow */}
            <div className="absolute -inset-4 bg-[#9D4EDD]/20 rounded-[2rem] blur-2xl -z-10" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}