import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light dark:border-opacity-60 sm:text-base">
      {/* neon light sweeping across the top edge */}
      <div className="absolute left-0 -top-[2px] h-[2px] w-full overflow-hidden">
        <motion.div
          className="h-full w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent dark:via-primaryDark"
          animate={{ x: ["-100%", "500%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Layout className="py-4 flex items-center justify-between lg:flex-col lg:py-6">
          <span>
            {new Date().getFullYear()} &copy;{" "}
            <span className="italic">Cleiton-bp</span>
          </span>
          <div className="flex items-center lg:py-2">
            {t("footer.builtWith")}{" "}
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block text-primary dark:text-primaryDark text-2xl px-1"
            >
              &#9825;
            </motion.span>{" "}
            {t("footer.by")}&nbsp;
            <Link
              href={"https://github.com/cleiton-bp"}
              target="_blank"
              className="group relative font-semibold transition-colors hover:text-primary dark:hover:text-primaryDark"
            >
              cleiton-bp
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-primary transition-[width] duration-300 group-hover:w-full dark:bg-primaryDark" />
            </Link>
          </div>
          <Link
            href={"https://github.com/cleiton-bp/portifolio-v2"}
            target="_blank"
            className="group relative flex transition-colors hover:text-primary dark:hover:text-primaryDark"
          >
            {t("footer.sourceCode")}
            <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-primary transition-[width] duration-300 group-hover:w-full dark:bg-primaryDark" />
          </Link>
        </Layout>
      </motion.div>
    </footer>
  );
};

export default Footer;
