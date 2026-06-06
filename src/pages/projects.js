import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import project1 from "../../public/images/projects/image-project.jpg";
import project2 from "../../public/images/projects/notepad.png";
import project3 from "../../public/images/projects/zip-pixel.png";
import { useLanguage } from "@/i18n/LanguageContext";

const FramerImage = motion(Image);

const reveal = {
  hidden: { opacity: 0, y: 80, rotateX: -12, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.12 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Drifting aurora blobs behind the whole grid. */
const Aurora = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      className="absolute -top-32 -left-24 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[120px] dark:bg-primaryDark/20"
      animate={{ x: [0, 120, -40, 0], y: [0, 80, 160, 0], scale: [1, 1.2, 0.9, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full bg-primaryDark/20 blur-[120px] dark:bg-primary/20"
      animate={{ x: [0, -100, 40, 0], y: [0, 120, -60, 0], scale: [1, 0.85, 1.15, 1] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[110px] dark:bg-primaryDark/10"
      animate={{ x: [0, 80, -80, 0], y: [0, -80, 40, 0], scale: [1, 1.1, 0.95, 1] }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

/* A card that tilts toward the cursor, with a moving glare and an
   animated conic-gradient border that lights up on hover. */
const TiltCard = ({ children, className, index = 0, max = 7 }) => {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const glow = useMotionValue(0);
  const angle = useMotionValue(0);

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.28), transparent 45%)`;
  const angleDeg = useTransform(angle, (v) => `${v}deg`);
  const border = useMotionTemplate`conic-gradient(from ${angleDeg}, transparent 55%, rgba(255,159,67,0.95), rgba(181,71,8,0.95), transparent 80%)`;

  useEffect(() => {
    const controls = animate(angle, 360, {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [angle]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const onMouseEnter = () => glow.set(1);
  const onMouseLeave = () => {
    glow.set(0);
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={index}
      transition={{ delay: index * 0.12 }}
      whileHover={{ scale: 1.015 }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`group relative ${className}`}
    >
      {/* animated gradient border (masked to a thin ring) */}
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: border,
          padding: "2px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
      {/* cursor glare */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
        style={{ background: glare, opacity: glow }}
      />
    </motion.article>
  );
};

/* Button that drifts toward the cursor while hovered. */
const Magnetic = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14 });
  const sy = useSpring(y, { stiffness: 220, damping: 14 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github, index = 0 }) => {
  const { t } = useLanguage();
  return (
    <TiltCard
      index={index}
      max={5}
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl
      border border-solid border-dark bg-light/90 backdrop-blur shadow-2xl p-12
      dark:shadow-md dark:shadow-gray dark:bg-dark/90 dark:border-light
      transition-shadow duration-300 hover:shadow-[0_30px_70px_-20px_rgba(181,71,8,0.5)] dark:hover:shadow-[0_30px_70px_-20px_rgba(255,159,67,0.4)]
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
        style={{ transform: "translateZ(20px)" }}
      >
        <FramerImage
          src={img}
          alt={title}
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full h-auto"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          priority
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6"
        style={{ transform: "translateZ(55px)" }}
      >
        <motion.span
          className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.25 }}
        >
          {type}
        </motion.span>
        <Link
          href={link}
          target="_blank"
          className="relative inline-block w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full dark:after:bg-primaryDark"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {github && (
            <Magnetic className="w-10">
              <Link href={github} target="_blank">
                <GithubIcon />
              </Link>
            </Magnetic>
          )}
          <Magnetic className={github ? "ml-4" : ""}>
            <Link
              className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
              href={link}
              target="_blank"
            >
              {t("projects.visitProject")}
            </Link>
          </Magnetic>
        </div>
      </div>
    </TiltCard>
  );
};

const Project = ({ title, type, img, link, github, index = 0 }) => {
  const { t } = useLanguage();
  return (
    <TiltCard
      index={index}
      max={10}
      className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light/90 backdrop-blur p-6
      dark:bg-dark/90 dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
        transition-all duration-300 group-hover:-right-4 group-hover:top-1.5"
      />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
        style={{ transform: "translateZ(20px)" }}
      >
        <FramerImage
          src={img}
          alt={title}
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full h-auto"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </Link>

      <div
        className="w-full flex flex-col items-start justify-between mt-4"
        style={{ transform: "translateZ(45px)" }}
      >
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="relative inline-block w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full dark:after:bg-primaryDark"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Magnetic>
            <Link
              className="text-lg font-semibold underline md:text-base"
              href={link}
              target="_blank"
            >
              {t("projects.visit")}
            </Link>
          </Magnetic>
          <Magnetic className="w-8 md:w-6">
            <Link href={github} target="_blank">
              <GithubIcon />
            </Link>
          </Magnetic>
        </div>
      </div>
    </TiltCard>
  );
};

function Projects() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{`cleiton-bp | ${t("nav.projects")}`}</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="relative w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Aurora />
        <Layout className="pt-16">
          <AnimatedText
            text={t("projects.title")}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-x-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                index={0}
                img={project3}
                title="ZipPixel"
                summary={t("projects.zippixel")}
                type={t("projects.featured")}
                link="https://cleiton-bp.github.io/zip-pixel/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                index={1}
                img={project2}
                title="Notepad"
                summary={t("projects.notepad")}
                type={t("projects.featured")}
                link="https://aplication-notepad.netlify.app"
                github="https://github.com/cleiton-bp/notepad"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                index={0}
                img={project1}
                title="Project Name"
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                index={1}
                img={project1}
                title="Project Name"
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                index={0}
                img={project1}
                title="Project Name"
                summary="A project is a one-time, temporary, and progressive effort undertaken to create a unique product, service, or result. In other words, a project has a determined beginning, middle and end."
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                index={0}
                img={project1}
                title="Project Name"
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                index={1}
                img={project1}
                title="Project Name"
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
