import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const tabs = [
  {
    id: "nutrition",
    label: "Питание",
    icon: "Utensils",
    title: "Корм, который подходит именно вашему питомцу",
    desc: "Анкета из 5 вопросов — и Пуфыч подберёт подходящий корм с учётом возраста, веса и особенностей здоровья.",
    screen: {
      header: "Подбор корма",
      pet: "Персик, 3 года, стерилизована",
      items: [
        { label: "Рекомендован", value: "Royal Canin Sterilised", badge: "✓ Подходит", color: "green" },
        { label: "Дневная норма", value: "75 г сухого корма", badge: "2 приёма", color: "blue" },
        { label: "Следующая доставка", value: "5 июня", badge: "3 кг", color: "orange" },
      ],
    },
  },
  {
    id: "health",
    label: "Здоровье",
    icon: "Heart",
    title: "Дневник здоровья, который всегда с вами",
    desc: "Прививки, визиты к ветеринару, изменения в поведении — всё в одном месте. Пуфыч напомнит о важном.",
    screen: {
      header: "Дневник здоровья",
      pet: "Персик, последние события",
      items: [
        { label: "Прививка FVRCP", value: "через 6 дней", badge: "⚡ Скоро", color: "orange" },
        { label: "Вес", value: "4.1 кг → 4.0 кг", badge: "↓ -100г", color: "blue" },
        { label: "Плановый осмотр", value: "июль 2026", badge: "Запланирован", color: "green" },
      ],
    },
  },
  {
    id: "behavior",
    label: "Поведение",
    icon: "BookOpen",
    title: "Курсы коррекции поведения без стресса",
    desc: "Короткие уроки на каждый день. Понятные шаги, реальный прогресс — для кошек и собак.",
    screen: {
      header: "Курс: Базовое послушание",
      pet: "Барсик, прогресс 42%",
      items: [
        { label: "Урок 3 пройден", value: "«Место» — освоено", badge: "✓ Готово", color: "green" },
        { label: "Урок 4 сегодня", value: "«Стоп» — 10 минут", badge: "→ Начать", color: "orange" },
        { label: "Серия дней", value: "5 дней подряд", badge: "🔥 Стрик", color: "blue" },
      ],
    },
  },
  {
    id: "shop",
    label: "Магазин",
    icon: "ShoppingBag",
    title: "Только то, что нужно — без лишнего",
    desc: "Корма, наполнители, аксессуары. Рекомендации персонализированы под вашего питомца.",
    screen: {
      header: "Корзина",
      pet: "Рекомендовано для Персика",
      items: [
        { label: "Royal Canin Sterilised 2кг", value: "890 ₽", badge: "В корзине", color: "green" },
        { label: "Наполнитель Ever Clean 6л", value: "640 ₽", badge: "В корзине", color: "green" },
        { label: "Итого", value: "1 530 ₽", badge: "Оформить", color: "orange" },
      ],
    },
  },
];

const badgeColors: Record<string, string> = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-700",
};

export default function Promo() {
  const [activeTab, setActiveTab] = useState("nutrition");
  const tab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="features" className="bg-[hsl(var(--background))] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[hsl(var(--brand-warm))] text-sm font-semibold uppercase tracking-widest mb-4">Возможности</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-dark))] text-balance">
            Всё важное — в одном спокойном пространстве
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-[hsl(var(--muted))] rounded-2xl p-1.5 flex gap-1 flex-wrap justify-center">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === t.id
                    ? "bg-white text-[hsl(var(--brand-dark))] shadow-sm"
                    : "text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-dark))]"
                }`}
              >
                <Icon name={t.icon as "Utensils"} size={15} />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Text */}
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--brand-warm))]/10 flex items-center justify-center mb-6">
                <Icon name={tab.icon as "Utensils"} size={22} className="text-[hsl(var(--brand-warm))]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-dark))] mb-4 leading-tight">
                {tab.title}
              </h3>
              <p className="text-[hsl(var(--brand-muted))] text-lg leading-relaxed mb-8">
                {tab.desc}
              </p>
              <button className="bg-[hsl(var(--brand-dark))] text-white font-medium px-7 py-3.5 rounded-2xl hover:bg-[hsl(var(--brand-warm))] transition-all duration-300 hover:shadow-lg">
                Попробовать
              </button>
            </div>

            {/* Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-[hsl(var(--border))]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[hsl(var(--brand-muted))] text-xs uppercase tracking-wide mb-1">{tab.screen.header}</p>
                    <p className="text-[hsl(var(--brand-dark))] font-semibold text-sm">{tab.screen.pet}</p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[hsl(var(--brand-warm))]/10 flex items-center justify-center">
                    <Icon name={tab.icon as "Utensils"} size={16} className="text-[hsl(var(--brand-warm))]" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {tab.screen.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-4 bg-[hsl(var(--background))] rounded-2xl border border-[hsl(var(--border))]"
                    >
                      <div>
                        <p className="text-xs text-[hsl(var(--brand-muted))] mb-0.5">{item.label}</p>
                        <p className="text-[hsl(var(--brand-dark))] font-semibold text-sm">{item.value}</p>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeColors[item.color]}`}>
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-[#D4845A]/8 border border-[#D4845A]/20 rounded-2xl p-3 flex items-center gap-3">
                  <span className="text-lg">🐾</span>
                  <p className="text-xs text-[hsl(var(--brand-dark))]">
                    {activeTab === "nutrition" && "Этот корм подходит стерилизованным кошкам 1–7 лет."}
                    {activeTab === "health" && "Запишу напоминание о прививке за 3 дня — 2 июня."}
                    {activeTab === "behavior" && "Отличный прогресс! Барсик учится быстрее среднего."}
                    {activeTab === "shop" && "Корм закончится примерно 8 июня. Лучше заказать сейчас."}
                  </p>
                </div>
              </div>
              <div className="absolute -inset-3 bg-[hsl(var(--brand-warm))]/5 rounded-[2rem] blur-2xl -z-10" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
