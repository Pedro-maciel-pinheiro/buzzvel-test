import { Skill_data } from "@/constants/skills-data";
import { fadeInSkills } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Skills = () => {
  return (
    <section className="mx-auto mb-0 mt-6 h-auto w-full max-w-4xl">
      <ul className="grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-6 ">
        {Skill_data.map((skill, index) => (
          <motion.li
            key={skill.skill_name}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            custom={index}
            variants={fadeInSkills}
          >
            <Link
              target="blank"
              href={skill.href}
              className={`flex flex-col-reverse items-center text-white transition-all duration-300 hover:scale-110 `}
            >
              <h3 className="text-[14px] capitalize md:text-lg">
                {skill.skill_name}
              </h3>
              <span className="text-3xl md:text-4xl">{skill.icon}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
