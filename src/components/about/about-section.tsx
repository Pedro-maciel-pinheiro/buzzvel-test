import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";

export default function AboutSection() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      className="container mb-32 flex min-h-screen scroll-mt-20 flex-col items-center justify-evenly"
    >
      <div className="mb-20 flex max-w-[90%] flex-col items-center gap-4">
        <SectionHeading>My Experiences </SectionHeading>
        <Timeline />
      </div>

      <div className="mb-20 flex max-w-[90%] flex-col items-center gap-4">
        <SectionHeading>My Skills</SectionHeading>
        <Skills />
      </div>
    </motion.section>
  );
}
