import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiences = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),

    date: "2019",
  },
  {
    title: "Web Designer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(FaReact),

    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(SiNextdotjs),

    date: "2021 - present",
  },
] as const;

export const experiences_buzzvel = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    icon_2: "",
    date: "2019",
  },
  {
    title: "Web Designer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: "",
    icon_2: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(SiNextdotjs),
    icon_2: "",
    date: "2021 - present",
  },
] as const;
