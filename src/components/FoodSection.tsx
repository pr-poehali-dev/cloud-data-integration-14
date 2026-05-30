import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const steps = [
  { n: "01", title: "Расскажите о питомце", desc: "Вид, возраст, вес, особенности здоровья и привычки питания." },
  { n: "02", title: "Получите рекомендации", desc: "Пуфыч подберёт подходящие варианты кормов с объяснением." },
  { n: "03", title: "Выберите и оформите", desc: "Сравните варианты и оформите заказ прямо в сервисе." },
];

const ages = ["Котёнок / щенок", "Взрослый", "Пожилой"];
const traits = ["Стерилизован(а)", "Склонен к полноте", "Чувствительное ЖКТ", "Аллергия"];

const recommendations: Record<string, { name: string; note: string; price: string }[]> = {
  cat: [
    { name: "Royal Canin Sterilised", note: "Для стерилизованных кошек 1–7 лет", price: "от 890 ₽" },
    { name: "Hill's Science Plan Adult", note: "Контроль веса, натуральные ингредиенты", price: "от 740 ₽" },
  ],
  dog: [
    { name: "Royal Canin Medium Adult", note: "Для взрослых собак средних пород", price: "от 1 290 ₽" },
    { name: "Purina Pro Plan Adult", note: "Высокое содержание белка, лёгкое усвоение", price: "от 980 ₽" },
  ],
};

export default function FoodSection() {
  const [pet, setPet] = useState<"cat" | "dog">("cat");
  const [age, setAge] = useState(ages[1]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [shown, setShown] = useState(false);

  const toggleTrait = (t: string) =>
    setSelectedTraits((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);

  return (
    <section id="food" className="bg-[#3C096C] py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_60%,rgba(157,78,221,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(255,145,0,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FFC880] text-sm font-bold uppercase tracking-widest mb-3">Подбор корма</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-balance">
            Подберите корм, который подходит именно вашему питомцу
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/8 border border-white/12 rounded-2xl p-5"
            >
              <p className="text-[#FF9100] font-extrabold text-2xl mb-3">{s.n}</p>
              <p className="text-white font-bold text-base mb-1">{s.title}</p>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mini-interactive */}
        <div className="bg-white rounded-3xl p-7 shadow-2xl">
          <p className="text-[#3C096C] font-extrabold text-lg mb-6">Попробуйте прямо сейчас</p>

          {/* Pet toggle */}
          <div className="flex gap-3 mb-6">
            {(["cat", "dog"] as const).map((type) => (
              <button
                key={type}
                onClick={() => { setPet(type); setShown(false); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  pet === type
                    ? "bg-[#5A189A] text-white shadow-md"
                    : "bg-[#f0e8ff] text-[#5A189A] hover:bg-[#e8dcff]"
                }`}
              >
                <span>{type === "cat" ? "🐱" : "🐶"}</span>
                {type === "cat" ? "Кошка" : "Собака"}
              </button>
            ))}
          </div>

          {/* Age */}
          <div className="mb-5">
            <p className="text-[#3C096C] text-sm font-bold mb-2">Возраст</p>
            <div className="flex flex-wrap gap-2">
              {ages.map((a) => (
                <button
                  key={a}
                  onClick={() => { setAge(a); setShown(false); }}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    age === a
                      ? "bg-[#3C096C] text-white"
                      : "bg-[#f0e8ff] text-[#5A189A] hover:bg-[#e8dcff]"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Traits */}
          <div className="mb-7">
            <p className="text-[#3C096C] text-sm font-bold mb-2">Особенности (можно несколько)</p>
            <div className="flex flex-wrap gap-2">
              {traits.map((t) => (
                <button
                  key={t}
                  onClick={() => { toggleTrait(t); setShown(false); }}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    selectedTraits.includes(t)
                      ? "bg-[#FF9100] text-white"
                      : "bg-[#f0e8ff] text-[#5A189A] hover:bg-[#e8dcff]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShown(true)}
            className="w-full md:w-auto bg-[#FF9100] hover:bg-[#e07f00] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-300/40 text-base mb-4"
          >
            Показать рекомендации
          </button>

          <AnimatePresence>
            {shown && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="border-t border-purple-100 pt-5 mt-2"
              >
                <p className="text-[#5A189A] text-xs font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span>🐾</span> Пуфыч рекомендует
                </p>
                <div className="flex flex-col gap-3">
                  {recommendations[pet].map((rec) => (
                    <div
                      key={rec.name}
                      className="flex items-center justify-between p-4 bg-[#f7f0ff] border border-purple-100 rounded-2xl"
                    >
                      <div>
                        <p className="text-[#3C096C] font-bold text-sm">{rec.name}</p>
                        <p className="text-[#5A189A]/70 text-xs mt-0.5">{rec.note}</p>
                      </div>
                      <div className="text-right ml-4 flex-shrink-0">
                        <p className="text-[#FF9100] font-extrabold text-sm">{rec.price}</p>
                        <button className="text-[#5A189A] text-xs font-semibold underline mt-0.5">В магазин →</button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center mt-8">
          <a
            href="#food"
            className="inline-flex items-center gap-2 bg-[#FF9100] hover:bg-[#e07f00] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-400/30 text-base"
          >
            <Icon name="Wheat" size={18} />
            Начать подбор корма
          </a>
        </div>
      </div>
    </section>
  );
}
