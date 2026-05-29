import React from "react";
import { motion, useScroll } from "framer-motion";

// Glowing HUD node for the timeline: a faint base ring, a neon ring that
// "draws" itself as you scroll past the entry, and a pulsing core.
function LiIcons({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        {/* base ring */}
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary/25 dark:stroke-primaryDark/25 stroke-1 fill-light dark:fill-dark"
        />
        {/* neon progress ring (draws on scroll) */}
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-[5px] fill-none
            [filter:drop-shadow(0_0_4px_rgba(0,0,255,0.6))] dark:[filter:drop-shadow(0_0_5px_rgba(88,230,217,0.75))]"
          style={{ pathLength: scrollYProgress }}
        />
        {/* pulsing core */}
        <circle
          cx="75"
          cy="50"
          r="9"
          className="animate-pulse fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
}

export default LiIcons;
