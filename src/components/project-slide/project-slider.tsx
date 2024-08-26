import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { Slider } from "@/components/slider";
import { useSectionInView } from "@/hooks/hooks";

export default function ProjectSlider() {
  const { ref } = useSectionInView("Slideshow");
  return (
    <section
      ref={ref}
      id="slideshow"
      className="flex min-h-screen w-full max-w-[90%] flex-col items-center justify-center"
    >
      <SectionHeading>Project Slider</SectionHeading>

      <Slider />
    </section>
  );
}
