import { Why_Buzzve_textdata } from "@/constants/why-buzzvel";
import { fadeInFromX, fadeInSlider } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

export const WhyBuzzvel = () => {
  const t = useTranslations("buzzvel_statements");
  const animationDelay = 0.5;
  return (
    <div className="text-white">
      <ul className="grid xl:grid-cols-3 gap-3 content-center">
        {Why_Buzzve_textdata.map((buzztext, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * animationDelay, duration: 1 }}
            className="border-4 border-[#00f0f8] rounded-2xl bg-w"
          >
            <div className=" flex flex-col 
            items-center gap-4 justify-center p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white">
                {t(buzztext.title)}
              </h3>
              <p className="font-medium text-gray-400">
                {t(buzztext.description)}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
