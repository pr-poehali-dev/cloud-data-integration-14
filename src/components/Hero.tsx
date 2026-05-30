import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const directions = [
  {
    icon: "Wheat",
    label: "Подбор корма",
    desc: "Подберём по возрасту, весу и особенностям",
    color: "bg-[#FF9100]/15 text-[#FF9100]",
    href: "#food",
  },
  {
    icon: "ShoppingBag",
    label: "Магазин",
    desc: "Корма, аксессуары, наполнители",
    color: "bg-[#9D4EDD]/15 text-[#9D4EDD]",
    href: "#shop",
  },
  {
    icon: "BookOpen",
    label: "Курсы поведения",
    desc: "Лай, тревога, агрессия, туалет",
    color: "bg-[#FFC880]/25 text-[#c46f00]",
    href: "#courses",
  },
];

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-[#3C096C] via-[#5A189A] to-[#3C096C]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(157,78,221,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,145,0,0.2),transparent_50%)]" />
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Icon name="ChevronDown" size={22} className="text-white/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-7"
            >
              <span className="text-base">🐾</span>
              <span className="text-white/80 text-sm font-medium">Привет, я Пуфыч — ваш помощник</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1.1] mb-5 text-balance"
            >
              Подберите корм, покупки и помощь для питомца{" "}
              <span className="text-[#FFC880]">в одном сервисе</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/65 text-lg leading-relaxed mb-9 max-w-md"
            >
              ПитомецПлюс помогает подобрать корм, купить нужные товары и пройти курсы коррекции поведения для кошек и собак.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#food"
                className="bg-[#FF9100] hover:bg-[#e07f00] text-white font-bold px-7 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF9100]/30 text-base"
              >
                Подобрать корм
              </a>
              <a
                href="#shop"
                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all duration-300 text-base backdrop-blur-sm"
              >
                В магазин
              </a>
              <a
                href="#courses"
                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all duration-300 text-base backdrop-blur-sm"
              >
                Курсы поведения
              </a>
            </motion.div>
          </div>

          {/* Right — product panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF9100] to-[#FFC880] flex items-center justify-center text-xl shadow-lg">
                  🐾
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wide">Пуфыч</p>
                  <p className="text-white font-bold">С чего начнём?</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {directions.map((d, i) => (
                  <motion.a
                    key={d.label}
                    href={d.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4 bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/25 rounded-2xl p-4 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${d.color}`}>
                      <Icon name={d.icon as "Wheat"} size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{d.label}</p>
                      <p className="text-white/50 text-xs mt-0.5">{d.desc}</p>
                    </div>
                    <Icon name="ChevronRight" size={16} className="text-white/30 group-hover:text-white/60 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#9D4EDD]/15 rounded-[2rem] blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
