import React, { useEffect, useRef, useState } from "react";
import { portfolio_buzzvel } from "@/constants/project-data";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeInSlider } from "@/utils/motion";
import { useTranslations } from "next-intl";

export const Slider = () => {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [constraint, setConstraint] = useState(0);
  const [userClick, setUserClick] = useState(false);
  const t = useTranslations("portfolio_buzzvel");

  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.offsetWidth;
      const totalWidth = slideRef.current.scrollWidth;
      setConstraint(slideWidth - totalWidth);
    }
  }, []);

  return (
    <motion.div
      onDragStart={() => setUserClick(true)}
      onDragEnd={() => setUserClick(false)}
      ref={slideRef}
      className="h-full w-full overflow-hidden p-8"
    >
      <motion.ul
        drag={"x"}
        dragConstraints={{ right: 0, left: constraint }}
        className="flex h-full w-full gap-6"
      >
        {portfolio_buzzvel.map((project, index) => (
          <motion.li
            key={project.title}
            initial={"hidden"}
            whileInView={"visible"}
            variants={fadeInSlider}
            viewport={{ once: true }}
            custom={index}
            className="min-w-[420px] rounded-lg shadow-lg shadow-cyan-400 cursor-grab"
          >
            <div className="">
              <Image
                priority
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="max-h-64 rounded-t-xl object-cover"
                draggable={false}
              />
            </div>

            <div className="relative flex h-64 flex-col items-start gap-2 rounded-b-lg bg-white px-4 py-2">
              <h2 className="text-2xl font-semibold">{t(project.title)}</h2>
              <p className="text-lg font-semibold text-red-700">
                {t(project.tag)}
              </p>
              <p className="font-medium text-gray-600">{t(project.subtitle)}</p>
              <Link
                href={project.href}
                draggable={false}
                target="blank"
                className={`pointer-events-${userClick ? "none" : "auto"}`}
              >
                <button className="absolute bottom-0 right-0 z-10 mx-2 my-2 h-12 w-12 rounded-full bg-black text-cyan-400 transition-all duration-300 hover:scale-105">
                  <BiChevronRight
                    size={45}
                    className="transition-all active:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
