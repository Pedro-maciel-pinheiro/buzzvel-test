import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { WhyBuzzvel } from "@/components/why-buzzvel";
import { useSectionInView } from "@/hooks/hooks";

export default function BuzzvelPage() {
  const { ref } = useSectionInView("Buzzvel");
  return (
    <section
      ref={ref}
      id="buzzvel"
      className="container mb-16 mt-16 flex h-auto scroll-m-16 md:scroll-mt-96 flex-col items-center justify-center"
    >
      <SectionHeading heading={"title_why_buzzvel"} />
      <div className="mb-16 mt-16 flex max-w-[90%] flex-col items-center justify-center gap-4 md:mb-0">
        <WhyBuzzvel />
      </div>
    </section>
  );
}
