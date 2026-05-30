import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const categories = [
  { icon: "Wheat", label: "Корма", desc: "Сухие, влажные, натуральные", count: "120+ позиций" },
  { icon: "Cookie", label: "Лакомства", desc: "Лакомства и снеки для наград", count: "40+ позиций" },
  { icon: "Layers", label: "Наполнители", desc: "Комкующиеся, впитывающие", count: "25+ позиций" },
  { icon: "Star", label: "Аксессуары", desc: "Миски, игрушки, переноски", count: "80+ позиций" },
];

export default function ShopSection() {
  return (
    <section id="shop" className="bg-[hsl(var(--background))] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#5A189A] text-sm font-bold uppercase tracking-widest mb-3">Магазин</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3C096C] max-w-lg text-balance">
              Всё нужное для питомца — рядом с рекомендациями
            </h2>
            <a
              href="#shop"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#5A189A] hover:bg-[#4a1280] text-white font-bold px-7 py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg text-sm"
            >
              <Icon name="ShoppingBag" size={16} />
              Перейти в магазин
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.label}
              href="#shop"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white border border-purple-100 rounded-3xl p-6 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#9D4EDD]/10 flex items-center justify-center mb-4 group-hover:bg-[#9D4EDD]/20 transition-colors">
                <Icon name={cat.icon as "Wheat"} size={20} className="text-[#9D4EDD]" />
              </div>
              <p className="text-[#3C096C] font-extrabold text-base mb-1">{cat.label}</p>
              <p className="text-[#5A189A]/65 text-xs leading-relaxed mb-3 flex-1">{cat.desc}</p>
              <p className="text-[#FF9100] text-xs font-bold">{cat.count}</p>
            </motion.a>
          ))}
        </div>

        {/* Pufych tip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-8 bg-[#FF9100]/8 border border-[#FF9100]/20 rounded-2xl p-5 flex items-center gap-4"
        >
          <span className="text-2xl flex-shrink-0">🐾</span>
          <p className="text-[#3C096C] text-sm">
            <span className="font-bold">Пуфыч подскажет:</span>{" "}
            После подбора корма — все рекомендованные товары сразу окажутся в магазине. Не надо искать самостоятельно.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
