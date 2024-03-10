import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light dark:border-opacity-60 sm:text-base">
      <Layout className="py-4 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy;
          <spam className="italic">Programmer Diary</spam>
        </span>
        <div className="flex items-center lg:py-2">
          Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;
          <Link
            href={"/"}
            className="underline underline-offset-2 hover:drop-shadow-lg"
          >
            cleiton-bp
          </Link>
        </div>
        <Link
          href={"https://github.com/cleiton-bp"}
          target="_blank"
          className="underline underline-offset-2 flex hover:drop-shadow-xl"
        >
          Source Code
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
