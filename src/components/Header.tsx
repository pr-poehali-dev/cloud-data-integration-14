import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[hsl(var(--border))] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className={`font-semibold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-[hsl(var(--brand-dark))]" : "text-white"}`}>
          <span className="font-bold">Питомец</span>
          <span className="text-[hsl(var(--brand-warm))]">Плюс</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {[
            { label: "Возможности", href: "#features" },
            { label: "Магазин", href: "#shop" },
            { label: "О нас", href: "#story" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-warm))]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#start"
            className="bg-[hsl(var(--brand-warm))] text-white text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Начать
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
