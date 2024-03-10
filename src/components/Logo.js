import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div
      className="
    flex 
    item-center 
    justify-center 
    mt-2"
    >
      <MotionLink
        href="/"
        className="
        w-full
        h-full
        p-2
        mt-4
        bg-dark 
        text-light 
        flex 
        items-center 
        justify-center 
        rounded-lg
        text-2x1
        font-bold
        border
        border-solid
        border-transparent
        dark:border-light
      "
        whileHover={{
          backgroundColor: [
            "rgba(18,18,18,1)", // Preto escuro
            "rgba(30,30,30,1)", // Preto um pouco mais claro
            "rgba(51,51,51,1)", // Preto mais claro
            "rgba(76,76,76,1)", // Preto mais claro ainda
            "rgba(102,102,102,1)", // Preto mais claro
            "rgba(128,128,128,1)", // Cinza médio
            "rgba(128,128,128,1)", // Cinza médio
            "rgba(102,102,102,1)", // Preto mais claro
            "rgba(76,76,76,1)", // Preto mais claro ainda
            "rgba(51,51,51,1)", // Preto mais claro
            "rgba(30,30,30,1)", // Preto um pouco mais claro
            "rgba(18,18,18,1)", // Preto escuro
          ],
          transition: { duration: 1.3, repeat: Infinity },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Cleiton-bp
      </MotionLink>
    </div>
  );
};
export default Logo;
