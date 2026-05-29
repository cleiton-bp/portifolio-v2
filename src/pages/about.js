import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/nova-2026.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { useLanguage } from "@/i18n/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{`cleiton-bp | ${t("nav.about")}`}</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={t("about.title")}
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 items-start gap-16 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {t("about.biography")}
              </h2>
              <p className="font-medium">{t("about.bio1")}</p>
              <p className="my-4 font-medium">{t("about.bio2")}</p>
              <p className="font-medium">{t("about.bio3")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-3 relative h-max rounded-2xl border-solid border-dark bg-grayDark p-0.5 shadow-md shadow-dark dark:shadow-2 dark:shadow-gray xl:col-span-4 md:order-1 md:col-span-8"
            >
              <Image
                src={profilePic}
                alt="cleiton-bp"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="
                  (max-width:768px) 100vw,
                  (max-width:1200px) 50vw,
                  33vw"
              />
            </motion.div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default About;
