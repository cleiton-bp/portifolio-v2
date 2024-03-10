import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "./Logo";
import {
  CurriculumIcon,
  GithubIcon,
  InstagramIcon,
  InstagramIconMobile,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  YouTubeIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] 
          inline-block 
          w-0 
          bg-dark 
          absolute
          left-0
          -bottom-0.5
          group-hover:w-full 
          transition-[width] 
          ease 
          duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[1px] 
          inline-block 
          w-0 
          bg-light
          absolute
          left-0
          -bottom-0.5
          group-hover:w-full 
          transition-[width] 
          ease 
          duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="
      w-full 
      px-32 
      py-8 
      font-medium 
      flex 
      items-center 
      justify-between
      dark:text-light
      relative
      z-10
      lg:px-16
      md:px-12
      sm:px-8
      "
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Screen full */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-3" />
          <CustomLink href="/about" title="About" className="mx-3" />
          <CustomLink href="/projects" title="Projects" className="mx-3" />
          <CustomLink href="/articles" title="Articles" className="ml-3" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://cleiton-bp.github.io/curriculo/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-2"
          >
            <CurriculumIcon className="dark:fill-light" />
          </motion.a>

          <motion.a
            href="https://github.com/cleiton-bp"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 mx-2"
          >
            <GithubIcon />
          </motion.a>
          {/* <motion.a
          href="https://wa.me/5551996908049"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-2"
        >
          <WhatsappIcon />
        </motion.a> */}
          <motion.a
            href="https://www.linkedin.com/in/cleiton-pereira-249044240/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-2"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/cleiton_bp/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-2"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://youtube.com/@Cleiton_bp"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 mx-2"
          >
            <YouTubeIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Screen Mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md p-32
      "
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-row mt-2">
            <motion.a
              href="https://cleiton-bp.github.io/curriculo/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-2 sm:max-1"
            >
              <CurriculumIcon className="fill-light dark:fill-dark" />
            </motion.a>

            <motion.a
              href="https://github.com/cleiton-bp"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-2 sm:max-1 bg-light rounded-full dark:bg-dark "
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/cleiton-pereira-249044240/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-2 sm:max-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/cleiton-pereira-249044240/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-2 fill-light dark:fill-dark sm:max-1 "
            >
              <InstagramIconMobile />
            </motion.a>
            <motion.a
              href="https://youtube.com/@Cleiton_bp"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-2 sm:max-1"
            >
              <YouTubeIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] xs:hidden">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
