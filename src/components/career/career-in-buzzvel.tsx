import React from "react";
import { SectionHeading } from "../section-heading";
import { useSectionInView } from "@/hooks/hooks";

import { motion } from "framer-motion";
import { fadeIn, fadeInCareer } from "@/utils/motion";
import { career_timeline_buzzvel } from "@/constants/experiences";
import { useTranslations } from "next-intl";

export default function CareerInBuzzvel() {
  const { ref } = useSectionInView("Career" ,0.5);
  const t = useTranslations("career_progression");

  return (
    <section
      ref={ref}
      id="career"
      className="scroll-mt-20 mt-36 flex min-h-screen flex-col items-center max-w-[80%]"
    >
      <SectionHeading heading={"title_career"} />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        variants={fadeIn(1)}
        className="timeline"
      >
        <ul className="py-24">
          {career_timeline_buzzvel.map((exp, index) => (
            <motion.li
              key={index}
              initial={"hidden"}
              whileInView={"visible"}
              custom={index}
              viewport={{
                once: true,
              }}
              variants={fadeInCareer}
              className="-mx-8 mt-4  flex h-auto flex-col items-center
               justify-center gap-2 rounded-lg border-4 border-cyan-500
               p-6 md:rounded-none "
            >
              <h2 className="w-full text-xl font-bold text-white">
                {t(exp.title)}
              </h2>
              <p className="w-full font-semibold text-white">{t(exp.date)}</p>

              <div className="flex w-full flex-col gap-1 font-medium text-gray-300 ">
              

                <h3 className="text-white font-semibold text-lg">{t(exp.description_title[0])}</h3>
                <p>{t(exp.description[0])}</p>


                <h3 className="text-white font-semibold text-lg">{t(exp.description_title[1])}</h3>
                <p> {t(exp.description[1])}</p>
               

               
                <h3 className="text-white font-semibold text-lg">{t(exp.description_title[2])}</h3>
                <p>{t(exp.description[2])} </p>
                
            

              </div>
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
