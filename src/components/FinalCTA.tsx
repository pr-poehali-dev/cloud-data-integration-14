import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const actions = [
  { label: "Подобрать корм", href: "#food", icon: "Wheat", primary: true },
  { label: "В магазин", href: "#shop", icon: "ShoppingBag", primary: false },
  { label: "Курсы поведения", href: "#courses", icon: "BookOpen", primary: false },
];

export default function FinalCTA() {
  return (
    <div
      className="relative"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+560px)] -top-[100vh]">
        <div className="h-[560px] sticky top-[calc(100vh-560px)]">
          <div className="h-full w-full flex flex-col">
            {/* CTA area */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center bg-[#faf8ff]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3C096C] mb-4 text-balance">
                  Начните с того, что нужно вашему питомцу сейчас
                </h2>
                <p className="text-[#5A189A]/65 text-base max-w-md mx-auto mb-10">
                  Подберите корм, загляните в магазин или найдите курс — всё в одном месте.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {actions.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-sm ${
                        a.primary
                          ? "bg-[#FF9100] text-white hover:bg-[#e07f00] hover:shadow-xl hover:shadow-orange-300/40"
                          : "bg-[#f0e8ff] text-[#5A189A] hover:bg-[#e0d0ff]"
                      }`}
                    >
                      <Icon name={a.icon as "Wheat"} size={16} />
                      {a.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="bg-[#3C096C] py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-10">
                {[
                  { label: "Сервис", links: ["Подбор корма", "Магазин", "Курсы"] },
                  { label: "Компания", links: ["О нас", "История", "Поддержка"] },
                ].map((col) => (
                  <div key={col.label} className="flex flex-col gap-1">
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-2">{col.label}</p>
                    {col.links.map((link) => (
                      <a key={link} href="#" className="text-white/55 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className="text-right">
                <p className="text-[3rem] md:text-[4.5rem] font-extrabold text-white/8 leading-none select-none">
                  ПИТОМЕЦ+
                </p>
                <p className="text-white/30 text-xs mt-1">© {new Date().getFullYear()} ПитомецПлюс</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
