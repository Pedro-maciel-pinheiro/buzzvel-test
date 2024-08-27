import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { WhyBuzzvel } from "@/components/why-buzzvel";

export default function AboutSection() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      className="container mb-32 flex min-h-screen flex-col items-center justify-between xl:scroll-mt-28"
    >
      <div className="mb-20 flex max-w-[90%] flex-col items-center gap-4 md:mb-40">
        <SectionHeading heading={"title_experience"} />
        <Timeline />
      </div>

      <div className="mb-20 flex max-w-[90%] flex-col items-center gap-4 ">
        <SectionHeading heading={"title_skill"} />
        <Skills />
      </div>
    </motion.section>
  );
}
