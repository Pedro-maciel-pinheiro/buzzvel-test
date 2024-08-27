"use client";
import AboutSection from "@/components/about/about-section";
import CareerInBuzzvel from "@/components/career/career-in-buzzvel";
import { LandingPage } from "@/components/landing/landing";
import ProjectSlider from "@/components/project-slide/project-slider";
import BuzzvelPage from "@/components/why/why-buzzvel-page";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <LandingPage />
      <AboutSection />
      <BuzzvelPage/>
      <ProjectSlider/>
      <CareerInBuzzvel />
    </main>
  );
}
