import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2
      initial={"hidden"}
      whileInView={"visible"}
      variants={slideInFromBottom(0.2)}
      viewport={{
        once:true
      }}
      className="mb-8 text-4xl font-medium capitalize text-white"
    >
      {children}
    </motion.h2>
  );
};
