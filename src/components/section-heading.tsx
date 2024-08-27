import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

type SectionHeadingProps = {
  heading: string;
};

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  const t = useTranslations("section-header-text");
  return (
    <motion.h2
      initial={"hidden"}
      whileInView={"visible"}
      variants={slideInFromBottom(0.2)}
      viewport={{
        once: true,
      }}
      className="mb-8 text-2xl  md:text-4xl font-medium capitalize text-white"
    >
      {t(heading)}
    </motion.h2>
  );
};
