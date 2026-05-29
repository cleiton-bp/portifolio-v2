import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const SKILLS = [
  { name: "React", href: "https://react.dev/" },
  { name: "NestJS", href: "https://docs.nestjs.com" },
  { name: "NodeJS", href: "https://nodejs.org/about" },
  { name: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "Angular", href: "https://angular.io/docs" },
  { name: "PostgreSQL", href: "https://www.postgresql.org/" },
  { name: "MongoDB", href: "https://www.mongodb.com/" },
  { name: "Docker", href: "https://docs.docker.com/" },
  { name: "React-Native", href: "https://reactnative.dev/docs/getting-started" },
  { name: "Figma", href: "https://help.figma.com" },
  { name: "Git", href: "https://git-scm.com/" },
];

const BOOT_CMD = "$ load skill_matrix --all";

// "Materialize" entrance: chips fade + de-blur in sequence, like a HUD booting.
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function Skills() {
  const { t } = useLanguage();
  const panelRef = useRef(null);

  // Move a holographic spotlight to follow the cursor (no re-render — we write
  // CSS variables straight onto the panel node).
  const handleMove = (e) => {
    const node = panelRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 xs:text-4xl">
        {t("skills.title")}
      </h2>

      <motion.div
        ref={panelRef}
        onMouseMove={handleMove}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ "--x": "50%", "--y": "50%" }}
        className="group relative mx-auto my-16 w-full max-w-5xl overflow-hidden rounded-2xl border
          border-dark/10 bg-light/50 backdrop-blur-xl shadow-2xl
          dark:border-primaryDark/20 dark:bg-dark/50 dark:shadow-[0_0_60px_-15px_rgba(88,230,217,0.35)]
          md:my-8"
      >
        {/* Mouse-follow spotlight (light theme: blue, dark theme: teal) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:hidden"
          style={{
            background:
              "radial-gradient(500px circle at var(--x) var(--y), rgba(0,0,255,0.10), transparent 42%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:block"
          style={{
            background:
              "radial-gradient(500px circle at var(--x) var(--y), rgba(88,230,217,0.14), transparent 42%)",
          }}
        />

        {/* Scanline sweeping top → bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 h-px animate-scanline bg-gradient-to-r from-transparent via-primary to-transparent dark:via-primaryDark"
        />

        {/* Terminal window header */}
        <div className="flex items-center gap-2 border-b border-dark/10 px-5 py-3 font-mono text-xs dark:border-light/10">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-dark/50 dark:text-light/50">
            skill_matrix.exe
          </span>
        </div>

        {/* Typed boot command with blinking caret */}
        <div className="px-5 pt-4 font-mono text-xs text-primary dark:text-primaryDark sm:text-[11px]">
          <span className="inline-flex max-w-full items-center">
            <span className="inline-block w-0 animate-typing overflow-hidden whitespace-nowrap">
              {BOOT_CMD}
            </span>
            <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-caret bg-current" />
          </span>
        </div>

        {/* Skill grid */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 p-5 sm:grid-cols-2 xs:grid-cols-1"
        >
          {SKILLS.map((s) => (
            <motion.li key={s.name} variants={itemVariants}>
              <Link
                href={s.href}
                target="_blank"
                className="group/chip relative flex items-center gap-3 overflow-hidden rounded-lg border
                  border-dark/10 bg-light/40 px-4 py-3 backdrop-blur transition-all duration-300
                  hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_24px_-6px_rgba(0,0,255,0.55)]
                  dark:border-light/10 dark:bg-white/5 dark:hover:border-primaryDark
                  dark:hover:shadow-[0_0_24px_-6px_rgba(88,230,217,0.7)]"
              >
                {/* status LED */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-primary dark:bg-primaryDark" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary dark:bg-primaryDark" />
                </span>
                <span className="font-mono text-sm font-semibold tracking-tight text-dark transition-colors group-hover/chip:text-primary dark:text-light dark:group-hover/chip:text-primaryDark md:text-xs">
                  {s.name}
                </span>
                {/* corner accent */}
                <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-transparent transition-colors group-hover/chip:border-primary dark:group-hover/chip:border-primaryDark" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
}

export default Skills;
