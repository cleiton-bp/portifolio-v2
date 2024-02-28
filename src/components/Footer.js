import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-4 flex items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy;
          <spam className="italic">Programmer Diary</spam>
        </span>
        <div className="flex items-center">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
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
