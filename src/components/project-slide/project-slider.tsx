import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { Slider } from "@/components/slider";
import { useSectionInView } from "@/hooks/hooks";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectSlider() {
  const { ref } = useSectionInView("Slideshow");
  return (
    <section
      ref={ref}
      id="slideshow"
      className="flex scroll-m-28 md:scroll-m-5 md:min-h-screen w-full max-w-[90%] flex-col items-center justify-center"
    >
      <SectionHeading heading={"title_slides"} />

      <FaArrowRightLong 
        size={35}
        className="text-white transition-all active:translate-x-1 block md:hidden
          "
      />

      <Slider />
    </section>
  );
}
