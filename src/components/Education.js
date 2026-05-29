import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";
import { useLanguage } from "@/i18n/LanguageContext";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-12 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group relative w-full overflow-hidden rounded-xl border border-dark/10 bg-light/40 px-6 py-4 pl-7
          backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary
          hover:shadow-[0_0_24px_-6px_rgba(0,0,255,0.5)] dark:border-light/10 dark:bg-white/5
          dark:hover:border-primaryDark dark:hover:shadow-[0_0_24px_-6px_rgba(88,230,217,0.6)]"
      >
        {/* neon accent bar */}
        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primaryDark" />
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="block font-mono text-sm font-medium text-dark/60 dark:text-light/60 xs:text-xs">
          {time} | {place}
        </span>
        <p className="font-medium w-full mt-1 md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <span className="block w-full text-center font-mono text-base text-primary dark:text-primaryDark mb-2 md:text-sm">
        {"// academic.log"}
      </span>
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        {t("education.title")}
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full origin-top rounded-full bg-gradient-to-b from-primary to-primaryDark
            shadow-[0_0_12px_rgba(0,0,255,0.45)] dark:shadow-[0_0_14px_rgba(88,230,217,0.6)] md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-8 xs:ml-2">
          <Details
            type={t("education.ulbraType")}
            time={`2022 - ${t("education.present")}`}
            place={t("education.ulbraPlace")}
            info={t("education.ulbraInfo")}
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
