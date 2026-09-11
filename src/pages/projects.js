import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import notepadLight from "../../public/images/projects/note-pad/note-pad-ligth.png";
import notepadDark from "../../public/images/projects/note-pad/note-pad-dark.png";
import zipPixelLight from "../../public/images/projects/zip-pixel/zip-pixel-ligth.png";
import zipPixelDark from "../../public/images/projects/zip-pixel/zip-pixel-dark.png";
import birthdayCard from "../../public/images/projects/birthday-message/birthday-message-ligth.png";
import { useLanguage } from "@/i18n/LanguageContext";

const FramerImage = motion(Image);

/* Cards fade up once as they enter the viewport; nothing moves after that. */
const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Renders the project thumbnail, swapping between light/dark variants based
   on the active theme (class-based dark mode). Falls back to a single image
   when no dark variant is provided. */
const ProjectImage = ({ img, imgDark, title, priority, sizes }) => {
  const common = {
    alt: title,
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" },
    priority,
    sizes,
  };
  return (
    <>
      <FramerImage
        {...common}
        src={img}
        className={`w-full h-auto ${imgDark ? "dark:hidden" : ""}`}
      />
      {imgDark && (
        <FramerImage
          {...common}
          src={imgDark}
          className="w-full h-auto hidden dark:block"
        />
      )}
    </>
  );
};

/* Static gradient wash behind the grid. */
const Aurora = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-32 -left-24 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[120px] dark:bg-primaryDark/10" />
    <div className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full bg-primaryDark/10 blur-[120px] dark:bg-primary/10" />
    <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-[110px] dark:bg-primaryDark/5" />
  </div>
);

/* `wide` lays the card out side by side across the full row (and stacks below
   lg); without it the card is already stacked, to sit in a half-width column. */
const ProjectCard = ({
  type,
  title,
  summary,
  img,
  imgDark,
  link,
  github,
  wide = false,
  priority = false,
}) => {
  const { t } = useLanguage();
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`group w-full h-full flex rounded-3xl rounded-br-2xl
      border border-solid border-dark bg-light/90 backdrop-blur shadow-2xl
      dark:shadow-md dark:shadow-gray dark:bg-dark/90 dark:border-light
      xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ${
        wide
          ? "items-center justify-between p-12 lg:flex-col lg:p-8"
          : "flex-col p-8"
      }`}
    >
      <Link
        className={`cursor-pointer overflow-hidden rounded-lg ${
          wide ? "w-1/2 lg:w-full" : "w-full"
        }`}
        href={link}
        target="_blank"
      >
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <ProjectImage
            img={img}
            imgDark={imgDark}
            title={title}
            priority={priority}
            sizes={
              wide
                ? "(max-width: 1023px) 100vw, 50vw"
                : "(max-width: 639px) 100vw, 45vw"
            }
          />
        </div>
      </Link>

      <div
        className={`flex flex-1 flex-col items-start justify-between ${
          wide ? "w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6" : "w-full pt-6"
        }`}
      >
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="relative inline-block w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full dark:after:bg-primaryDark"
        >
          <h2
            className={`my-2 w-full text-left font-bold dark:text-light ${
              wide ? "text-4xl sm:text-2xl" : "text-3xl lg:text-2xl"
            }`}
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light md:text-sm">
          {summary}
        </p>
        <div className="mt-auto pt-4 flex items-center">
          {github && (
            <Link href={github} target="_blank" className="w-10 md:w-8">
              <GithubIcon />
            </Link>
          )}
          <Link
            className={`rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold transition-opacity duration-300 hover:opacity-85 dark:bg-light dark:text-dark md:px-4 md:text-base ${
              github ? "ml-4" : ""
            }`}
            href={link}
            target="_blank"
          >
            {t("projects.visitProject")}
          </Link>
        </div>
      </div>
    </motion.article>
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
          <div className="grid grid-cols-12 gap-x-16 gap-y-24 lg:gap-x-8 sm:gap-x-0 sm:gap-y-16">
            <div className="col-span-12">
              <ProjectCard
                wide
                priority
                img={birthdayCard}
                title="Birthday Card"
                summary={t("projects.birthdaymessage")}
                type={t("projects.featured")}
                link="https://cleiton-bp.github.io/birthday-message/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectCard
                img={zipPixelLight}
                imgDark={zipPixelDark}
                title="ZipPixel"
                summary={t("projects.zippixel")}
                type={t("projects.featured")}
                link="https://cleiton-bp.github.io/zip-pixel/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectCard
                img={notepadLight}
                imgDark={notepadDark}
                title="Notepad"
                summary={t("projects.notepad")}
                type={t("projects.featured")}
                link="https://aplication-notepad.netlify.app"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
