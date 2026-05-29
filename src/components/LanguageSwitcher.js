import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";

const LanguageSwitcher = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === lang) || languages[0];

  // Close when clicking outside the dropdown.
  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const choose = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
        aria-label="Select language"
        className="flex items-center gap-1 rounded-full border border-solid border-dark/20 bg-light/60 px-2 py-1
          text-sm font-semibold text-dark backdrop-blur dark:border-light/20 dark:bg-dark/60 dark:text-light"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="uppercase">{current.code}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[10px] leading-none"
        >
          ▾
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 z-50 mt-2 max-h-72 w-44 overflow-auto rounded-xl border border-solid
              border-dark/15 bg-light p-1 shadow-xl dark:border-light/15 dark:bg-dark"
          >
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => choose(l.code)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm
                    transition-colors hover:bg-dark/5 dark:hover:bg-light/10
                    ${l.code === lang ? "font-bold text-primary dark:text-primaryDark" : "text-dark dark:text-light"}`}
                >
                  <span className="text-base leading-none">{l.flag}</span>
                  <span className="flex-1">{l.name}</span>
                  {l.code === lang && <span className="text-xs">●</span>}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
