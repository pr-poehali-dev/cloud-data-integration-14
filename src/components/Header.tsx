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
          ? "bg-white/90 backdrop-blur-xl border-b border-purple-100 shadow-sm shadow-purple-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className={`font-extrabold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-[#3C096C]" : "text-white"}`}>
          <span>ПИТОМЕЦ</span>
          <span className="text-[#FF9100]">ПЛЮС</span>
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
              className={`text-sm font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-[#3C096C] hover:text-[#5A189A]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#start"
            className="bg-[#FF9100] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#e07f00] transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30"
          >
            Начать
          </a>
        </nav>
      </div>
    </motion.header>
  );
}