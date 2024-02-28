import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewPort={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-3 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Applications
        </motion.div>
        <Skill name="HTML" x="15vw" y="-12vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="ReactJS" x="20vw" y="6vw" />
        <Skill name="NextJS" x="0vw" y="12vw" />
        <Skill name="NodeJS" x="-20vw" y="-15vw" />
        <Skill name="PHP" x="-25vw" y="2vw" />
        <Skill name="C-Sharp" x="32vw" y="-5vw" />
        <Skill name="Docker" x="0vw" y="-19vw" />
        <Skill name="Symfony" x="-25vw" y="18vw" />
        <Skill name="Figma" x="18vw" y="20vw" />
        <Skill name="Web" x="-35vw" y="-4vw" />
        <Skill name="JavaScript" x="-3vw" y="22vw" />
      </div>
    </>
  );
}

export default Skills;
