import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      {/* Северус - editorial блок */}
      <section id="story" className="bg-[hsl(var(--brand-dark))] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4845A] text-sm font-semibold uppercase tracking-widest mb-8">История</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Всё началось с Северуса.
            </h2>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Северус помог понять: забота о питомце состоит из маленьких решений каждый день — чем кормить, когда заметить изменения, как не забыть важное и где найти спокойный ответ. Так появилась идея сервиса, который помогает заботиться осознанно.
            </p>
            <div className="w-12 h-px bg-white/20 mb-8" />
            <p className="text-white/40 text-base italic">
              Северус — причина, почему мы начали.{" "}
              <span className="text-[#D4845A] not-italic font-medium">Пуфыч — помощник, который ведёт вас дальше.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Финальный CTA + Footer */}
      <div
        id="start"
        className="relative"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+640px)] -top-[100vh]">
          <div className="h-[640px] sticky top-[calc(100vh-640px)]">
            <div className="bg-[#FAF7F2] h-full w-full flex flex-col">
              {/* CTA */}
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="text-5xl mb-6 block">🐾</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-dark))] mb-5 text-balance">
                    Начните с одного простого шага.
                  </h2>
                  <p className="text-[hsl(var(--brand-muted))] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Создайте профиль питомца, а Пуфыч подскажет, с чего начать: питание, здоровье, поведение или покупки.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-[hsl(var(--brand-warm))] text-white font-semibold px-8 py-4 rounded-2xl hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#D4845A]/20 text-base">
                      Создать профиль питомца
                    </button>
                    <button className="border-2 border-[hsl(var(--border))] text-[hsl(var(--brand-dark))] font-medium px-8 py-4 rounded-2xl hover:border-[hsl(var(--brand-warm))] hover:text-[hsl(var(--brand-warm))] transition-all duration-300 text-base">
                      Посмотреть возможности
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Footer bottom */}
              <div className="bg-[hsl(var(--brand-dark))] py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-8">
                  {[
                    { label: "Сервис", links: ["Питание", "Здоровье", "Поведение", "Магазин"] },
                    { label: "Компания", links: ["О нас", "История", "Поддержка"] },
                  ].map((col) => (
                    <div key={col.label} className="flex flex-col gap-1">
                      <p className="text-white/30 text-xs uppercase tracking-widest mb-2">{col.label}</p>
                      {col.links.map((link) => (
                        <a key={link} href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                          {link}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="text-right">
                  <p className="text-[3.5rem] md:text-[5rem] font-bold text-white/10 leading-none tracking-tight select-none">
                    ПИТОМЕЦ+
                  </p>
                  <p className="text-white/30 text-xs mt-1">© {new Date().getFullYear()} ПитомецПлюс</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
