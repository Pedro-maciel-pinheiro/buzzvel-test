import { experiences } from "@/constants/experiences";
import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

export const Timeline = () => {
  const t = useTranslations("experience");
  return (
    <motion.ol className="mt-2 md:mt-16 items-center max-w-4xl">
      {experiences.map((item) => (
        <motion.li
          key={item.title}
          initial="hidden"
          whileInView={"visible"}
          viewport={{
            once: true,
          }}
          variants={slideInFromBottom(0.5)}
          className="relative mb-6 sm:mb-0"
        >
          <div className="flex items-center">
            <div className="z-10 flex h-8 w-8 shrink-0 items-center 
            justify-center rounded-full bg-black ring-0 ring-[#00f0f8] md:ring-8">
              <span className="text-2xl text-white">{item.icon}</span>
            </div>
            <span className="h-0.5 w-full bg-gray-500 sm:flex"></span>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-white">
              {t(item.title)}
            </h3>
            <time className="mb-2 flex gap-2 text-sm font-medium leading-none text-gray-200">
              <p>{item.date}</p>

              <p>{item.location}</p>
            </time>
            <p className="w-fit text-base font-medium text-gray-400">
            {t(item.description)}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
};
