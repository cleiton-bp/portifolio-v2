import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-8 xs:ml-2">
          <Details
            type="Analysis and Systems Development"
            time="2022-presently"
            place="Lutheran University of Brazil (Ulbra)"
            info="The Systems Analysis and Development course prepares me to design, develop, test,
             and maintain software systems. The course lasts three years and covers subjects such 
             as algorithms, programming, databases, software engineering, networks, artificial intelligence, 
             and information security. During the course, I acquired knowledge and skills in several languages 
             and development tools, and carried out practical projects. The course is updated, dynamic, and 
             aligned with the demands of the job market in the technology area."
          />
          <Details
            type="Course name"
            time="start - Finished"
            place="Place"
            info="Info"
          />
          <Details
            type="Course name"
            time="start - Finished"
            place="Place"
            info="Info"
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
