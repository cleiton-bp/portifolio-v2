import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";
import {
  CurriculumIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsappIcon,
  YouTubeIcon,
} from "./Icons";
import { motion } from "framer-motion";

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
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
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
      "
    >
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
          <CurriculumIcon />
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
        <motion.a
          href="https://wa.me/5551996908049"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-2"
        >
          <WhatsappIcon />
        </motion.a>
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
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
