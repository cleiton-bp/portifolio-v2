import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/image-project.jpg";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" /> */}
      <Link
        className="w-1x2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
        />
      </Link>

      <div className="w-1x2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <>
      <Head>
        <title>cleiton-bp | Projects</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination surpasses knowledges!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                img={project1}
                title="Project Name"
                summary="A project is a one-time, temporary, and progressive effort undertaken to create a unique product, service, or result. In other words, a project has a determined beginning, middle and end."
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project1}
                title="Project Name"
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project1}
                title="Project Name"
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={project1}
                title="Project Name"
                summary="A project is a one-time, temporary, and progressive effort undertaken to create a unique product, service, or result. In other words, a project has a determined beginning, middle and end."
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project1}
                title="Project Name"
                type="Featured project"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
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

export default projects;