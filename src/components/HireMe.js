import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

function HireMe() {
  const { t } = useLanguage();
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 
      md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />

        <Link
          href="https://wa.me/5551996908049"
          target="_blank"
          className="flex items-center justify-center text-center leading-tight px-2 absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2 bg-dark text-light drop-shadow-2xl text-sm
            border-2 border-solid border-dark w-20 h-20 rounded-full font-semibold
            hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark
            hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[9px] md:px-1
            "
        >
          {t("hireMe")}
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
