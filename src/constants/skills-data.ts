import { IoShieldCheckmark } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReactquery,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiGithub,
  SiShadcnui,
  SiFramer,
  SiSwiper,
  SiMongodb,
  SiCss3,
  SiWebflow,
} from "react-icons/si";

import React from "react";

export const Skill_data = [
  {
    skill_name: "React",
    icon: React.createElement(FaReact),
    href: "https://react.dev/",
  },
  {
    skill_name: "Query",
    icon: React.createElement(SiReactquery),
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  {
    skill_name: "Redux",
    icon: React.createElement(SiRedux),
    href: "https://redux.js.org/",
  },
  {
    skill_name: "Next.js",
    icon: React.createElement(SiNextdotjs),
    href: "https://nextjs.org/",
  },
  {
    skill_name: "Next-Auth",
    icon: React.createElement(IoShieldCheckmark),
    href: "https://next-auth.js.org/",
  },
  {
    skill_name: "Java Script",
    icon: React.createElement(SiJavascript),
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    skill_name: "Type Script",
    icon: React.createElement(SiTypescript),
    href: "https://www.typescriptlang.org/",
  },
  {
    skill_name: "CSS",
    icon: React.createElement(SiCss3),
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    skill_name: "Tailwind",
    icon: React.createElement(SiTailwindcss),
    href: "https://tailwindcss.com/",
  },
  {
    skill_name: "Github",
    icon: React.createElement(SiGithub),
    href: "https://github.com/Pedro-maciel-pinheiro",
  },
  {
    skill_name: "Shadcn/ui",
    icon: React.createElement(SiShadcnui),
    href: "https://ui.shadcn.com/",
  },
  {
    skill_name: "Framer Motion",
    icon: React.createElement(SiFramer),
    href: "https://www.framer.com/motion/",
  },
  {
    skill_name: "Swiper",
    icon: React.createElement(SiSwiper),
    href: "https://swiperjs.com/",
  },
  {
    skill_name: "WebFlow",
    icon: React.createElement(SiWebflow),
    href: "https://webflow.com/",
  },
  {
    skill_name: "Mongodb",
    icon: React.createElement(SiMongodb),
    href: "https://www.mongodb.com",
  },
] as const;
