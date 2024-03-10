import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="
        flex 
        items-center 
        justify-center 
        rounded-full 
        font-semibold 
        bg-dark 
        text-light 
        py-3 
        px-6 
        shadow-dark 
        cursor-pointer 
        absolute 
        dark:text-dark 
        dark:bg-light 
        lg:py-2 
        lg:px-4 
        md:text-sm 
        md:py-1.5 
        md:px-3
        xs:bg-transparent 
        xs:dark:bg-transparent
        xs:text-dark 
        xs:dark:text-light
        xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: -105, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewPort={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight 
        dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[38vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-3 
            shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-2 md:p-1.5 xs:text-xs xs:dark:bg-transparent xs:dark:text-light "
          whileHover={{ scale: 1.05 }}
        >
          Web - mobile
        </motion.div>

        <Link target="_blank" href="https://react.dev/">
          <Skill name="React" x="-35vw" y="4vw" />
        </Link>

        <Link target="_blank" href="https://nextjs.org/docs">
          <Skill name="NextJS" x="-43vw" y="-12vw" />
        </Link>

        <Link target="_blank" href="https://nodejs.org/about">
          <Skill name="NodeJS" x="-30vw" y="-22vw" />
        </Link>

        <Link target="_blank" href="https://www.postgresql.org/">
          <Skill name="PostgreSQL" x="0vw" y="11vw" />
        </Link>

        <Link target="_blank" href="https://docs.docker.com/">
          <Skill name="Docker" x="-20vw" y="13vw" />
        </Link>

        <Link target="_blank" href="https://symfony.com/doc/current/index.html">
          <Skill name="Symfony" x="-25vw" y="-13vw" />
        </Link>

        <Link target="_blank" href="https://help.figma.com">
          <Skill name="Figma" x="-9vw" y="-19vw" />
        </Link>

        <Link target="_blank" href="https://www.mongodb.com/">
          <Skill name="MongoDB" x="-8vw" y="20vw" />
        </Link>

        <Link
          target="_blank"
          href="https://reactnative.dev/docs/getting-started"
        >
          <Skill name="React-Native" x="-38vw" y="20vw" />
        </Link>

        <Link target="_blank" href="https://git-scm.com/">
          <Skill name="Git" x="10vw" y="0vw" />
        </Link>
        <Link
          target="_blank"
          href="https://developer.mozilla.org/docs/Web/JavaScript"
        >
          <Skill name="JavaScript" x="8vw" y="-15vw" />
        </Link>
      </div>
    </>
  );
}

export default Skills;
