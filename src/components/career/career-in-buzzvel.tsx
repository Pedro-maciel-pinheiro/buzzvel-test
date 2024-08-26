import React from "react";
import { SectionHeading } from "../section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { experiences_buzzvel } from "@/constants/data";
import { motion } from "framer-motion";
import { fadeIn, fadeInDataIndex } from "@/utils/motion";

export default function CareerInBuzzvel() {
  const { ref } = useSectionInView("Career");

  return (
    <section
      ref={ref}
      id="career"
      className="mt-36 flex min-h-screen flex-col items-center"
    >
      <SectionHeading>My Career in Buzzvel</SectionHeading>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        variants={fadeIn(1)}
        className="timeline"
      >
        <ul className="py-24">
          {experiences_buzzvel.map((exp, index) => (
            <motion.li
              key={index}
              initial={"hidden"}
              whileInView={"visible"}
              custom={index}
              viewport={{
                once: true,
              }}
              variants={fadeInDataIndex}
              className="-mx-8 mt-4 flex h-44 flex-col items-center justify-center rounded-lg border-4 border-cyan-500 bg-slate-100 p-2 md:w-96 md:rounded-none"
            >
              <h2 className="flex w-full gap-2 text-xl font-bold">
                {exp.title}
              </h2>
              <h3 className="w-full p-1 font-semibold">
                {exp.location} {exp.date}
              </h3>
              <p className="p-1 font-medium">{exp.description}</p>
              <span className="absolute -right-[68px] top-0 hidden h-16 w-16 -translate-y-10 items-center justify-center rounded-full bg-black text-4xl text-white md:flex">
                {exp.icon}
              </span>
              <span className="absolute -left-[68px] top-0 hidden h-16 w-16 -translate-y-10 items-center justify-center rounded-full bg-black text-4xl text-white md:flex">
                {exp.icon_2}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
