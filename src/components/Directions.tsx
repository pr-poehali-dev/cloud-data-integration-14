import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const cards = [
  {
    icon: "Wheat",
    emoji: "🌾",
    title: "Подбор корма",
    desc: "Поможем выбрать корм под возраст, вес, особенности и привычки питомца.",
    cta: "Подобрать корм",
    href: "#food",
    bg: "from-[#fff8f0] to-[#fff2e0]",
    border: "border-[#FFC880]/40",
    iconBg: "bg-[#FF9100]/10 text-[#FF9100]",
    ctaBg: "bg-[#FF9100] hover:bg-[#e07f00] shadow-orange-300/40",
    badge: "Главное",
    badgeColor: "bg-[#FF9100] text-white",
  },
  {
    icon: "ShoppingBag",
    emoji: "🛍️",
    title: "Магазин",
    desc: "Корма, аксессуары, наполнители и всё нужное для заботы.",
    cta: "В магазин",
    href: "#shop",
    bg: "from-[#f7f0ff] to-[#ede0ff]",
    border: "border-[#9D4EDD]/25",
    iconBg: "bg-[#9D4EDD]/10 text-[#9D4EDD]",
    ctaBg: "bg-[#5A189A] hover:bg-[#4a1280] shadow-purple-400/30",
    badge: null,
    badgeColor: "",
  },
  {
    icon: "BookOpen",
    emoji: "📖",
    title: "Курсы поведения",
    desc: "Мягкая коррекция привычек: лай, тревожность, туалет, агрессия, адаптация.",
    cta: "Выбрать курс",
    href: "#courses",
    bg: "from-[#f7f0ff] to-[#ede0ff]",
    border: "border-[#9D4EDD]/25",
    iconBg: "bg-[#FFC880]/20 text-[#FF9100]",
    ctaBg: "bg-[#5A189A] hover:bg-[#4a1280] shadow-purple-400/30",
    badge: null,
    badgeColor: "",
  },
];

export default function Directions() {
  return (
    <section className="bg-[hsl(var(--background))] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#5A189A] text-sm font-bold uppercase tracking-widest mb-3">С чего начнём?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3C096C]">
            Выберите, что нужно вашему питомцу
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative bg-gradient-to-br ${card.bg} border ${card.border} rounded-3xl p-7 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {card.badge && (
                <span className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${card.badgeColor}`}>
                  {card.badge}
                </span>
              )}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${card.iconBg}`}>
                <Icon name={card.icon as "Wheat"} size={22} />
              </div>
              <h3 className="text-xl font-extrabold text-[#3C096C] mb-2">{card.title}</h3>
              <p className="text-[#5A189A]/70 text-sm leading-relaxed flex-1 mb-6">{card.desc}</p>
              <a
                href={card.href}
                className={`w-full text-center text-white font-bold py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg text-sm ${card.ctaBg}`}
              >
                {card.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}