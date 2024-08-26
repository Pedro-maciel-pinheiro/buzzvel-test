"use client";
import AboutSection from "@/components/about/about-section";
import CareerInBuzzvel from "@/components/career/career-in-buzzvel";
import { LandingPage } from "@/components/landing/landing";
import ProjectSlider from "@/components/project-slide/project-slider";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <LandingPage />
      <AboutSection />
      <ProjectSlider/>
      <CareerInBuzzvel />
    </main>
  );
}
